import App from '../page/home/App'
import Home from '../page/home/home'

const router = [{
    path:'/home',
    component: App,
    children:[{
        path:'/home/app',
        component: Home,
        children:[]
    }]
}]

export default router