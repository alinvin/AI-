//新建客户标签
<template>
   <div>
      <el-form :model="addForm" ref="addForm" label-width="100px" class="demo-ruleForm">
       
        
        <el-form-item label="标签类型:" prop="labelType" >
          <el-select v-model="addForm.labelType" placeholder="请选择标签类型" style="width:100%;">
            <el-option label="A类" value="1"></el-option>
            <el-option label="B类" value="2"></el-option>
            <el-option label="C类" value="3"></el-option>
            <el-option label="D类" value="4"></el-option>
            <el-option label="E类" value="5"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="标签名称:"  >
          <span>可邀请客户</span>
        </el-form-item>
        <el-form-item label="优先级:" prop="priority" >
          <el-select v-model="addForm.priority" placeholder="请选择优先级" style="width:100%;">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="流程标签:" prop="processLabel" >
              <el-select v-model="addForm.processLabel" placeholder="请选择流程标签" style="width:100%;">
                <el-option label="人工服务" value="1"></el-option>
                <el-option label="明确拒绝" value="2"></el-option>
                <el-option label="拒绝" value="3"></el-option>
                <el-option label="无效沟通" value="4"></el-option>
                <el-option label="有意向" value="5"></el-option>
                <el-option label="邀约成功" value="6"></el-option>
              </el-select>
             </el-form-item>  
            </el-col>
            <el-col :span="11">
              </el-form-item>
                <el-form-item label="触发次数:" prop="triggerNumber">
                <el-input type="text" v-model="addForm.triggerNumber"></el-input>
              </el-form-item>
            </el-col>
            
        </el-row>
        <div class="btn_content">
          <el-button type="primary" @click="addFun">加规则</el-button>
          <el-button type="primary" @click="submitForm('addForm')">升级</el-button>
        </div>
      </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      robotShow: false,
      addForm: {
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
    addFun() {}
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

