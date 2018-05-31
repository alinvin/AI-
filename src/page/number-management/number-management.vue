//号码库管理
<template>
  <div>
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
      <el-form-item>
        <el-button type="text">excel导入</el-button>
        <el-button type="primary" @click="addNumberFun">添加号码</el-button>
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
        <el-table-column  label="手机号" prop="mobile" width="120"></el-table-column>
        <el-table-column  label="运营商" prop="operators" width="120"></el-table-column>
        <el-table-column  label="姓名" prop="name" width="120"></el-table-column>
        <el-table-column  label="性别" prop="sex" ></el-table-column>
        <el-table-column  label="省" prop="province" width="120"></el-table-column>
        <el-table-column  label="市" prop="city" width="120"></el-table-column>
        <el-table-column  label="标签" prop="label" width="120"></el-table-column>
        <el-table-column  label="公司" prop="company" width="220"></el-table-column>
        <el-table-column  label="免打扰" prop="excuse" width="120"></el-table-column>
        <el-table-column  label="号码标签" prop="numberLabel" width="120"></el-table-column>
        <el-table-column  label="备注" prop="note" width="220"></el-table-column>
        <el-table-column label="操作" fixed="right" width="220">
          <template slot-scope="scope" >
              <el-button type="text" @click="logFun(scope.row)">拨打日志</el-button>
              <el-button type="text">修改</el-button>
              <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- 拨打日志 -->
    <el-dialog title="拨打日志" :visible.sync="logDialog" width="60%">
      <log :logDetails="logDetails" ref="log"></log>
    </el-dialog>
    <!-- 添加号码 -->
     <el-dialog title="添加号码" :visible.sync="addNumberDialog" width="50%">
       <add-number></add-number>
    </el-dialog>
  </div>
</template>
<script>
import Log from "@/components/number-management/log.vue";
import AddNumber from "@/components/number-management/add-number.vue";

export default {
  components: {
    Log,
    AddNumber
  },
  data() {
    return {
      logDetails: "",
      logDialog: false,
      seniorSeach: false,
      addNumberDialog: false,
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
          mobile: "18801776781",
          operators: "大唐电信",
          name: "欧恩",
          sex: "男",
          province: "广东省",
          city: "深圳市",
          label: "局长",
          company: "深圳市税务局",
          excuse: "000",
          numberLabel: "公务员",
          note: "勿打扰"
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
    //拨打日志
    logFun(scope) {
      this.logDialog = true;
      this.logDetails = scope;
    },
    /**
     * 添加号码
     */
    addNumberFun() {
      this.addNumberDialog = true;
    }
  }
};
</script>
<style lang="less" scoped>
.el-dialog {
  height: 650px;
}
</style>
