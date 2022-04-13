import Vue from "vue";
import VueRouter from "vue-router";
import MyMovie from "../views/home/Movie.vue";
import HotMovie from "../views/home/Hotmovie.vue";
import MaoYan from "../views/Maoyan.vue";
import DiuShi from '../views/page404.vue'
import TuiJian from "../views/video/Tuijian.vue"

Vue.use(VueRouter);

const routes = [
  {path:'/',redirect:'/maoyan/movie/hotmovie'},
  { path: "/maoyan", name: "maoyan", component: MaoYan, children: [
    { 
      path: "/maoyan/movie",
      name: "movie",
      component: MyMovie,
      children: [
        { path: "/maoyan", redirect: "/maoyan/movie/hotmovie" },
        {
          path: "/maoyan/movie/hotmovie",
          name: "hotmovie",
          component: HotMovie,
        },
        {
          path: "/maoyan/movie/cinema",
          name: "cinema",
          component: () =>
            import(
              /* webpackChunkName: "cinema" */ "../views/home/Cinema.vue"
            ),
        },
        {
          path: "/maoyan/movie/waitmovie",
          name: "waitmovie",
          component: () =>
            import(
              /* webpackChunkName: "waitmovie" */ "../views/home/Waitmovie.vue"
            ),
        },
        {
          path: "/maoyan/movie/classicalmovie",
          name: "classicalmovie",
          component: () =>
            import(
              /* webpackChunkName: "classicalmovie" */ "../views/home/Classicalmovie.vue"
            ),
        },
      ],
    },
    {
      path: "/video",
      name: "video",
      component: () =>
        import(/* webpackChunkName: "video" */ "../views/Video.vue"),
        children:[
          {path:'/video',redirect:'/video/tuijian'},
          {
            path: "/video/tuijian",
            name: "tuijian",
            component: TuiJian,
          },
          {
            path: "/video/yugao",
            name: "yugao",
            component: () =>
              import(
                /* webpackChunkName: "yugao" */ "../views/video/Yugao.vue"
              ),
          }, 
          {
            path: "/video/jiedu",
            name: "jiedu",
            component: () =>
              import(
                /* webpackChunkName: "jiedu" */ "../views/video/Jiedu.vue"
              ),
          },
          {
            path: "/video/talkmovie",
            name: "talkmovie",
            component: () =>
              import(
                /* webpackChunkName: "talkmovie" */ "../views/video/Talkmovie.vue"
              ),
          },
          {
            path: "/video/yule",
            name: "yule",
            component: () =>
              import(
                /* webpackChunkName: "yule" */ "../views/video/Yule.vue"
              ),
          },
        ],
    },
    {
      path: "/shortvideo",
      name: "shortvideo",
      component: () =>
        import(
          /* webpackChunkName: "shortvideo" */ "../views/Shortvideo.vue"
        ),
    },
    {
      path: "/show",
      name: "show",
      component: () =>
        import(/* webpackChunkName: "show" */ "../views/Show.vue"),
    },
    {
      path: "/me",
      name: "me",
      meta:{require:true},
      component: () =>
        import(/* webpackChunkName: "me" */ "../views/Me.vue"),
    },
  ] },
        {
        path: "/moviedetail/:userid",
        name: "moviedetail",
        component: () =>
          import(
            /* webpackChunkName: "moviedetail" */ "../views/home/Moviedetail.vue"
          )},
          {
            path: "/login",
            name: "login",
            component: () =>
              import(
                /* webpackChunkName: "login" */ "../views/Login.vue"
              )
            },
            {
              path: "/address",
              name: "address",
              component: () =>
                import(
                  /* webpackChunkName: "address" */ "../views/Address.vue"
                )
              },
              {
                path:'*',
                component:DiuShi
              }

];


const router = new VueRouter({
  routes,
});

router.beforeEach((to,from,next)=>{
if(to.meta.require){
  if(localStorage.getItem('user')){
    next()
  }else{
  router.push('/login')
  }
}else{
  next()
}

});
export default router;
