<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">
                <el-breadcrumb separator="/">
                        <el-breadcrumb-item>{{menuName}}</el-breadcrumb-item>
                        <el-breadcrumb-item><a>{{subName}}</a></el-breadcrumb-item>
                </el-breadcrumb>
                <transition name="move" mode="out-in">
                    
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      menuName: "",
      subName: ""
    };
  },
  components: {
    vHead,
    vSidebar,
    vTags
  },
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  },
  mounted() {
    console.log(this.$route.meta.title);
    this.getName();
  },
  methods: {
    getName() {
      if (this.$route.meta.parent) {
        this.menuName = this.$route.meta.parent;
        this.subName = this.$route.meta.title;
      } else {
        this.menuName = this.$route.meta.title;
        this.subName = "";
      }
    }
  }
};
</script>
