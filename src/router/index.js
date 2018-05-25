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
                title: '自述文件'
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
                    path: '/process-edit',
                    component: resolve => require(['../page/process-speech-surgery/process-edit.vue'], resolve),
                    meta: {
                        title: '流程编辑',
                        parent: '流程话术'
                    }
                },
                {
                    path: '/label-management',
                    component: resolve => require(['../page/process-speech-surgery/label-management.vue'], resolve),
                    meta: {
                        title: '标签管理',
                        parent: '流程话术'

                    }
                },
                {
                    path: '/universal-corpus',
                    component: resolve => require(['../page/process-speech-surgery/universal-corpus.vue'], resolve),
                    meta: {
                        title: '通用语料',
                        parent: '流程话术'

                    }
                },
                {
                    path: '/upload-record',
                    component: resolve => require(['../page/process-speech-surgery/upload-record.vue'], resolve),
                    meta: {
                        title: '上传录音',
                        parent: '流程话术'

                    }
                },
                {
                    path: '/application-records',
                    component: resolve => require(['../page/process-speech-surgery/application-records.vue'], resolve),
                    meta: {
                        title: '申请记录',
                        parent: '流程话术'

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
                // {
                //     path: '/set',
                //     component: resolve => require(['../page/set/set.vue'], resolve),
                //     meta: {
                //         title: '设置',
                //         parent: ''
                //     }
                // }
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
