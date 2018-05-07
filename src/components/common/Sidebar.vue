<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="[item.icon,fonts]"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="[item.icon,fonts]"></i><span slot="title">{{ item.title }}</span>
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
      fonts: "icon iconfont",
      items: [
        {
          icon: "icon-shouye",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "icon-liucheng",
          index: "table",
          title: "流程话术",
          subs: [
            {
              index: "process-edit",
              title: "流程编辑"
            },
            {
              index: "label-management",
              title: "标签管理"
            },
            {
              index: "universal-corpus",
              title: "通用语料"
            },
            {
              index: "upload-record",
              title: "上传录音"
            },
            {
              index: "application-records",
              title: "申请记录"
            },
            {
              index: "knowledge-management",
              title: "Ai知识库管理"
            }
          ]
        },
        {
          icon: "icon-dianhuajilu",
          index: "call-log",
          title: "拨打日志"
        },
        {
          icon: "icon-_ziyuanguanli",
          index: "resource-management",
          title: "资源管理"
        },
        {
          icon: "icon-manage_staff",
          index: "employee-management",
          title: "员工管理"
        },
        {
          icon: "icon-shezhizhongxin",
          index: "set",
          title: "设置"
        }
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
@import "//at.alicdn.com/t/font_653281_qfn6wbxrnsysnhfr.css";
.icon {
  font-size: 20px;
  margin-right: 8px;
}
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.sidebar > ul {
  height: 100%;
  overflow-y: auto;
}
</style>
