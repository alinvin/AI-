<template>
    <div :id="id" style="width:100%;height:400px;"></div>
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
        title: {
          text: "接听状态"
        },
        tooltip: {},

        radar: {
          shape: "circle",
          radius: "50%",
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [1, 3]
            }
          },
          indicator: [
            { name: "已接通", max: 6500 },
            { name: "超时", max: 16000 },
            { name: "忙线中", max: 30000 },
            { name: "拥塞", max: 38000 },
            { name: "其他", max: 52000 }
          ]
        },
        series: [
          {
            name: "呼出",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "呼出"
              }
            ]
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
