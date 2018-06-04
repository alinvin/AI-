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
      <div class="canvas-box">
          <canvas id="canvas" ></canvas>
      </div>
  </div>
</template>

<script>
import * as $ from "jquery";
import "../../../static/js/jtopo.js";
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
    this.resizeCanvas();
  },
  methods: {
    resizeCanvas() {
      var canvas = document.getElementById("canvas");
      var stage = new JTopo.Stage(canvas); // 创建一个舞台对象
      var scene = new JTopo.Scene(stage); // 创建一个场景对象

      var node = new JTopo.Node("Hello"); // 创建一个节点
      node.setLocation(300, 200); // 设置节点坐标
      node.rotate = Math.random(); // 旋转角度
      node.scaleX = Math.random(); // 水平方向的缩放
      node.scaleY = Math.random(); // 垂直方向的缩放
      node.alpha = Math.random(); // 透明度
      node.setImage("../../../static/img/img.jpg"); // 设置图片
    }
  }
};
</script>

<style lang="less">
.from {
  margin-top: 15px;
}
.canvas-box {
  border: 1px solid #d9d9d9;
  width: 100%;
  height: 100%;
  min-height: 500px;
}
</style>
