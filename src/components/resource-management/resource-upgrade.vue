// 资源升级
<template>
  <div class="resource-upgrade"> 
    <el-form :model="resourceValidateForm" ref="resourceValidateForm" label-width="100px" class="demo-ruleForm">
       <el-form-item label="现有机器人:"  >
        <span>6个</span>
        <el-button type="text" icon="el-icon-plus"  @click="addRobot"></el-button>
      </el-form-item>
      <el-form-item label="机器人数:" prop="robotNumber" v-show="robotShow">
        <el-input type="text" v-model="resourceValidateForm.robotNumber"></el-input>
      </el-form-item>
       <el-form-item label="到期时间:" >
        <span>2019-12-12</span>
      </el-form-item>
       <el-form-item label="到期延期:" prop="delay" >
        <el-select v-model="resourceValidateForm.delay" placeholder="到期延期时间" style="width:100%;">
          <el-option label="一个月" value="1m"></el-option>
          <el-option label="三个月" value="3m"></el-option>
          <el-option label="六个月" value="6m"></el-option>
          <el-option label="一年" value="1y"></el-option>
          <el-option label="两年" value="2y"></el-option>
        </el-select>
      </el-form-item>
      <div class="btn_content">
        <el-button type="primary" @click="submitForm('resourceValidateForm')">升级</el-button>
      </div>
    </el-form>

  </div>
</template>
<script>
export default {
  data() {
    return {
      robotShow: false,
      resourceValidateForm: {
        robotNumber: "",
        delay: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    addRobot() {
      if (this.robotShow) {
        this.robotShow = false;
      } else {
        this.robotShow = true;
      }
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
