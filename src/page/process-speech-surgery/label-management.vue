//标签管理
<template>
  <div>
    <template>
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户标签" name="first">
          <el-row>
              <el-col :offset="22">
                <el-button type="primary" icon="el-icon-plus" @click="addLabelDialog=true">用户标签</el-button>
              </el-col>
          </el-row>
          <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
            <el-table-column property="labelType" label="标签类型" >
            </el-table-column>
            <el-table-column property="labelName" label="标签名称" >
            </el-table-column>
            <el-table-column property="priority" label="优先级" >
            </el-table-column>
            <el-table-column property="processLabel" label="流程标签">
            </el-table-column>
            <el-table-column property="number" label="触发次数" >
            </el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                  <el-button type="text">编辑</el-button>
                  <el-button type="text">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        </el-tab-pane>
        <el-tab-pane label="语意标签" name="second">
           <el-row>
                <el-col :offset="22">
                  <el-button type="primary" icon="el-icon-plus" @click="addSematicLabelDialog=true">语意标签</el-button>
                </el-col>
            </el-row>
          <el-table ref="singleTable" :data="tableData2"  style="width: 100%">
                <el-table-column property="labelName" label="标签名称">
                </el-table-column>
                <el-table-column property="keyWords" label="关键字">
                </el-table-column>
                <el-table-column  label="操作">
                    <template slot-scope="scope">
                      <el-button type="text">编辑</el-button>
                      <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>
      </el-tabs>
    </template>
    <el-dialog title="新建客户标签"  :visible.sync="addLabelDialog" width="40%">
      <add-user-label></add-user-label>
    </el-dialog>
    <el-dialog title="新建语意标签"  :visible.sync="addSematicLabelDialog" width="40%">
      <add-semantic-label></add-semantic-label>
    </el-dialog>
  </div>
</template>
<script>
import AddUserLabel from "@/components/label-management/add-user-label.vue";
import AddSemanticLabel from "@/components/label-management/add-semantic-label.vue";

export default {
  components: {
    AddUserLabel,
    AddSemanticLabel
  },
  data() {
    return {
      addLabelDialog: false,
      addSematicLabelDialog: false,
      activeName: "first",
      radio: "1",
      tableData: [
        {
          labelType: "A类",
          labelName: "意向客户",
          processId: "ser4543",
          priority: 9,
          processLabel: "有意向",
          number: 4
        },
        {
          labelType: "B类",
          labelName: "意向客户",
          processId: "ser4543",
          priority: 9,
          processLabel: "有意向",
          number: 4
        }
      ],
      tableData2: [
        {
          labelName: "学区房",
          keyWords: "有意向"
        },
        {
          labelName: "关注医疗",
          keyWords: "有意向"
        }
      ],
      currentRow: null
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      console.log(val);
      this.radio = val.id;
    }
  }
};
</script>
