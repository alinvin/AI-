//获取流程弹窗
<template>
  <div>
    <el-form :model="form" label-width="80px">
        <el-form-item label="流程ID">
          <el-input placeholder="请输入流程ID" v-model="form.processId"></el-input>
        </el-form-item>
        <el-form-item label="AppID">
          <el-input placeholder="请输入AppID" v-model="form.appId"></el-input>
        </el-form-item>
        <el-form-item label="流程名称">
          <el-input placeholder="请输入流程名称" v-model="form.processName"></el-input>
        </el-form-item>
        <div style="text-align:right">
          <el-button type="primary">获取</el-button>
        </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        processId: "",
        appId: "",
        processName: ""
      }
    };
  }
};
</script>
