//号码库管理
<template>
  <div>
    <el-form :inline="true" ref="data-form" label-position="left">
      <!-- <el-form-item label="开始时间:">
        <el-date-picker v-model="search.startTime" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间:">
        <el-date-picker v-model="search.endTime" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>-->
      <el-form-item> 
        <el-input v-model="search.name" placeholder="请输入姓名、手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchFun()">搜索</el-button>
        <!-- <el-button type="text" @click="seniorFun">高级查找</el-button> -->
      </el-form-item>
      <el-form-item>
        <el-button type="text">excel导入</el-button>
        <el-button type="primary" @click="addNumberFun">添加号码</el-button>
      </el-form-item>
      <div v-show="seniorSearch">
        <el-form-item label="方案:">
           <el-select v-model="search.case" placeholder="请选择">
            <el-option label="方案1" value="1"></el-option>
            <el-option label="方案2" value="2"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="状态:">
           <el-select v-model="search.status" placeholder="请选择">
            <el-option label="未接通" value="1"></el-option>
            <el-option label="已接通" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户类型:">
           <el-select v-model="search.customerType" placeholder="请选择">
            <el-option label="A" value="1"></el-option>
            <el-option label="B" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否测试:">
           <el-select v-model="search.test" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="2"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <!-- table -->
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column  label="姓名" prop="Name"></el-table-column>
        <el-table-column  label="称呼" prop="CustomerAlias"></el-table-column>
        <el-table-column  label="手机号" prop="Phone"></el-table-column>
        <el-table-column label="操作" fixed="right">
          <template slot-scope="scope" >
              <el-button type="text" @click="logFun(scope.row)">拨打日志</el-button>
              <el-button type="text" @click="editFun(scope.row)">修改</el-button>
              <el-button type="text" @click="deleData(scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 拨打日志 -->
    <el-dialog title="拨打日志" :visible.sync="logDialog" width="60%">
      <log :logDetails="logDetails" ref="log"></log>
    </el-dialog>
     <!-- 修改号码 -->
     <el-dialog title="修改号码" :visible.sync="editNumberDialog"  width="50%">
       <edit-number :lineData="lineData" @closeDialog="editNumberDialog = false;getData();"></edit-number>
    </el-dialog>
    <!-- 添加号码 -->
     <el-dialog title="添加号码" :visible.sync="addNumberDialog" width="50%" >
       <add-number @closeDialog="close"></add-number>
    </el-dialog>
  </div>
</template>
<script>
import Log from "@/components/number-management/log.vue";
import AddNumber from "@/components/number-management/add-number.vue";
import EditNumber from "@/components/number-management/edit-number.vue";

export default {
  components: {
    Log,
    AddNumber,
    EditNumber
  },
  data() {
    return {
      logDetails: "",
      logDialog: false,
      seniorSearch: false,
      editNumberDialog: false,
      addNumberDialog: false,
      search: {
        startTime: "",
        endTime: "",
        name: "",
        case: "",
        status: "",
        customerType: "",
        test: ""
      },
      tableData: [],
      lineData: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("botManager/customers/").then(d => {
        this.tableData = d.data.results;
      });
    },
    seniorFun() {
      if (this.seniorSearch === true) {
        this.seniorSearch = false;
      } else {
        this.seniorSearch = true;
      }
    },
    //拨打日志
    logFun(scope) {
      this.logDialog = true;
      this.logDetails = scope;
    },
    /**
     * 添加号码
     */
    /**
     * 修改号码
     */
    editFun(scope) {
      this.lineData = scope;
      this.editNumberDialog = true;
    },
    addNumberFun() {
      this.addNumberDialog = true;
    },
    /**
     * 删除数据
     */
    deleData(scope) {
      this.$axios.delete("botManager/customers/" + scope.Id + "/").then(d => {
        this.$message.success("删除成功！");
        this.getData();
      });
    },
    close() {
      this.addNumberDialog = false;
      this.getData();
    },
    searchFun() {
      this.$axios
        .get("botManager/customers/?search=" + this.search.name)
        .then(d => {
          this.tableData = d.data.results;
        });
    }
  }
};
</script>
<style lang="less" scoped>
.el-dialog {
  height: 650px;
}
</style>
