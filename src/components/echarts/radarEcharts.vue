<template>
    <div :id="id" style="width:100%;height:260px;margin-bottom:15px;"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["id"],
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.id));
    this.myChart.setOption(this.readyBarOption());
  },
  beforeDestroy() {
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart = null;
  },

  methods: {
    readyBarOption() {
      let data = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            lineStyle: {
              color: "rgb(194,217,126)",
              width: 2
            }
          }
          // formatter: "{b0}: {c0}<br />{b1}: {c0}"
        },
        xAxis: {
          type: "category",
          name: "日期",
          data: ["4/12", "4/13", "4/14", "4/15", "4/16", "4/17", "4/18"]
        },
        yAxis: {
          type: "value",
          name: "时长/秒(s)"
        },
        series: [
          {
            name: "通话时长",
            data: [12, 23, 33, 43, 45, 12, 8],
            type: "line",
            smooth: true,
            lineStyle: {
              color: "rgb(160, 195, 57)",
              width: 3
            }
          }
        ]
      };
      return data;
    }
  },
  watch: {
    id: v => {
      this.readyBarOption(v);
    }
  }
};
</script>

<style lang="less">

</style>
