//拨打日志
<template>
  <div>
    <el-table :data="tableData" style="width:100%;">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="status" label="拨打状态"></el-table-column>
      <el-table-column prop="longTime" label="时长（秒）"></el-table-column>
      <el-table-column prop="outNumber" label="拨出电话"></el-table-column>
      <el-table-column prop="keyWords" label="关键字"></el-table-column>
      <el-table-column prop="notes" label="备注"></el-table-column>
      <el-table-column prop="outTime" label="呼出时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button type="text" @click="details(scope.row)">查看详情</el-button>  
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align:right;padding:20px 0">
      <el-button type="primary">确定</el-button>
    </div>
    <!-- 详情弹窗 -->
    <el-dialog :title="'详情：'+logDetails.mobile" :visible.sync="detailsDialog" width="70%" append-to-body>
       <mobile-details></mobile-details>
    </el-dialog>
  </div>
</template>
<script>
import MobileDetails from "@/components/number-management/mobile-details.vue";
export default {
  components: {
    MobileDetails
  },
  props: ["logDetails"],
  data() {
    return {
      detailMessage: "",
      detailsDialog: false,
      tableData: [
        {
          status: "接通",
          longTime: "233",
          outNumber: "18723324444",
          keyWords: "确认还款",
          notes: "一级客户",
          outTime: "2018-12-22"
        }
      ]
    };
  },
  methods: {
    details(scope) {
      this.detailsDialog = true;
      this.detailMessage = scope;
    }
  }
};
</script>

