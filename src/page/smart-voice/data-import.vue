//资料导入
<template>
  <div class="dataImport">
      <el-tabs type="border-card">
        <el-tab-pane label="ASR呼叫导入">
            <div class="h_title">
              <div></div>
              导入资料
            </div>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>步骤</span>
              </div>
              <div class="text item">
                <p>1、导入新的ASR群呼资料，请先下载客户资料模板文件（不用模板文件将不能成功导入）。此处点击下载模板文件： <el-button class="blue">下载模板文件</el-button></p>
                <p>2、若为文本（txt）导入,则分隔符为回车、"|"、空格;</p>
                <p>3、浏览选择要导入的文件并提交：</p>
                <el-form ref="upload" :model="upload" label-width="90px" class="fs12">
                  <el-form-item>
                    <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove"
                      :file-list="fileList"
                      :auto-upload="false">
                      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </el-form-item>
                <el-form-item label="选择机器人">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="代理机器人" name="type"></el-checkbox>
                    <el-checkbox label="女金融贷款" name="type"></el-checkbox>
                    <el-checkbox label="房地产" name="type"></el-checkbox>
                    <el-checkbox label="男金融贷款" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              <el-form-item>
                <el-button class="blue" @click="onSubmit">提交</el-button>
              </el-form-item>
                </el-form>
              </div>
            </el-card>
            <div class="h_title">
              <div></div>
              导入批次日志
            </div>
           
        </el-tab-pane>
      </el-tabs>


  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {},
      form: {
        type: []
      },
      fileList: []
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

