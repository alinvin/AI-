<template>
    <div :id="id" style="width:100%;height:200px;">
    </div>
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
    this.myChart.setOption(this.readyLineOption());
  },
  beforeDestroy() {
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart = null;
  },
  methods: {
    readyLineOption() {
      let data = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          top: "10%",
          // formatter: function(name) {
          //   return "Legend " + name;
          // },
          data: [
            "A类用户",
            "B类用户",
            "C类用户",
            "D类用户",
            "E类用户",
            "F类用户"
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["65%", "80%"],
            center: ["20%", "50%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "A类用户" },
              { value: 310, name: "B类用户" },
              { value: 234, name: "C类用户" },
              { value: 135, name: "D类用户" },
              { value: 1548, name: "E类用户" },
              { value: 200, name: "F类用户" }
            ]
          }
        ]
      };
      return data;
      console.log(this.color);
    }
  }
};
</script>

<style lang="less">

</style>
