//职位管理
<template>
   <div>
     <el-row type="flex">
       <el-col :span="12">
         <el-input placeholder="输入职位"></el-input>
       </el-col>
       <el-col :span="6">
         <el-button type="primary">搜索</el-button>
       </el-col>
       <el-col :span="2" :offset="2">
         <el-button type="primary">添加职位</el-button>
       </el-col>
     </el-row>
     <!-- table -->
     <el-table :data="tableData" style="width:100%;"> 
       <el-table-column type="index" label="序号"></el-table-column>
       <el-table-column label="职位名称" prop=""></el-table-column>
       <el-table-column label="创建时间" prop=""></el-table-column>
       <el-table-column label="操作" fixed="right" >
          <template slot-scope="scope" >
              <el-button type="text">删除</el-button>
          </template>
        </el-table-column>       
     </el-table>
   </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
