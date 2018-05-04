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
                {
                    path: '/call-setings',
                    component: resolve => require(['../page/smart-voice/call-setings.vue'], resolve),
                    meta: {
                        title: 'Ai呼叫设置'
                    }
                },
                {
                    path: '/data-import',
                    component: resolve => require(['../page/smart-voice/data-import.vue'], resolve),
                    meta: {
                        title: 'Ai资料导入'
                    }
                },
                {
                    path: '/data-recovery',
                    component: resolve => require(['../page/smart-voice/data-recovery.vue'], resolve),
                    meta: {
                        title: 'Ai资料回收'
                    }
                },
                {
                    path: '/call-log',
                    component: resolve => require(['../page/smart-voice/call-log.vue'], resolve),
                    meta: {
                        title: 'Ai呼叫记录'
                    }
                },
                {
                    path: '/call-status',
                    component: resolve => require(['../page/smart-voice/call-status.vue'], resolve),
                    meta: {
                        title: 'Ai呼叫状态'
                    }
                },
                {
                    path: '/knowledge-management',
                    component: resolve => require(['../page/smart-voice/knowledge-management.vue'], resolve),
                    meta: {
                        title: 'Ai知识库管理'
                    }
                },
                {
                    path: '/unanswer-record',
                    component: resolve => require(['../page/smart-voice/unanswer-record.vue'], resolve),
                    meta: {
                        title: 'Ai无答案记录'
                    }
                },
                {
                    path: '/voice-replace',
                    component: resolve => require(['../page/smart-voice/voice-replace.vue'], resolve),
                    meta: {
                        title: 'Ai语音替换'
                    }
                },
                {
                    path: '/type-config',
                    component: resolve => require(['../page/smart-voice/type-config.vue'], resolve),
                    meta: {
                        title: 'Ai类型配置'
                    }
                },
                {
                    path: '/voice-flew-chart',
                    component: resolve => require(['../page/smart-voice/voice-flew-chart.vue'], resolve),
                    meta: {
                        title: 'Ai语音流程图'
                    }
                },
                {
                    path: '/customer-search',
                    component: resolve => require(['../page/customer-management/customer-search.vue'], resolve),
                    meta: {
                        title: '客户检索'
                    }
                },
                {
                    path: '/public-data',
                    component: resolve => require(['../page/customer-management/public-data.vue'], resolve),
                    meta: {
                        title: '公有资料'
                    }
                },
                {
                    path: '/recycle-bin',
                    component: resolve => require(['../page/customer-management/recycle-bin.vue'], resolve),
                    meta: {
                        title: '回收站'
                    }
                },
                {
                    path: '/service-record',
                    component: resolve => require(['../page/customer-management/service-record.vue'], resolve),
                    meta: {
                        title: '服务记录'
                    }
                },
                {
                    path: '/seating-status',
                    component: resolve => require(['../page/traffic-management/seating-status.vue'], resolve),
                    meta: {
                        title: '坐席状态'
                    }
                },
                {
                    path: '/queue-status',
                    component: resolve => require(['../page/traffic-management/queue-status.vue'], resolve),
                    meta: {
                        title: '队列状态'
                    }
                },
                {
                    path: '/project-category',
                    component: resolve => require(['../page/project-management/project-category.vue'], resolve),
                    meta: {
                        title: '项目分类'
                    }
                },
                {
                    path: '/project-list',
                    component: resolve => require(['../page/project-management/project-list.vue'], resolve),
                    meta: {
                        title: '项目列表'
                    }
                },
                {
                    path: '/department-management',
                    component: resolve => require(['../page/organizational-structure/department-management.vue'], resolve),
                    meta: {
                        title: '部门管理'
                    }
                },
                {
                    path: '/role-permissions',
                    component: resolve => require(['../page/organizational-structure/role-permissions.vue'], resolve),
                    meta: {
                        title: '角色权限'
                    }
                },
                {
                    path: '/user-management',
                    component: resolve => require(['../page/organizational-structure/user-management.vue'], resolve),
                    meta: {
                        title: '用户管理'
                    }
                },
                {
                    path: '/routing-settings',
                    component: resolve => require(['../page/organizational-structure/routing-settings.vue'], resolve),
                    meta: {
                        title: '路由设置'
                    }
                },
                {
                    path: '/extension-management',
                    component: resolve => require(['../page/organizational-structure/extension-management.vue'], resolve),
                    meta: {
                        title: '分机管理'
                    }
                },
                {
                    path: '/mobile-sms',
                    component: resolve => require(['../page/mass-platform/mobile-sms.vue'], resolve),
                    meta: {
                        title: '手机短信'
                    }
                },
                {
                    path: '/sms-templates',
                    component: resolve => require(['../page/mass-platform/sms-templates.vue'], resolve),
                    meta: {
                        title: '分机管理'
                    }
                },
                {
                    path: '/system-set',
                    component: resolve => require(['../page/set-center/system-set.vue'], resolve),
                    meta: {
                        title: '系统设置'
                    }
                },
                {
                    path: '/bulletin-release',
                    component: resolve => require(['../page/set-center/bulletin-release.vue'], resolve),
                    meta: {
                        title: '公告发布'
                    }
                },
                {
                    path: '/blacklist',
                    component: resolve => require(['../page/set-center/blacklist.vue'], resolve),
                    meta: {
                        title: '黑名单'
                    }
                },
                //产品管理
                {
                    path: '/product-category',
                    component: resolve => require(['../page/product-management/product-category.vue'], resolve),
                    meta: {
                        title: '产品分类'
                    }
                },
                {
                    path: '/product-list',
                    component: resolve => require(['../page/product-management/product-list.vue'], resolve),
                    meta: {
                        title: '产品列表'
                    }
                },
                {
                    path: '/warehousing-records',
                    component: resolve => require(['../page/product-management/warehousing-records.vue'], resolve),
                    meta: {
                        title: '入库记录'
                    }
                },
                {
                    path: '/out-library-records',
                    component: resolve => require(['../page/product-management/out-library-records.vue'], resolve),
                    meta: {
                        title: '出库记录'
                    }
                },
                {
                    path: '/product-recycle-bin',
                    component: resolve => require(['../page/product-management/product-recycle-bin.vue'], resolve),
                    meta: {
                        title: '产品回收站'
                    }
                },
                //订单管理
                {
                    path: '/order-list',
                    component: resolve => require(['../page/order-management/order-list.vue'], resolve),
                    meta: {
                        title: '订单列表'
                    }
                },
                {
                    path: '/express-company',
                    component: resolve => require(['../page/order-management/express-company.vue'], resolve),
                    meta: {
                        title: '快递公司'
                    }
                },
                {
                    path: '/order-report',
                    component: resolve => require(['../page/order-management/order-report.vue'], resolve),
                    meta: {
                        title: '订单报表'
                    }
                }

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
