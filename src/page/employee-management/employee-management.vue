//员工管理
<template>
  <div>
    <el-form :inline="true" ref="data-form" label-position="left">
      <el-form-item label="开始时间:" >
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
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="positionDialog=true">职位管理</el-button>
        <el-button type="text">部门管理</el-button>
        <el-button type="primary" @click="addEmployeesDialog=true">添加员工</el-button>
      </el-form-item>
    </el-form>
    <!-- table -->
    <el-table :data="tableData" style="width: 100%">
        <el-table-column  label="账号" prop="account"></el-table-column>
        <el-table-column  label="姓名" prop="name"></el-table-column>
        <el-table-column  label="部门" prop="dept"></el-table-column>
        <el-table-column  label="手机号" prop="mobile"></el-table-column>
        <el-table-column  label="状态" prop="status"></el-table-column>
        <el-table-column  label="职位" prop="position"></el-table-column>
        <el-table-column  label="创建时间" prop="createTime"></el-table-column>
        <el-table-column label="操作" fixed="right" width="220">
          <template slot-scope="scope" >
              <el-button type="text" @click="editFun(scope.row)">修改</el-button>
              <el-button type="text">删除</el-button>
              <el-button type="text" @click="resetFun(scope.row)">重置密码</el-button>
          </template>
        </el-table-column>
    </el-table>
    <!-- dialog -->
    <el-dialog title="职位管理" :visible.sync="positionDialog" width="40%">
      <employee-management></employee-management>
    </el-dialog>
     <el-dialog title="添加员工" :visible.sync="addEmployeesDialog" width="40%">
      <add-employees></add-employees>
    </el-dialog>
    <el-dialog title="修改员工信息" :visible.sync="editEmployeesDialog" width="40%" @close="closeDialog" @open="openEdit">
      <edit-employees :editMessage="ruleForm" ref="edit-employees"></edit-employees>
    </el-dialog>
    <el-dialog title="重置密码" :visible.sync="resetDialog" width="30%">
      <p>账号{{acc}}</p>
      <p>的密码将重置为123456，确定重置吗？</p>
      <span slot="footer" class="dialog-footer">
      <el-button @click="resetDialog = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

  </div>
</template>
<script>
import EmployeeManagement from "@/components/employee-management/position-management.vue";
import AddEmployees from "@/components/employee-management/add-employees.vue";
import EditEmployees from "@/components/employee-management/edit-employees.vue";

export default {
  components: {
    EmployeeManagement,
    AddEmployees,
    EditEmployees
  },
  data() {
    return {
      ruleForm: "",
      acc: "",
      seach: {
        startTime: "",
        endTime: "",
        name: ""
      },
      tableData: [
        {
          account: "administrator",
          name: "贾健",
          dept: "测试",
          mobile: "18801776718",
          status: "9",
          position: "CEO",
          createTime: "2013-12-12"
        }
      ],
      positionDialog: false,
      addEmployeesDialog: false,
      editEmployeesDialog: false,
      resetDialog: false
    };
  },
  methods: {
    editFun(row) {
      this.editEmployeesDialog = true;
      this.ruleForm = row;
    },
    openEdit() {
      let editEmployees = this.$refs["edit-employees"];
      editEmployees.openFun();
    },
    //关闭弹窗
    closeDialog() {
      let editEmployees = this.$refs["edit-employees"];
      editEmployees.closeFun();
    },
    //重置密码
    resetFun(scope) {
      this.resetDialog = true;
      this.acc = scope.account;
    }
  }
};
</script>
