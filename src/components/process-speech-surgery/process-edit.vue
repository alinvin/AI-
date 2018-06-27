
//流程编辑
<template>
  <div>
     <el-row>
        <el-button @click="appendLeftNode('left-node')" ref="left-node">添加左节点</el-button>
        <el-button @click="appendRightNode('right-node')" ref="right-node">添加右节点</el-button>
        <el-button @click="appendDefaultNode('default-node')" ref="default-node">添加默认节点</el-button>
     </el-row>
      <div class="plumb-box">
          <el-tree :data="treeData" @node-click="handleNodeClick" :render-content="renderContent"></el-tree>
      </div>
      <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%" append-to-body>
      <div class="demo-input-suffix">
        <span>属性方式：</span>
        <el-input placeholder="请输入节点名称"  v-model="input2" style="width:67%;"></el-input>
      </div>
      <div slot="footer"> 
        <el-button>确定</el-button>
      </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        notes: "",
        id: "",
        robot: ""
      },
      treeData: [],
      dialogVisible: false,
      dialogTitle: ""
    };
  },
  mounted() {},
  created() {},
  methods: {
    appendLeftNode(node) {
      this.dialogTitle = this.$refs[node].$el.childNodes[2].innerText;
      this.dialogVisible = true;
      console.log(this.dialogTitle, 1);
    },
    appendRightNode(node) {
      this.dialogTitle = this.$refs[node].$el.childNodes[2].innerText;
      this.dialogVisible = true;
      console.log(this.dialogTitle, 1);
    },
    appendDefaultNode(node) {
      this.dialogTitle = this.$refs[node].$el.childNodes[2].innerText;
      this.dialogVisible = true;
      console.log(this.dialogTitle, 1);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      );
    }
  }
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
  .el-button + .el-button {
    margin-left: 0;
    margin-top: 10px;
  }
}
.demo-input-suffix {
  display: flex;
}
</style>