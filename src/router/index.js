import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: ''
            },
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['../page/Dashboard.vue'], resolve),
                    meta: {
                        title: '系统首页'
                    }
                },
                // 流程话术
                {
                    path: '/process-speech-surgery',
                    component: resolve => require(['../page/process-speech-surgery/process-speech-surgery.vue'], resolve),
                    meta: {
                        title: '流程话术',
                        parent: ''
                    }
                },
                // 拨打日志
                {
                    path: '/call-log',
                    component: resolve => require(['../page/call-log/call-log.vue'], resolve),
                    meta: {
                        title: '拨打日志',
                        parent: ''
                    }
                },
                // 号码库管理
                {
                    path: '/number-management',
                    component: resolve => require(['../page/number-management/number-management.vue'], resolve),
                    meta: {
                        title: '号码库管理',
                        parent: ''
                    }
                },
                //资源管理
                {
                    path: '/resource-management',
                    component: resolve => require(['../page/resource-management/resource-management.vue'], resolve),
                    meta: {
                        title: '资源管理',
                        parent: ''
                    }
                },
                {
                    path: '/employee-management',
                    component: resolve => require(['../page/employee-management/employee-management.vue'], resolve),
                    meta: {
                        title: '员工管理',
                        parent: ''
                    }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../page/login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
