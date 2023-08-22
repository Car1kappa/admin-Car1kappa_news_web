import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login.vue'
import MainBox from '../views/MainBox.vue'
import routesConfig from "./config.js"
import store from '../store/index'
const routes = [
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"/mainbox",
    name:"mainbox",
    component:MainBox
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.name==="login"){
    next()
  }else{
    //Certifiled?
    if(!localStorage.getItem("token")){
      next({
        path:"/login"
      })
    }else{
      if (!store.state.isGetterRouter){
        ConfigRouter()
        next({
          path:to.fullPath
        })
      }else{
        next()
      }

    }
    }
  }
)

const ConfigRouter = ()=>{
  routesConfig.forEach(item=>{
    router.addRoute("mainbox", item)
  })

  store.commit("changeGetterRouter", true)
}
export default router
