<template>
    <div :id="id" style="width:100%;height:260px;margin-bottom:15px;"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["id"],
  data() {
    return {
      myChart: null,
      timeSec: [], //时间/秒
      fullDate: [], //获取日期
      sum: 0 //时间总和
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.id));
    this.myChart.setOption(this.readyBarOption());
  },
  created() {
    this.getData();
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
        },
        xAxis: {
          type: "category",
          name: "日期",
          data: []
        },
        yAxis: {
          type: "value",
          name: "时长/秒(s)"
        },
        series: [
          {
            name: "通话时长",
            data: [],
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
    },
    getData() {
      this.$axios.get("/dialogs/").then(v => {
        if (v.status === 200) {
          let times = v.data.results;
          times.map(d => {
            let dialogTime = d.dialogTime;
            let da = new Date(d.end);
            let year = da.getFullYear();
            let month = da.getMonth() + 1;
            let date = da.getDate();
            let full = year + "-" + month + "-" + date;
            let ss = this.timeToSec(dialogTime);
            this.timeSec.push(ss);
            this.fullDate.push(full);
            this.fullDate = Array.from(new Set(this.fullDate));
            console.log(this.fullDate);
          });
          this.timeSec.forEach(v => {
            // 拨打时间求和
            this.sum += v;
          });
          this.myChart.setOption({
            xAxis: {
              data: [this.fullDate]
            },
            series: [
              {
                // 根据名字对应到相应的系列
                data: [this.sum]
              }
            ]
          });
        } else {
          this.$message.error(v.statusText);
        }
      });
    },
    /**
     * 时间转为秒
     * @param time 时间(00:00:00)
     * @returns {string} 时间戳（单位：秒）
     */
    timeToSec(time) {
      let s = "";
      let hour = time.split(":")[0];
      let min = time.split(":")[1];
      let sec = time.split(":")[2];
      s = Number(hour * 3600) + Number(min * 60) + Number(sec);
      return s;
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
