
import Home from './routes/index.js'
import Gravestone from './routes/Gravestone/index.js'
import ArtAndInstallation from './routes/ArtAndInstallationWork/index.js'
import TableAndBench from './routes/TableAndBench/index.js'
import Platform from './routes/Platform/index.js'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: "/", component: Home },
        {   
            path: "/gravestone", 
            component: Gravestone
            
        },
        {   
            path: "/art", 
            component: ArtAndInstallation
            
        },
        {   
            path: "/table", 
            component: TableAndBench
            
        },
        {   
            path: "/platform", 
            component: Platform
            
        }
    ]
})

Vue.createApp({
    data() {
        return {
            mess: "ciao mondo"
        }
    }
}).use(router).mount('#app')
