//流程编辑
<template>
  <div>
      <el-row>
        <el-button>主流程</el-button>
        <el-button>其他还款方式</el-button>
        <el-button>协商还款</el-button>
        <el-button>明天是否还款</el-button>
        <el-button>强调还款时间</el-button>
        <el-button>开场白</el-button>
        <el-button>告知还款方式</el-button>
        <el-button>确认还款详情</el-button>
        <el-button>银行代扣还款详情</el-button>
        <el-button type="text">新建子流程</el-button>
        <el-button type="text">流程检测</el-button>
        <el-button type="text">测试流程</el-button>
      </el-row>
      <el-form :model="form" label-width="80px" :inline="true" class="from" label-position="left">
        <el-form-item label="流程名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.notes"></el-input>
        </el-form-item>
        <el-form-item label="流程ID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="机器人">
          <el-input v-model="form.robot"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
      <div class="plumb-box">
       <div class="left">
         <el-button>会话结束</el-button>
         <el-button>流程开始</el-button>
         <el-button>子流程步骤</el-button>
         <el-button>yes/no条件</el-button>
         <el-button>计数条件</el-button>
         <el-button>流程结束</el-button>
         <el-button>步骤</el-button>
         <el-button>备注</el-button>
         
       </div>
        <div ref="plumb"></div>
      </div>
  </div>
</template>

<script>
import * as $ from "jquery";
import jsplumb from "jsplumb";

export default {
  data() {
    return {
      form: {
        name: "",
        notes: "",
        id: "",
        robot: ""
      }
    };
  },
  created() {
    jsPlumb.setContainer(this.$refs["plumb"]);
  },
  methods: {}
};
</script>

<style lang="less">
.from {
  margin-top: 15px;
}
.plumb-box {
  border: 1px solid #d9d9d9;
  width: 100%;
  height: 100%;
  min-height: 500px;
  .left {
    width: 200px;
    border-right: 1px solid #d9d9d9;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: initial;
  }
  .el-button + .el-button {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
