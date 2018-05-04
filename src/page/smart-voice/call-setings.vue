<template>
  <div class="callSetings">
      <el-tabs type="border-card">
            <p style="margin:10px 0;">AI机器人可用数量 <span class="bule_text">0</span> 个，公司拥有机器人 <span class="bule_text">4</span> 个，已配置使用 <span class="bule_text">4</span> 个</p>
        <el-tab-pane label="Ai呼叫列表">
            <el-button class="blue">Ai呼叫执行管理</el-button>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" style="display:flex;">
            <div v-for="city in cities"  :key="city" style="display:flex;flex-direction: column;align-items: center;margin-right:20px;">
              <img src="../../assets/logo.png" alt="" style="width:60px;margin-bottom:5px;">
              <el-checkbox :label="city">{{city}}</el-checkbox>
            </div>
          </el-checkbox-group>
        </el-tab-pane>
        <el-tab-pane label="Ai呼叫添加">
            <div class="h_title">
              <div></div>
              添加Ai群呼
            </div>
            <!-- form -->
            <el-form :model="modelAdd" :rules="rules" ref="ruleAdd" label-width="110px" class="modelAdd">
              <el-form-item label="Ai呼叫名称" prop="name">
                <el-input v-model="modelAdd.name" style="width:260px"></el-input>
              </el-form-item>
              <el-form-item label="Ai呼叫时间" required>
                <el-form-item prop="date">
                    <el-time-picker is-range v-model="modelAdd.date" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"></el-time-picker>
                </el-form-item>
              </el-form-item>
              <el-form-item label="外线号码" prop="number">
                <el-select v-model="modelAdd.number" placeholder="请选择">
                  <el-option label="北京" value="01088686866"></el-option>
                  <el-option label="上海" value="02188888888"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="外呼并发数" prop="concurrent">
                <el-input v-model="modelAdd.concurrent" style="width:260px"></el-input>
              </el-form-item>
               <el-form-item label="Ai机器人数量" prop="robotNumber">
                <el-input v-model="modelAdd.robotNumber" style="width:260px"></el-input>
                <span class="import_text"> * 最大为 0,且不超过机器人数量*3</span>
              </el-form-item>
              <el-form-item label="语音识别线路" prop="voiceLine">
                <el-select v-model="modelAdd.voiceLine" placeholder="请选择">
                  <el-option label="北京" value="01088686866"></el-option>
                  <el-option label="上海" value="02188888888"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('modelAdd')">添加</el-button>
              </el-form-item>
            </el-form>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
const robotOptions = ["代理机器人", "女金融贷款", "房地产", "男金融贷款"];
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: robotOptions,
      isIndeterminate: true,
      modelAdd: {
        name: "",
        date1: "",
        date1: "",
        number: "",
        robotNumber: "",
        voiceLine: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入呼叫名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],

        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        number: [
          { required: true, message: "请选择外线号码", trigger: "change" }
        ],
        concurrent: [
          { required: true, message: "请输入呼叫并发数", trigger: "blur" }
        ],
        robotNumber: [
          { required: true, message: "请输入机器人数量", trigger: "blur" }
        ],
        voiceLine: [
          { required: true, message: "请选择外线号码", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? robotOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less">
.modelAdd {
  margin-top: 20px;
}
.import_text {
  font-size: 12px;
  color: red;
}
</style>


