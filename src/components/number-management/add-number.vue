//添加号码
<template>
   <div>
     <el-form :model="form" label-width="80px">
          <el-form-item label="电话:"> 
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="省:"> 
              <el-select v-model="form.province" placeholder="请选择">
                <el-option label="陕西省" value="221"></el-option>
                <el-option label="江苏省" value="442"></el-option>
              </el-select>
          </el-form-item>
           <el-form-item label="市:"> 
              <el-select v-model="form.city" placeholder="请选择">
                <el-option label="西安市" value="00022"></el-option>
                <el-option label="渭南市" value="4433332"></el-option>
              </el-select>
          </el-form-item>
           <el-form-item label="运营商:"> 
             <el-select v-model="form.operators" placeholder="请选择">
                <el-option label="电信" value="00022"></el-option>
                <el-option label="联通" value="4433332"></el-option>
              </el-select>
          </el-form-item>
           <el-form-item label="姓名:"> 
             <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
           <el-form-item label="性别:"> 
             <el-select v-model="form.sex" placeholder="请选择">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
              </el-select>
          </el-form-item>
           <el-form-item label="生日:"> 
             <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-form-item>
           <el-form-item label="公司:"> 
            <el-input v-model="form.company" placeholder="请输入公司名称"></el-input>
          </el-form-item>
           <el-form-item label="职位:"> 
            <el-input v-model="form.position" placeholder="请输入工作职位"></el-input>
          </el-form-item>
           <el-form-item label="标签:"> 
            <el-input v-model="form.label" placeholder="请输入标签(多个以‘，’隔开)"></el-input>
             
          </el-form-item>
           <el-form-item label="备注:"> 
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <div style="text-align:right">
            <el-button type="primary">确定</el-button>
          </div>
     </el-form>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      form: {
        mobile: "",
        province: "",
        city: "",
        operators: "",
        name: "",
        sex: "",
        date: "",
        company: "",
        position: "",
        label: "",
        desc: ""
      }
    };
  }
};
</script>

<style>
</style>
