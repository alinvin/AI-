<template>
    <div>
    <section class="data_section"> 
			<el-row :gutter="10" class="row_list">
					<p>今日已服务客户：<span class="bule_text">0</span>位；服务客户总量：<span class="bule_text">492</span>位</p>
			</el-row>
			<el-row :gutter="10" class="row_list">
				<el-col :span="8">
				    <pieLegend  id="bin1_data"></pieLegend>
				</el-col>
				<el-col :span="8">
				    <pie-echarts id="pie_data"></pie-echarts>
				</el-col>
        <el-col :span="8">
          <radar-echarts id="radar_data"></radar-echarts>
				</el-col>
			</el-row>
			<el-row :gutter="10" class="row_list">
				<el-col :span="8">
				</el-col>
			   	<el-col :span="8">
				</el-col>
			</el-row>
		</section>
    </div>
</template>

<script>
import pieLegend from "../components/echarts/pieLegend.vue";
import pieEcharts from "../components/echarts/pieEcharts.vue";
import radarEcharts from "../components/echarts/radarEcharts.vue";
export default {
  data() {
    return {};
  },
  components: {
    pieLegend,
    pieEcharts,
    radarEcharts
  }
};
</script>


<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
.data_section {
  padding: 10px 20px 0 20px;
  box-sizing: border-box;
}
</style>
