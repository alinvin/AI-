<template>
  <div class="callSetings">
      <el-tabs type="border-card">
            <p style="margin:10px 0;">AI机器人可用数量 <span class="bule_text">0</span> 个，公司拥有机器人 <span class="bule_text">4</span> 个，已配置使用 <span class="bule_text">4</span> 个</p>
        <el-tab-pane label="Ai呼叫列表">
            <el-button class="blue">Ai呼叫执行管理</el-button>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>

        </el-tab-pane>
        <el-tab-pane label="A呼叫添加">
            <div class="h_title">
              <div></div>
              添加A群呼
            </div>
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
      isIndeterminate: true
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
    }
  }
};
</script>
<style lang="less">

</style>


