//添加语料
<template>
  <div>
      <el-form :model="form" label-width="80px" ref="form"> 
           <el-form-item label="文本内容:"> 
             <el-input v-model="form.Text" placeholder="文本内容"></el-input>
          </el-form-item>
           <el-form-item label="语料类型:"> 
             <el-select v-model="form.PlayType" placeholder="请选择">
                <el-option label="语音合成" value="tts"></el-option>
                <el-option label="播放录音" value="record"></el-option>
              </el-select>
          </el-form-item>
           <el-form-item label="录音名称:"> 
            <el-input v-model="form.RecordNumber" placeholder="请输入录音名称"></el-input>
          </el-form-item>
            <el-form-item label="回答类型:"> 
             <el-select v-model="form.AnswerType" placeholder="请选择回答类型">
                <el-option label="主流程" value="1"></el-option>
                <el-option label="问答对" value="2"></el-option>
              </el-select>
          </el-form-item>
          <div style="text-align:right">
            <el-button type="primary" @click="submitForm('form')">确定</el-button>
          </div>
     </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        Text: "",
        PlayType: "",
        RecordNumber: "",
        AnswerType: ""
      }
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("botManager/AnswerContents/", this.form).then(d => {
            this.$message.success("新增成功！");
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
