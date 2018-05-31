//流程话术
<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="我的流程" name="first">
        <el-row>
            <el-col  :offset="12">
              <el-button type="text" icon="el-icon-refresh">刷新</el-button>
              <el-button type="text" icon="el-icon-delete">删除</el-button>
              <el-button type="text" icon="el-icon-download">模板中导入</el-button>
              <el-button type="text" icon="el-icon-upload2">导出</el-button>
              <el-button type="text" icon="el-icon-edit-outline" @click="applicationRecordsDialog=true">申请记录</el-button>
              <el-button @click="getProcessDialog=true">获取流程</el-button>
              <el-button type="primary" icon="el-icon-plus" @click="createProcessDialog=true">创建流程</el-button>
            </el-col>
        </el-row>
        <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
          <el-table-column width="80" label="序号">
            <template slot-scope="scope">
              <el-radio :label="scope.row.id" v-model="radio" name="radio"></el-radio>
            </template>
          </el-table-column>
          <el-table-column property="name" label="流程名称" width="120">
          </el-table-column>
          <el-table-column property="processId" label="流程ID" width="120">
          </el-table-column>
          <el-table-column property="appId" label="AppID" width="120">
          </el-table-column>
          <el-table-column property="cretedTime" label="创建时间" width="220">
          </el-table-column>
          <el-table-column property="note" label="备注" width="120">
          </el-table-column>
          <el-table-column  label="操作">
              <template slot-scope="scope">
                <el-button type="text" @click="editFlow(scope)">编辑</el-button>
                <el-button type="text" @click="labelFun(scope)">标签</el-button>
                <el-button type="text" @click="universalCorpusFun(scope)">通用语料</el-button>
                <el-button type="text"@click="uploadFun(scope)">上传录音</el-button>
                <el-button type="text" @click="templateFun(scope)">申请为模板</el-button>
              </template>
          </el-table-column>
      </el-table>
      <el-row>
        <el-button type="primary">外呼测试</el-button>
      </el-row>
      </el-tab-pane>
      <el-tab-pane label="流程模板" name="second">流程模板</el-tab-pane>
    </el-tabs>
    <el-dialog title="流程编辑" :visible.sync="flowDialog" fullscreen>
      <process-edit></process-edit>
    </el-dialog>
    <el-dialog title="标签管理" :visible.sync="labelManagementDialog" fullscreen >
      <label-management></label-management>
    </el-dialog>
    <el-dialog title="通用语料" :visible.sync="universalCorpusDialog" fullscreen>
      <universal-corpus></universal-corpus>
    </el-dialog>
    <el-dialog title="上传录音" :visible.sync="uploadRecordDialog" fullscreen>
      <upload-record></upload-record>
    </el-dialog>
    <el-dialog title="申请记录" :visible.sync="applicationRecordsDialog">
      <application-records></application-records>
    </el-dialog>
    <el-dialog title="获取流程" :visible.sync="getProcessDialog" width="50%">
      <get-process></get-process>
    </el-dialog>  
    <el-dialog title="创建流程" :visible.sync="createProcessDialog" width="50%">
      <create-process></create-process>
    </el-dialog>  
    <el-dialog title="申请为模板" :visible.sync="templateDialog" width="50%">
      <application-template></application-template>
    </el-dialog>  
  </div>
</template>
<script>
import GetProcess from "@/components/process-speech-surgery/get-process.vue";
import createProcess from "@/components/process-speech-surgery/create-process.vue";
import ProcessEdit from "@/components/process-speech-surgery/process-edit.vue"; //流程编辑
import LabelManagement from "@/components/process-speech-surgery/label-management.vue"; //标签管理
import UniversalCorpus from "@/components/process-speech-surgery/universal-corpus.vue"; //通用语料
import UploadRecord from "@/components/process-speech-surgery/upload-record.vue"; //上传录音
import ApplicationRecords from "@/components/process-speech-surgery/application-records.vue"; //申请记录
import ApplicationTemplate from "@/components/process-speech-surgery/application-template.vue";

export default {
  components: {
    GetProcess,
    createProcess,
    ProcessEdit,
    LabelManagement,
    UniversalCorpus,
    UploadRecord,
    ApplicationRecords,
    ApplicationTemplate
  },
  data() {
    return {
      activeName: "first",
      flowDialog: false,
      labelManagementDialog: false,
      universalCorpusDialog: false,
      createProcessDialog: false,
      getProcessDialog: false,
      uploadRecordDialog: false,
      applicationRecordsDialog: false,
      templateDialog: false,
      radio: "1",
      tableData: [
        {
          id: 1,
          name: "王小虎",
          processId: "ser4543",
          appId: "829cvbwvmw",
          cretedTime: "2018-05-13",
          note: "牛飞萨"
        },
        {
          id: "2",
          name: "王小虎",
          processId: "ser4543",
          appId: "829cvbwvmw",
          cretedTime: "2018-05-13",
          note: "牛飞萨"
        },
        {
          id: "3",
          name: "王小虎",
          processId: "ser4543",
          appId: "829cvbwvmw",
          cretedTime: "2018-05-13",
          note: "牛飞萨"
        }
      ],
      currentRow: null
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(val);
      this.radio = val.id;
    },
    editFlow(scope) {
      console.log(scope);
      this.flowDialog = true;
    },
    labelFun(scope) {
      this.labelManagementDialog = true;
    },
    universalCorpusFun(scope) {
      this.universalCorpusDialog = true;
    },
    uploadFun(scope) {
      this.uploadRecordDialog = true;
    },
    templateFun(scope) {
      this.templateDialog = true;
    }
  }
};
</script>
