//第三方配置
<template>
   <div>
      <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column width="80" label="序号" type="index"> </el-table-column>
        <el-table-column  label="语音类型" width="100"> 
          <template slot-scope="scope">
              {{scope.row.FType ===1 ? '语音识别':scope.row.FType === 2 ? '语音合成' : '智能语音'}}
          </template>
        </el-table-column>
        <el-table-column label="第三方语音公司"  width="120">
          <template slot-scope="scope">
              {{scope.row.MaderBy ===1 ? '百度':scope.row.MaderBy === 2 ? '阿里' : '科大'}}
          </template>
        </el-table-column>
        <el-table-column property="AppKey" label="语音合成应用key"> </el-table-column>
        <el-table-column property="AppSecret" label="语音合成appSecret"> </el-table-column>
        <el-table-column  label="Rest api地址" property="ApiAddress" ></el-table-column>
      </el-table>
   </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("botManager/FunctionConfigs/").then(d => {
        this.tableData = d.data.results;
      });
    }
  }
};
</script>

