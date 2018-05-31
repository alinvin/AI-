//添加语料
<template>
    <div>
        <el-form :model="form" label-width="80px">
            <template v-for="(corpus,index) in form.corpus">
                <div class="corpus_content">
                    <div v-if="form.corpus.length>1">语料{{index+1}}</div>
                    <el-form-item label="用户:" >
                        <el-input v-model="form.user"></el-input>
                    </el-form-item>
                    <el-form-item label="机器人:" >
                        <el-input v-model="form.robot" type="textarea"></el-input>
                    </el-form-item>
                </div>
            </template>
            <div class="btn">
                <el-button type="primary" @click="addFun">加一条</el-button>
                <el-button type="primary">确定</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        corpus: [
          {
            user: "",
            robbot: ""
          }
        ]
      }
    };
  },
  methods: {
    addFun() {
      if (this.form.corpus.length < 3) {
        this.form.corpus.push({
          user: "",
          robbot: ""
        });
      } else {
        this.$message.error("您最多只能添加3个语料！");
      }
    },
    emptyData() {
      this.form.corpus = [
        {
          user: "",
          robbot: ""
        }
      ];
    }
  }
};
</script>
<style lang="less" scoped>
.corpus_content {
  border-bottom: 1px solid #d9d9d9;
}
.btn {
  text-align: right;
  margin-top: 20px;
}
</style>

