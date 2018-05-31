//创建流程
<template>
   <div>
      <el-form :model="form" label-width="80px">
          <el-form-item label="流程名称">
            <el-input placeholder="请输入流程名称" v-model="form.processName"></el-input>
          </el-form-item>
          <el-form-item label="项目名称">
            <el-select v-model="form.projectaName" placeholder="请选择">
              <el-option label="卫星定位项目" value="1"></el-option>
              <el-option label="消防预警项目" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任务名称">
            <el-input placeholder="请输入任务名称" v-model="form.taskName"></el-input>
          </el-form-item>
          <div style="text-align:right">
            <el-button type="primary">确定</el-button>
          </div>
      </el-form>
   </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        processName: "",
        projectaName: "",
        taskName: ""
      }
    };
  }
};
</script>

