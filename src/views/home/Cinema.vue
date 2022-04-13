<template>
    <div class='cinema'>
        <div class='top1'>
            <div>全城▽</div>
            <div>品牌▽</div>
            <div>特色▽</div>
        </div>
        <div v-for='item in cinema' :key='item.id' class='cinema-1'>
        <div class='cinema-nm'>{{item.nm}} <span>{{item.sellPrice}}</span></div>
        <div class='addr'>{{item.addr}}</div>
        <div class='promotion'>
        <div class='table'>
            <div v-if='item.tag.allowRefund == 1' class='tui'>退</div>
            <div v-if='item.tag.endorse == 1' class='tui'>改签</div>
            <div v-if='item.tag.snack == 1' class='chi'>小吃</div>
            <div v-if='item.tag.vipTag !== ""' class='chi'>折扣卡</div>
            </div>
        <div v-if='item.tag.hallType.length !== 0' class='ting'>
        <div v-for='ting in item.tag.hallType' :key='ting.id'>
        <div class='ting-d'>{{ting}}</div>
        </div>
        </div>
        </div>
        <div v-if='item.promotion.cardPromotionTag !==""' class='ka'>
            <img src="https://i.maoyan.com/images/dpmmweb/cinemaList/img/base/base64/card.png" alt="222">{{item.promotion.cardPromotionTag}}
        </div>
        </div>
    </div>
 
</template>

<script>
import axios from 'axios'
export default {
name:'CinemaMe',
data(){
        return {cinema:[]}
    },
    mounted(){
        axios.get('/ajax/moreCinemas?movieId=0&day=2022-04-08&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1649382316666&cityId=30&optimus_uuid=39D32DF09A3811ECAF522543205D2A14B3260C6DD3604611BD82376C064E5AA8&optimus_risk_level=71&optimus_code=10',{movieId: 0,day:'2022-04-08',offset: 0,limit: 20,districtId: -1,lineId: -1,hallType: -1,brandId: -1,serviceId: -1,areaId: -1,stationId: -1,item: '',updateShowDay: true,reqId: 1649382547447,cityId: 30,optimus_uuid: '39D32DF09A3811ECAF522543205D2A14B3260C6DD3604611BD82376C064E5AA8',optimus_risk_level: 71,optimus_code: 10}).then(res=>{
            this.cinema = res.data.cinemas.cinemas
        })
    }
}
</script>

<style lang='less'>
*{
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
.ka {
    display: flex;
    align-items: center;
    img{
    width: .4rem;
    height: .3733rem;
}}
.cinema{
    margin-top:5.2667rem;
}
.table{
    display: flex;
    margin-bottom: .0533rem;
    div{
        margin-right: .08rem;
         height: .4533rem;

    }
    .tui{
        border:1px solid #589daf;
        color:#589daf;
        font-size: .32rem;
        border-radius: 10%;
        padding:0 .08rem 0 .08rem;

    }
    .chi{
        border:1px solid #ff9900;
        color:#ff9900;
        font-size: .32rem;
        border-radius: 10%;
        padding:0 .08rem 0 .08rem;
    }
}
.cinema .top1{
    width: 100%;
    height: 1.0667rem;
    line-height: 1.0667rem;
    position: fixed;
    top:4rem;
    display: flex;
    background: #ffffff;
    z-index: 5;
    justify-content: space-around;
}
.ting{
    display: flex;
    .ting-d{
        border:1px solid #589daf;
        color:#589daf;
        font-size: .32rem;
        border-radius: 10%;
        padding:0 .08rem 0 .08rem;
    }
}
.promotion{
    display: flex;
}
.cinema .cinema-nm{
    width: 100%;
        line-height: .46rem;
    font-size: .4267rem;
    color: #000;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: .1067rem;
    margin-top: .3467rem;
    span{
        font-size: .48rem;
        color:#f03d37;
        font-weight: normal;
    }
    span::after{
        content:'元起';
        font-size:.32rem;
    }
}
.cinema .addr{
    font-size: .3467rem;
    color:#666666;
        text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: .0533rem;
}
.cinema-1{
    padding-bottom:.4rem;
    padding-left: .2133rem;
    border-bottom: 1px solid rgb(232, 231, 231);
}
</style>
