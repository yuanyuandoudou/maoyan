<template>
    <div class='login-mao'>
        <MyHeader class='login-mao-top'></MyHeader>
        <div class='login-mao-phone'>
            <input type="text" name="" id="shoujihao" placeholder="请输入手机号" v-model='phone'><a href="#" disabled >发送验证码</a>
        </div>
        <div class='login-mao-check'>
            <input type="text" name="" id="yanzhengma" placeholder="请输入验证码" v-model='code'>
        </div>
        <button @click='logi' class='login-btn'>登录</button>
    </div>
</template>

<script>
import MyHeader from '../components/Myheader1.vue'
export default {
    name:'LoginLu',
    data(){
        return {
            phone:'',
            code:''
        }
    },
   
methods:{
    logi(){
        if(this.phone !== '' && this.code !== ''){
            alert('登陆成功跳转至个人中心')
            localStorage.setItem('user',this.code,this.phone)
            this.$router.push('/me')
        }else{
            alert('请输入电话号和验证码')
        }
     
    }
},
components:{
    MyHeader
},
}

</script>
<style lang='less'>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.login-mao{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-mao-top{
    margin-bottom: 2.6667rem;

}
.login-mao-phone{
    width: 90%;
    font-size: .5rem;
    border-bottom: 1px solid #e8e7e7;

    input{
        width: 70%;
        border:none;
        color:black;
        font-weight: bold;
    }
    a{
        width: 30%;
        color:#cccccc;
    }
}
.login-mao-check{
    width: 90%;
    font-size: .5rem;
    margin-top:.5333rem;
    border-bottom: 1px solid #e8e7e7;
    input{
        width: 70%;
        border:none;
        color:black;
        font-weight: bold;
    }
    }
input::placeholder{
    color:#cccccc;
}
.login-btn{
    margin-top:.5333rem;
    text-align: center;
    color: white;
    background: #f03d37;
    height: 2.8em;
    border-radius: .45rem;
    width: 90%;
    display: block;
    border: none;
    cursor: pointer;
    font-size: .48rem;
}
</style>