//修改号码
<template>
   <div>
     <el-form :model="form" label-width="80px" ref="form"> 
        <el-form-item label="姓名:"> 
            <el-input v-model="form.Name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="称呼:"> 
            <el-input v-model="form.CustomerAlias" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话:"> 
            <el-input v-model="form.Phone" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <div style="text-align:right">
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
        </div>
     </el-form>
   </div>
</template>

<script>
export default {
  components: {},
  props: ["lineData"],
  data() {
    return {
      form: {}
    };
  },
  mounted() {
    this.form = this.lineData;
    console.log(this.lineData, 11);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .put("botManager/customers/" + this.lineData.Id + "/", this.form)
            .then(d => {
              this.$message.success("修改成功！");
              this.$emit("closeDialog");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
</style>
