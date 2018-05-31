//通用语料
<template>
  <div class="dataRecovery">
    <el-row>
      <el-col :span="4">
        <div class="title">
          <span>序号</span>
          <span>话题</span>
          <el-tooltip placement="right" effect="light" content="搜索">
            <span class="el-icon-search"></span>
          </el-tooltip>
        </div>
        <el-input placeholder="请输入话题名称" style="margin: 10px 0;"></el-input>
        <el-table :data="topicData" :show-header="false">
          <el-table-column  type="index" width="50"></el-table-column>
            <el-table-column>
                <template slot-scope="scope">
                  <el-tooltip  placement="right" effect="light">
                      <div slot="content">{{scope.row.name}}</div>
                      <span>{{scope.row.name}}</span>
                  </el-tooltip>
                </template>
              
          </el-table-column>
        </el-table>
        <el-button type="primary" icon="el-icon-plus" style="width:100%;">新增话题</el-button>
      </el-col>
      <el-col :span="19" :offset="1">
          <div class="title">
          <span>物料</span>
        </div>
        <el-row style="margin: 10px 0;" type="flex" justify="space-between">
          <el-input placeholder="请输入话题名称" v-model="input5">
            <el-button slot="append" icon="el-icon-search" type="primary">搜索</el-button>
          </el-input>
          <el-button type="primary" icon="el-icon-plus" @click="addCorpusDialog=true">添加语料</el-button>
        </el-row>
        <el-table ref="singleTable" :data="tableData2" :show-header="false"  style="width: 100%">
            <el-table-column >
              <template slot-scope="scope">
                <div>
                  <span>用户:</span>
                  <span>{{scope.row.user}}</span>
                </div>
                <div>
                  <span>机器人:</span>
                  <span>{{scope.row.robot}}</span>
                </div>
              </template>
            </el-table-column>
          <el-table-column  label="操作" fixed="right" width="100px;">
              <template slot-scope="scope">
                <el-button type="text">编辑</el-button>
                <el-button type="text">删除</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <!-- 添加语料弹窗 -->
    <el-dialog title="添加语料" :visible.sync="addCorpusDialog" width="50%" append-to-body @close="close"> 
      <add-corpus ref="add-corpus"></add-corpus>
    </el-dialog>
  </div>
</template>
<script>
import AddCorpus from "@/components/universal-corpus/add-corpus.vue";
export default {
  data() {
    return {
      addCorpusDialog: false,
      input5: "",
      tableData2: [
        {
          user: "顺丰",
          robot: "智能家庭护理机器人"
        },
        {
          user: "顺丰",
          robot: "智能家庭护理机器人"
        }
      ],
      topicData: [
        {
          name: "层高"
        },
        {
          name: "楼盘配置"
        },
        {
          name: "姓名"
        },
        {
          name: "一户基层"
        },
        {
          name: "位置"
        },
        {
          name: "管住医疗"
        }
      ]
    };
  },
  components: {
    AddCorpus
  },
  methods: {
    close() {
      let addCorpus = this.$refs["add-corpus"];
      addCorpus.emptyData();
    }
  }
};
</script>
<style lang="less">
.el-input-group {
  width: 40%;
}
.title {
  display: flex;
  height: 35px;
  align-items: center;
  background: rgb(64, 158, 255);
  border-radius: 3px;
  margin-top: 10px;
  span {
    flex: 1;
    height: 100%;
    line-height: 35px;
    color: #fff;
    font-size: 13px;
    text-align: center;
  }
  span:nth-child(2) {
    flex: 2;
  }
}
</style>


