//拨打电话
<template>
  <div class="call-log">
    <el-form :inline="true" ref="data-form" label-position="left">
      <el-form-item label="开始时间:">
        <el-date-picker v-model="seach.startTime" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间:">
        <el-date-picker v-model="seach.endTime" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-input v-model="seach.name" placeholder="请输入姓名、手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="text" @click="seniorFun">高级查找</el-button>
      </el-form-item>
      <div v-show="seniorSeach">
        <el-form-item label="方案:">
           <el-select v-model="seach.case" placeholder="请选择">
            <el-option label="方案1" value="1"></el-option>
            <el-option label="方案2" value="2"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="状态:">
           <el-select v-model="seach.status" placeholder="请选择">
            <el-option label="未接通" value="1"></el-option>
            <el-option label="已接通" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户类型:">
           <el-select v-model="seach.customerType" placeholder="请选择">
            <el-option label="A" value="1"></el-option>
            <el-option label="B" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否测试:">
           <el-select v-model="seach.test" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="2"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <!-- table -->
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="手机号">
          <template slot-scope="scope">
            <el-button type="text" @click="editMessageFun(scope)">{{scope.row.mobile}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="方案" prop="case"></el-table-column>
        <el-table-column label="等级">
          <template slot-scope="scope">
            <el-button circle :class="scope.row.grade" size="small">{{scope.row.grade}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="时长" prop="sesond"></el-table-column>
        <el-table-column label="负责人" prop="head"></el-table-column>
        <el-table-column label="关键词" prop="keywords"></el-table-column>
        <el-table-column label="客户类型">
          <template slot-scope="scope">
            <el-button type="text" @click="customerTypeFun(scope)">{{scope.row.customerType}}</el-button>
          </template>
        </el-table-column>
        <el-table-column label="号码标签" prop="numberLabel"></el-table-column>
        <el-table-column label="呼出时间" prop="outTime"></el-table-column>
        <el-table-column label="备注" prop="note"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
              <el-button type="text" @click="detailsFun(scope)">详情</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-dialog :title="'详情：'+logDetails.mobile" :visible.sync="detailsDialog" width="70%">
       <mobile-details></mobile-details>
    </el-dialog>
    <el-dialog title="编辑客户信息" :visible.sync="editMessageDialog" width="40%" >
       <edit-message></edit-message>
    </el-dialog>
     <el-dialog title="修改类型" :visible.sync="editTypeDialog" width="30%" >
       <edit-type></edit-type>
    </el-dialog>
  </div>
</template>
<script>
import MobileDetails from "@/components/number-management/mobile-details.vue";
import EditMessage from "@/components/call-log/edit-message.vue";
import EditType from "@/components/call-log/edit-type.vue"; //修改客户类型

export default {
  components: {
    MobileDetails,
    EditMessage,
    EditType
  },
  data() {
    return {
      seniorSeach: false,
      detailsDialog: false,
      editMessageDialog: false,
      editTypeDialog: false,
      logDetails: "",
      seach: {
        startTime: "",
        endTime: "",
        name: "",
        case: "",
        status: "",
        customerType: "",
        test: ""
      },
      tableData: [
        {
          mobile: "18629132727",
          case: "二分001",
          grade: "C",
          sesond: "32秒",
          head: "史蒂夫",
          keywords: "你师父，在不",
          customerType: "有效客户",
          numberLabel: "001",
          outTime: "2018-12-11",
          note: "二分"
        }
      ]
    };
  },
  methods: {
    seniorFun() {
      if (this.seniorSeach === true) {
        this.seniorSeach = false;
      } else {
        this.seniorSeach = true;
      }
    },
    detailsFun(scope) {
      this.logDetails = scope.row;
      this.detailsDialog = true;
    },
    /**
     * 编辑客户信息
     */
    editMessageFun(scope) {
      this.editMessageDialog = true;
    },
    /**
     * 编辑客户类型
     */
    customerTypeFun(scope) {
      this.editTypeDialog = true;
    }
  }
};
</script>
<style lang="less">
.is-circle {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  line-height: 6px;
}
.A {
  background: rgb(245, 108, 108);
  color: #fff;
}
.B {
  background: rgb(230, 162, 60);
  color: #fff;
}
.C {
  background: rgb(64, 158, 255);
  color: #fff;
}
</style>


