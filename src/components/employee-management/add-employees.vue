//添加员工
<template>
  <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
         <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-select v-model="ruleForm.position" placeholder="请选择职位">
            <el-option label="CEO" value="1"></el-option>
            <el-option label="CTO" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门">
          <el-select v-model="ruleForm.dept" placeholder="请选择部门">
            <el-option label="财务部" value="1"></el-option>
            <el-option label="技术部" value="2"></el-option>
          </el-select>
        </el-form-item>
        <div style="text-align:right" >
          <el-button type="primary">确认</el-button>
        </div>
      </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        account: "",
        mobile: "",
        name: "",
        position: "",
        dept: ""
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 10,
            max: 11,
            message: "长度在 10 到 11 个字符",
            trigger: "blur"
          }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  }
};
</script>
