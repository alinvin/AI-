<template>
    <div class="login-wrap">
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="flex_content">
            <div class="ms-title">Ai智能语音后台管理系统</div>
            <div class="ms-login" >
                <el-form :model="authUser" :rules="rules" ref="authUser" label-width="0px" class="demo-authUser">
                    <el-form-item prop="username">
                        <el-input v-model="authUser.username" placeholder="username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="password" v-model="authUser.password" @keyup.enter.native="submitForm('authUser')"></el-input>
                    </el-form-item>
                    <div class="login-btn">
                        <el-button type="primary" ref="ref_btn_login" @click="submitForm('authUser')">登录</el-button>
                    </div>
                    <p style="font-size:12px;line-height:30px;color:#999;">Tips : 需要注册用户名，请联系管理员</p>
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
      authUser: {
        username: "",
        password: ""
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
          this.$axios
            .post("authUserLogin", {
              username: this.authUser.username,
              password: this.authUser.password
            })
            .then(d => {
              this.$refs.ref_btn_login.$el.textContent = "登录中...";
              if (d.status === 200) {
                localStorage.setItem("ms_username", this.authUser.username);
                setTimeout(() => {
                  this.$router.push("/");
                }, 100);
                localStorage.setItem("token", d.data.token);
              }
            })
            .catch(erro => {
              if (erro.response.status === 400) {
                this.$message("用户名或密码错误！");
              }
            });
          localStorage.setItem("ms_username", this.authUser.username);
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