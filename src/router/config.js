import Home from '../views/home/home.vue'
import Center from '../views/center/center.vue'
import Useradd from '../views/user_manage/UserAdd.vue'
import UserList from '../views/user_manage/UserList.vue'
import NewsAdd from '../views/News_manage/NewsAdd.vue'
import NewsList from '../views/News_manage/NewsList.vue'
import ProductAdd from '../views/product_manage/productAdd.vue'
import ProductList from '../views/product_manage/productList.vue'
import NotFound from "../views/notfound/NotFound.vue"

const routes = [
    {
        path:"/index",
        component:Home
    },
    {
        path:"/center",
        component: Center
    },
    {
        path:"/user_manage/UserAdd",
        component: Useradd
    },
    {
        path: "/user_manage/UserList",
        component: UserList
    },
    {
        path:"/News_manage/NewsAdd",
        component: NewsAdd
    },
    {
        path: "/News_manage/NewsList",
        component: NewsList
    },
    {
        path:"/product_manage/productAdd",
        component: ProductAdd
    },
    {
        path: "/product_manage/productList",
        component: ProductList
    },
    {
        path:"/",
        redirect:"/index"
    },
    {// /aaa /bbb /ccc
        path:"/:pathMatch(.*)*",
        name:"NotFound",
        component: NotFound
    }

]

export default routes