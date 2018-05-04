<template>
    <div class="login-wrap">
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="flex_content">
            <div class="ms-title">Ai智能语音后台管理系统</div>
            <div class="ms-login" >
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </div>
                    <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
                </el-form>
            </div>
          </div>
      </transition>

        
    </div>
</template>

<script>
import Vue from "vue";
import "element-ui/lib/theme-chalk/base.css";
export default {
  data: function() {
    return {
      show2: false,
      ruleForm: {
        username: "admin",
        password: "123123"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.show2 = true;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem("ms_username", this.ruleForm.username);
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.ms-title {
  width: 100%;
  margin: 160px 0 30px 0;
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.ms-login {
  width: 300px;
  height: 160px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
.el-zoom-in-center-enter-active {
  transition: all 0.5s ease;
}
.flex_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>