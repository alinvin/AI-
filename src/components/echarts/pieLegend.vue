<template>
    <div class="list_content">
        <div v-for="item in lists" >
          <p class="number_text">{{item.number}}</p>
          <p class="name_text">{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          number: "123次",
          name: "呼叫总数"
        },
        {
          number: "512次",
          name: "接通数"
        },
        {
          number: "42%",
          name: "接通率"
        },
        {
          number: "123次",
          name: "呼叫总数"
        },
        {
          number: "23h12s",
          name: "通话总时长"
        },
        {
          number: "123次",
          name: "呼叫总数"
        }
      ]
    };
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
