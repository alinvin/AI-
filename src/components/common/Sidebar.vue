<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "el-icon-tickets",
          index: "table",
          title: "Ai智能语音",
          subs: [
            {
              index: "call-setings",
              title: "Ai呼叫设置"
            },
            {
              index: "data-import",
              title: "Ai资料导入"
            },
            {
              index: "data-recovery",
              title: "Ai资料回收"
            },
            {
              index: "call-log",
              title: "Ai呼叫记录"
            },
            {
              index: "call-status",
              title: "Ai呼叫状态"
            },
            {
              index: "knowledge-management",
              title: "Ai知识库管理"
            },
            {
              index: "unanswer-record",
              title: "Ai无答案记录"
            },
            {
              index: "voice-replace",
              title: "Ai语音替换"
            },
            {
              index: "type-config",
              title: "Ai类型配置"
            },
            {
              index: "voice-flew-chart",
              title: "Ai语音流程图"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "customer-manage",
          title: "客户管理",
          subs: [
            {
              index: "customer-search",
              title: "客户检索"
            },
            {
              index: "public-data",
              title: "公有资料"
            },
            {
              index: "recycle-bin",
              title: "回收站"
            },
            {
              index: "service-record",
              title: "服务记录"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "customer-management",
          title: "话务管理",
          subs: [
            {
              index: "seating-status",
              title: "坐席状态"
            },
            {
              index: "queue-status",
              title: "队列状态"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "project-management",
          title: "项目管理",
          subs: [
            {
              index: "project-category",
              title: "项目分类"
            },
            {
              index: "project-list",
              title: "项目列表"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "organizational-structure",
          title: "组织机构",
          subs: [
            {
              index: "department-management",
              title: "部门管理"
            },
            {
              index: "role-permissions",
              title: "角色权限"
            },
            {
              index: "user-management",
              title: "用户管理"
            },
            {
              index: "routing-settings",
              title: "路由设置"
            },
            {
              index: "extension-management",
              title: "分机管理"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "mass-platform",
          title: "群发平台",
          subs: [
            {
              index: "mobile-sms",
              title: "手机短信"
            },
            {
              index: "sms-templates",
              title: "短信模板"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "set-center",
          title: "设置中心",
          subs: [
            {
              index: "system-set",
              title: "系统设置"
            },
            {
              index: "bulletin-release",
              title: "公告发布"
            },
            {
              index: "blacklist",
              title: "黑名单"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "product-management",
          title: "产品管理",
          subs: [
            {
              index: "product-category",
              title: "产品分类"
            },
            {
              index: "product-list",
              title: "产品列表"
            },
            {
              index: "warehousing-records",
              title: "入库记录"
            },
            {
              index: "out-library-records",
              title: "出库记录"
            },
            {
              index: "product-recycle-bin",
              title: "产品回收站"
            }
          ]
        }
        // {
        //     icon: 'el-icon-tickets',
        //     index: 'table',
        //     title: '基础表格'
        // },
        // {
        //     icon: 'el-icon-message',
        //     index: 'tabs',
        //     title: 'tab选项卡'
        // },
        // {
        //     icon: 'el-icon-date',
        //     index: '3',
        //     title: '表单相关',
        //     subs: [
        //         {
        //             index: 'form',
        //             title: '基本表单'
        //         },
        //         {
        //             index: 'editor',
        //             title: '富文本编辑器'
        //         },
        //         {
        //             index: 'markdown',
        //             title: 'markdown编辑器'
        //         },
        //         {
        //             index: 'upload',
        //             title: '文件上传'
        //         }
        //     ]
        // },
        // {
        //     icon: 'el-icon-star-on',
        //     index: 'charts',
        //     title: 'schart图表'
        // },
        // {
        //     icon: 'el-icon-rank',
        //     index: 'drag',
        //     title: '拖拽列表'
        // },
        // {
        //     icon: 'el-icon-warning',
        //     index: 'permission',
        //     title: '权限测试'
        // },
        // {
        //     icon: 'el-icon-error',
        //     index: '404',
        //     title: '404页面'
        // }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
  overflow-y: auto;
}
</style>
