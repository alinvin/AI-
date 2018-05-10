<template>
    <div class="list_content">
        <div >
          <p class="number_text">123次</p>
          <p class="name_text">呼叫总数</p>
        </div>
        <div >
          <p class="number_text">{{tLength}}次</p>
          <p class="name_text">接通数</p>
        </div>
        <div >
          <p class="number_text">23%</p>
          <p class="name_text">接通率</p>
        </div>
        <div >
          <p class="number_text">23H22S</p>
          <p class="name_text">通话总时长</p>
        </div>
        <div >
          <p class="number_text">22M</p>
          <p class="name_text">计费分钟数</p>
        </div>
        <div >
          <p class="number_text">00:23:22</p>
          <p class="name_text">平均通话时长</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tLength: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/dialogs/").then(v => {
        if (v.status === 200) {
          this.tLength = v.data.results.length;
          console.log(this.tLength);
        } else {
          this.$message.error(v.statusText);
        }
      });
    }
  }
};
</script>

<style lang="less">
.list_content {
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  div {
    flex: 33%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .name_text {
      font-size: 12px;
    }
    .number_text {
      font-size: 20px;
    }
  }
  :nth-child(1) {
    .number_text {
      color: rgb(113, 176, 253);
    }
  }
  :nth-child(2) {
    .number_text {
      color: rgb(241, 209, 63);
    }
  }
  :nth-child(3) {
    .number_text {
      color: rgb(173, 241, 63);
    }
  }
  :nth-child(4) {
    .number_text {
      color: rgb(17, 88, 221);
    }
  }
  :nth-child(5) {
    .number_text {
      color: rgb(179, 77, 10);
    }
  }
  :nth-child(6) {
    .number_text {
      color: rgb(54, 53, 52);
    }
  }
}
</style>
