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
          <el-button type="primary" @click="uploadDialog=true">识别上传</el-button>
        </el-col>
    </el-row>
    <el-table :data="tableData">
      <el-table-column prop="process" label="流程"></el-table-column>
      <el-table-column prop="userCorpus" label="用户语料"></el-table-column>
      <el-table-column prop="robotCorpus" label="机器人语料"></el-table-column>
      <el-table-column label="录音文件名">
        <template slot-scope="scope">
            <el-button type="text" @click="iconShowFun">{{scope.row.filesName}}</el-button>
            <i class="icon iconfont icon-shengyin" v-show="iconShow"></i>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
           <el-button type="text" size="small" >上传录音</el-button>
           <el-button type="text" size="small">清空</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <el-dialog title="识别上传" :visible.sync="uploadDialog" width="30%" append-to-body>
      <div>
        <el-button type="primary"  @click="startRecording">开始录音</el-button>
        <el-button type="primary"  @click="stopRecord">停止录音</el-button>
        <el-button type="primary"  @click="playRecord">播放录音</el-button>
        <el-button type="primary"  @click="obtainRecord">获取录音</el-button>
        <audio controls autoplay src="" ref="audio" style="width:100%;" id="audio"></audio>
      </div>
      <div slot="footer">
        <el-button type="default">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import "static/js/audio.js";
let recorder = "";
export default {
  data() {
    return {
      uploadDialog: false,
      iconShow: false,
      tableData: [
        {
          process: "当地产推荐",
          userCorpus: "是否",
          robotCorpus: "让我发你我",
          filesName: "时代峰峻"
        }
      ]
    };
  },
  methods: {
    /* 音频 */
    startRecording() {
      HZRecorder.get(function(rec) {
        console.log(recorder);
        recorder = rec;
        recorder.start();
      });
    },
    obtainRecord() {
      var record = recorder.getBlob();
      console.log(record);
    },
    stopRecord() {
      recorder.stop();
    },
    playRecord() {
      let audio = this.$refs.audio;
      recorder.play(audio);
    }
  },
  iconShowFun() {
    console.log("1");
    this.iconShow = true;
  }
};
</script>
<style lang="less" scoped>
.iconfont {
  color: rgb(64, 158, 255);
  margin-left: 5px;
  cursor: pointer;
  position: relative;
  top: 1px;
}
</style>
  