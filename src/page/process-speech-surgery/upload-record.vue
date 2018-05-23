//上传录音
<template>
  <div class="uploadVoice">
    <div>
      <el-row>
        <el-col :span="10">
          <el-input prefix-icon="el-icon-search" style="width:60%"></el-input>
          <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col :span="1" :offset="12">
          <el-button type="primary">识别上传</el-button>
        </el-col>
    </el-row>
    <el-table :data="tableData">
      <el-table-column prop="process" label="流程"></el-table-column>
      <el-table-column prop="userCorpus" label="用户语料"></el-table-column>
      <el-table-column prop="robotCorpus" label="机器人语料"></el-table-column>
      <el-table-column prop="filesName" label="录音文件名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
           <el-button type="text" size="small">上传录音</el-button>
           <el-button type="text" size="small">清空</el-button>
        </template>
      </el-table-column>
      
    </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          process: "当地产推荐",
          userCorpus: "是否",
          robotCorpus: "让我发你我",
          filesName: "时代峰峻"
        }
      ]
    };
  }
};
</script>

