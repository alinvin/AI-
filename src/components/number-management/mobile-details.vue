//拨打日志详情
<template>
  <div>
    <el-row type="flex">
      <el-col :span="11">
        <data-grid class="data-grid" :labelWidth="100"  contentAlign="left" style="text-align:center">
          <data-grid-item label="电话" :span="2">{{23242342}}</data-grid-item>
          <data-grid-item label="时长(秒)" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="拨出电话" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="拨打电话" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="通话质量等级" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="是否接通" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="是否挂断" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="是否听完" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="关键字" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="客户类型" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="负责人" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="备注" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="号码标签" :span="2">{{2342342324}}</data-grid-item>
          <data-grid-item label="完整录音" :span="2">
            <audio id="myAudio" controls style="width:200px;">
            <source src="/i/horse.ogg" type="audio/ogg">
            <source src="/i/horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
          </data-grid-item>
        </data-grid>
      </el-col>
      <el-col :span="12" :offset="1" style="background: rgb(239, 239, 239);">
        <chat-box></chat-box>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ChatBox from "@/components/number-management/chat-box.vue";
import { DataGrid, DataGridItem } from "@zct1989/vue-component";
export default {
  components: {
    DataGrid,
    DataGridItem,
    ChatBox
  },
  props: ["deme"],
  data() {
    return {};
  }
};
</script>
<style lang="less">
</style>

