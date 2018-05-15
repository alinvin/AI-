//新建语意标签
<template>
  <div>
    <el-form :model="labelForm" ref="labelForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标签名称:" prop="labelName">
        <el-input type="labelName" v-model="labelForm.age"></el-input>
      </el-form-item>
    <el-form-item label="活动形式:" prop="keyWords">
      <el-input type="textarea" v-model="labelForm.keyWords"></el-input>
    </el-form-item>
      <div class="btn_content">
        <el-button type="primary" @click="submitForm('labelForm')">确定</el-button>
      </div>
    </el-form>

  </div>
</template>
<script>
export default {
  data() {
    return {
      labelForm: {
        labelName: "",
        keyWords: ""
      }
    };
  },
  methods: {
    submitForm(labelForm) {
      this.$refs[labelForm].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.btn_content {
  text-align: right;
  button {
    margin-top: 15px;
  }
}
</style>