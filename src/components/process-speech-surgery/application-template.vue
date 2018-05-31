//申请为模板
<template>
  <div>
    <el-form :model="form" label-width="80px">
      <el-form-item label="模板名称" >
        <el-input placeholder="请输入模板名称" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="模板行业">
        <el-input placeholder="请输入模板行业" v-model="form.industry"></el-input>
      </el-form-item>
      <div style="text-align:right">
        <el-button type="primary">申请</el-button>
      </div>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        industry: ""
      }
    };
  }
};
</script>

<style>
</style>
