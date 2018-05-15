//通用语料
<template>
  <div class="dataRecovery">
  <div style="margin: 10px 0;">
    <el-input placeholder="请输入话题名称" v-model="input5">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
    <el-table ref="singleTable" :data="tableData2"  style="width: 100%">
      <el-table-column property="labelName" label="标签名称">
      </el-table-column>
      <el-table-column property="keyWords" label="关键字">
      </el-table-column>
      <el-table-column  label="操作">
          <template slot-scope="scope">
            <el-button type="text">添加语料</el-button>
            <el-button type="text">查询语料</el-button>
            <el-button type="text">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input5: "",
      tableData2: [
        {
          labelName: "学区房",
          keyWords: "有意向"
        },
        {
          labelName: "关注医疗",
          keyWords: "有意向"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.el-input-group {
  width: 40%;
}
</style>


