<template>
   <div class="chat_box" >
      <div class="box">
        <template v-for="item in messageData">
            <div :class="item.type===0 ? a : b" >
                  <div class="user_Logo">
                    <img src="../../../static/img/img.jpg" alt="">
                  </div>
                  <div  :class="item.type===0 ? a1 : b1">
                      <p>{{item.content}}</p>
                  </div>
              </div>
          </template>
      </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      a: "mess_container ",
      b: "mess_container right_container",
      a1: "message left_mess",
      b1: "message right_mess",
      messageData: [
        {
          type: 0,
          content: "你好啊！"
        },
        {
          type: 0,
          content: "你是个傻子吧"
        },
        {
          type: 1,
          content: "你全家都是傻子"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.mess_container {
  display: flex;
  padding: 10px 0;
  .user_Logo {
    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }
  .message {
    background: #fff;
    padding: 4px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    margin-left: 15px;
    position: relative;
  }
}
.left_mess::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-width: 9px;
  border-style: solid dashed dashed;
  border-color: transparent #d9d9d9 transparent transparent;
  font-size: 0;
  line-height: 0;
  left: -18px;
  transform: translate(0, 19%);
}
.left_mess::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid dashed dashed;
  border-color: transparent #fff transparent transparent;
  font-size: 0;
  line-height: 0;
  left: -15px;
  top: 9px;
}
.right_container {
  flex-direction: row-reverse;
}

// 右边的三角
.right_mess {
  margin-right: 15px;
}
.right_mess::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-width: 9px;
  border-style: solid dashed dashed;
  border-color: transparent transparent transparent #d9d9d9;
  font-size: 0;
  line-height: 0;
  right: -18px !important;
  transform: translate(0, 19%) !important;
}
.right_mess::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid dashed dashed;
  border-color: transparent transparent transparent #fff;
  font-size: 0;
  line-height: 0;
  right: -15px !important;
  top: 9px;
}
.box {
  padding: 10px 20px;
  background: rgb(239, 239, 239);
  height: 500px;
  overflow: auto;
}
</style>
