//语料库
<template>
  <div>
      <el-form :inline="true" ref="data-form" label-position="left">
        <el-form-item> 
          <el-input v-model="search.name" placeholder="请输入姓名、手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchFun()">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="text">excel导入</el-button>
          <el-button type="primary" @click="addCorpusFun">添加语料</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" fixed="left"></el-table-column>
        <el-table-column  label="内容文本" prop="Text" fixed="left" width="140"></el-table-column>
        <el-table-column  label="语料类型" prop="PlayType" width="120">
          <template slot-scope="scope">
              {{scope.row.PlayType == "tts"? "语音合成" : "录音"}}
          </template>
        </el-table-column>
        <el-table-column  label="录音名称" prop="RecordNumber" width="120"></el-table-column>
        <el-table-column  label="回答类型" prop="AnswerType" width="100">
           <template slot-scope="scope">
              {{scope.row.AnswerType == "1"? "主流程" : "问答对"}}
          </template>
        </el-table-column>
        <el-table-column  label="录音" prop="Record" width="280">
            <template slot-scope="scope">
                 <audio class="myAudio" controls  v-if="scope.row.PlayType != 'tts'">
                  <source :src="scope.row.Record" type="audio/ogg">
                  Your browser does not support the audio element.
                </audio>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="200" fixed="right">
          <template slot-scope="scope" >
              <el-button type="text" @click="editFun(scope.row)">修改</el-button>
              <el-button type="text" @click="deleData(scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
     <!-- 添加语料 -->
     <el-dialog title="添加号码" :visible.sync="addCorpusDialog" width="40%">
       <add-corpus @closeDialog="close"></add-corpus>
    </el-dialog>
     <!-- 添加语料 -->
     <el-dialog title="修改语料" :visible.sync="editCorpusDialog" width="40%">
       <edit-corpus @closeDialog="editCorpusDialog = false;getData();" :corpusData= "corpusData"></edit-corpus>
    </el-dialog>
  </div>
</template>
<script>
import AddCorpus from "@/components/corpus/add-corpus.vue";
import EditCorpus from "@/components/corpus/edit-corpus.vue";
export default {
  components: {
    AddCorpus,
    EditCorpus
  },
  data() {
    return {
      tableData: [],
      search: {
        name: ""
      },
      addCorpusDialog: false,
      editCorpusDialog: false,
      corpusData: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("botManager/AnswerContents/").then(d => {
        this.tableData = d.data.results;
      });
    },
    searchFun() {
      this.$axios
        .get("botManager/AnswerContents/?search=" + this.search.name)
        .then(d => {
          this.tableData = d.data.results;
        });
    },
    addCorpusFun() {
      this.addCorpusDialog = true;
    },
    close() {
      this.addCorpusDialog = false;
      this.getData();
    },
    editFun(scope) {
      this.corpusData = scope;
      console.log(this.corpusData, 2);
      this.editCorpusDialog = true;
    },
    /**
     * 删除数据
     */
    deleData(scope) {
      this.$axios
        .delete("botManager/AnswerContents/" + scope.Id + "/")
        .then(d => {
          this.$message.success("删除成功！");
          this.getData();
        });
    }
  }
};
</script>
<style lang="less" scoped>
.myAudio {
  width: 200px;
}
</style>


