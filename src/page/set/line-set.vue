//线路配置
<template>
   <div>
      <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column width="80" label="序号" type="index"> </el-table-column>
        <el-table-column property="Name" label="线路名称"> </el-table-column>
        <el-table-column property="SipIP" label="外线地址"> </el-table-column>
        <el-table-column property="SipPort" label="端口号"> </el-table-column>
        <el-table-column property="SipAccount" label="外线账号"> </el-table-column>
        <el-table-column property="SipPassword" label="外线账号密码"> </el-table-column>
        <el-table-column property="ParalCount" label="并行数量"> </el-table-column>
        <el-table-column property="UsedCount" label="已使用数量"> </el-table-column>
        <el-table-column property="Remark" label="备注"> </el-table-column>
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
      this.$axios.get("botManager/lines/").then(d => {
        this.tableData = d.data.results;
        console.log(this.tableData, 2);
      });
    }
  }
};
</script>

