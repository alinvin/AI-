//流程话术
<template>
  <div>
    <template>
      <el-tabs v-model="activeName">
        <el-tab-pane label="我的流程" name="first">
          <el-row>
              <el-col  :offset="12">
                <el-button type="text" icon="el-icon-refresh">刷新</el-button>
                <el-button type="text" icon="el-icon-delete">删除</el-button>
                <el-button type="text" icon="el-icon-download">模板中导入</el-button>
                <el-button type="text" icon="el-icon-upload2">导出</el-button>
                <el-button type="text" icon="el-icon-edit-outline">申请记录</el-button>
                <el-button>获取流程</el-button>
                <el-button type="primary" icon="el-icon-plus">创建流程</el-button>
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
                  <el-button type="text">编辑</el-button>
                  <el-button type="text">标签</el-button>
                  <el-button type="text">通用语料</el-button>
                  <el-button type="text">上传录音</el-button>
                  <el-button type="text">申请为模板</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row>
         <el-button type="primary">外呼测试</el-button>
        </el-row>
        </el-tab-pane>
        <el-tab-pane label="流程模板" name="second">流程模板</el-tab-pane>
      </el-tabs>
    </template>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
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
    }
  }
};
</script>
