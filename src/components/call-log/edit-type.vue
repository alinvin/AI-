//修改客户类型
<template>
  <div>
    <el-form :model="form">
      <el-form-item label="类型">
          <el-select v-model="form.type" placeholder="请选择客户类型">
            <el-option label="未分类" value="0"></el-option>
            <el-option label="无效客户" value="1"></el-option>
            <el-option label="有效客户" value="2"></el-option>
          </el-select>
      </el-form-item>
      <div style="text-align:right;">
        <el-button type="primary">确认</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: ""
      }
    };
  }
};
</script>

<style>
</style>
