<template>
  <div class="login-main" @click="notSelectClick()">
    <p class="headertitle">{{ page == 0 ? "后台系统" : "数据驾驶舱" }}</p>
    <!-- 功能页面切换 -->
    <div class="header">
      <div class="box" @click.stop="showSelectBox()">
        <div class="pageName">
          <div>{{ page == 0 ? "后台系统" : "数据驾驶舱" }}</div>
        </div>
        <i style="color: cyan" class="el-icon-caret-bottom"></i>
      </div>
      <div v-show="showSelect">
        <div class="trangle"></div>
        <div class="selectbox">
          <div
            @click="selectClick(item.value)"
            v-for="(item, i) in pageList"
            :key="i"
            :class="hover == item.value ? 'optionColor option' : 'option'"
            @mouseover="optionHover(item.value)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- 字景logo -->
    <!-- <img class="logoImg" src="../assets/home/logo-big.png" alt="" /> -->
    <!-- 登录功能整体 -->
    <div class="main">
      <!-- 背景图 -->
      <div>
        <!-- <img class="bgImg" src="../assets/drive/loginBg.png" alt="" /> -->
      </div>
      <div class="login">
        <div class="title">登录</div>
        <!-- 用户名 -->
        <div class="input" ref="accountInput">
          <!-- <img src="../assets/drive/zh_icon.svg" /> -->
          <input
            type="text"
            placeholder="请输入用户名"
            v-model="account"
            style="color: #fff"
            @input="verifyData(account, 0)"
            @blur="accountBlur(account)"
          />
          <div v-if="accountError" class="text">{{ accErrInfo }}</div>
        </div>
        <!-- 密码 -->
        <div class="input" ref="pswInput">
          <!-- <img src="../assets/drive/mm_icon.svg" @click="pswshow()" /> -->
          <input
            style="color: #fff"
            placeholder="请输入密码"
            v-model="psw"
            type="password"
            ref="password"
            @input="verifyData(psw, 1)"
            @blur="pswBlur(psw)"
            oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')"
          />
          <div v-if="pswError" class="text">{{ pswErrInfo }}</div>
        </div>
        <div class="password">
          <div class="remeber" @click="remeberPsw()">
            <img v-show="!checked" src="../assets/login/unchecked.png" alt="" />
            <img v-show="checked" src="../assets/login/checked.png" alt="" />
            <span>记住密码</span>
          </div>
          <div class="forget" @click="forgetPsw()">忘记密码?</div>
        </div>
        <div class="btn" :loading="loading" @click="loginClick()">登录</div>
      </div>
    </div>
    <footer>
      <p class="footer">
        ©2023杭州字景数科电子有限公司 版权所有
        <a href="https://beian.miit.gov.cn" target="_blank" class="ICP"
          >浙ICP备2023011376号-1</a
        >
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      // 用户名
      account: "",
      // 密码
      // https://pan.baidu.com/s/1geGTJgB
      psw: "",
      // 用户名错误提示
      accountError: false,
      // 用户名错误提示信息
      accErrInfo: "用户名不能为空",
      // 密码错误提示
      pswError: false,
      // 密码错误提示信息
      pswErrInfo: "密码不能为空",
      // 用户名字符最大限制
      accMaxLen: 32,
      // 密码最大限制数
      pswMaxLen: 20,
      // 验证码
      code: "",
      codenum: "",
      codekey: "",
      codeimage: "",
      // 是否记住密码
      checked: true,
      index: 0,
      // 页面切换
      pageList: [
        { name: "后台系统", value: 0 },
        { name: "数据驾驶舱", value: 1 },
      ],
      page: 0,
      hover: 0,
      // 下拉框是否显示
      showSelect: false,
    };
  },

  mounted() {
    // 是否记住账户密码
    if (this.checked) {
      this.account = localStorage.getItem("account");
      this.psw = localStorage.getItem("psw");
    }
    if (localStorage.getItem("page")) {
      this.page = localStorage.getItem("page");
      this.hover = localStorage.getItem("page");
    }
    console.log(this.page);
  },
  methods: {
    // 输入框校验
    verifyData(str, i) {
      // console.log(str.length,i);
      if (str.length > 0) {
        if (i == 0) {
          if (str.length > 32) {
            this.accountError = true;
            this.accErrInfo = "用户名不能超过32位";
            // this.account = str.slice(0,12)
            console.log(this.accErrInfo, this.accountError);
          } else {
            this.accountError = false;
          }
        } else {
          if (str.length > 20) {
            this.pswError = true;
            this.pswErrInfo = "密码不能超过20位";
          } else {
            this.pswError = false;
          }
        }
      }
    },
    // 显示下拉框
    showSelectBox() {
      this.showSelect = true;
    },
    // 关闭下拉选择框
    notSelectClick() {
      this.showSelect = false;
    },
    // 下拉框hover
    optionHover(i) {
      this.hover = i;
    },
    // 页面选择
    selectClick(i) {
      this.page = i;
      this.showSelect = false;
    },
    // 检验用户名是否为空
    accountBlur(e) {
      if (e == "" || e == null) {
        this.accountError = true;
      }
    },
    // 检验输入密码是否为空
    pswBlur(e) {
      if (e == "" || e == null) {
        this.pswError = true;
      }
    },
    // 登录
    loginClick() {
      console.log(this.account);
      if (
        (this.account == "" || this.account == null) &&
        (this.psw == "" || this.psw == null)
      ) {
        this.accountError = true;
        this.pswError = true;
        this.accErrInfo = "用户名不能为空";
        this.pswErrInfo = "密码不能为空";
      } else if (this.account == "" || this.account == null) {
        this.accountError = true;
        this.accErrInfo = "用户名不能为空";
      } else if (this.psw == "" || this.psw == null) {
        this.pswError = true;
        this.pswErrInfo = "密码不能为空";
      } else {
        let param = {
          username: this.account,
          password: this.psw,
        };

        this.loading = true;
        this.$post("/user/auth/login", param)
          .then((res) => {
            if (res.code == 1) {
             
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("uid", res.data.id);
              localStorage.setItem("roleId", res.data.roleId);
              localStorage.setItem("IndexSelect", true);
              localStorage.setItem("phoneNum", res.data.phoneNum);
              localStorage.setItem('roleName',res.data.roleName)
              // 记住用户信息
              if (this.checked) {
                localStorage.setItem("account", this.account);
                localStorage.setItem("psw", this.psw);
              } else {
                localStorage.clear();
              }
              if (this.page == 0) {
                this.$router.push("/index");
              } else {
                this.$router.push("/map");
                // console.log(res.data);
              }
              localStorage.setItem("page", this.page);
            } else {
              this.$message.error(res.msg);
              this.loading = false;
            }
          })
          .catch(() => {
            console.log("异常");
          });
      }
    },
    // 密码是否可以看见
    pswshow() {
      if (this.$refs.password.type == "password") {
        this.$refs.password.type = "text";
      } else {
        this.$refs.password.type = "password";
      }
    },
    // 是否记住密码
    remeberPsw() {
      this.checked = !this.checked;
    },
    // 忘记密码
    forgetPsw() {
      console.log(this.page);
      // this.$router.push({ name: "/Forget", params: { id: this.page } });
      this.$message({
        duration: 0,
        showClose: true,
        message: "请联系管理员📞:13575906294",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// 系统名
.headertitle {
  width: 100%;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 1),
    rgba(113, 244, 236, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: PingFang SC;
  font-size: 2.4vw;
}
// 字景logo
.logoImg {
  width: 10vw;
  position: absolute;
  left: 1.04vw;
}
.login-main {
  // background-image: url("../assets/drive/big-screen-backimage.svg");
  margin: 0px; //外边距0
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  zoom: 1;
  background-color: #07080e;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  overflow: hidden;
  // 头部切换按钮
  .header {
    color: #ffffff;
    cursor: pointer;
    position: relative;
    .box {
      position: absolute;
      top: 0px;
      right: 1.04vw;
      display: flex;
      justify-content: space-between;
      width: 6.25vw;
      min-width: 95px;
      font-size: 0.83vw;
      padding: 0.18vh 0.26vw;
      line-height: 2.78vh;
      box-sizing: border-box;
      background: rgb(0, 7, 11);
      border: 0.05vw solid rgb(11, 166, 167);
      box-shadow: inset 0px 0.05vw 0.89vw rgb(11, 166, 167);
      border-radius: 7px;
      .pageName {
        width: 4.69vw;
        min-width: 60px;
        // border-right: 1px solid cyan;
        text-align: center;
      }
      .el-icon-caret-bottom {
        font-size: 2.5vh;
        border-left: 1px solid cyan;
      }
    }

    // 倒三角
    .trangle {
      position: absolute;
      top: 3.19vh;
      right: 4.68vw;
      width: 0;
      height: 0;
      border-bottom: 10px solid cyan;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }

    // 下拉框
    .selectbox {
      position: absolute;
      top: 3.54vh;
      right: 0.8vw;
      width: 6.25vw;
      min-width: 90px;
      font-size: 0.83vw;
      background: rgb(0, 7, 11);
      color: #fff;
      margin: 5px;
      padding: 5px 0;
      border: 0.05vw solid rgb(11, 166, 167);
      border-radius: 5px;
      box-sizing: border-box;
      .optionColor {
        background-color: rgb(11, 166, 167);
      }
      .option {
        padding: 5px;
        color: #fff;
      }
    }
  }

  .main {
    position: absolute;
    width: 30.31vw;
    left: calc(50% - 15.155vw);
    height: 36.11vh;
    top: calc(50% - 22vh);
    position: relative;
    .bgImg {
      width: 30.31vw;
      height: 36.11vh;
    }
  }
  // 登录字样
  .title {
    width: 100%;
    text-align: center;
    font-size: 1.04vw;
    font-family: PingFang SC;
    font-weight: bold;
    color: #ffffff;
    margin: 3vh auto 1.85vh;
  }

  // 登录模块
  .login {
    width: 30.31vw;
    height: 36.11vh;
    border-radius: 1.04vw;
    text-align: center;
    padding: 2.59vh 2.45vw;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    .input {
      width: 17.55vw;
      height: 4vh;
      background: rgba(0, 7, 11, 0.5);
      border: 1px solid rgb(11, 166, 167);
      border-radius: 7px;
      display: flex;
      align-items: center;
      margin: 1.85vh auto;
      position: relative;
      z-index: 10;
      // overflow: hidden;
      img {
        display: inline-block;
        align-items: middle;
        margin: 0 0.52vw;
        width: 0.88vw;
        min-width: 20px;
      }
      // 错误提示
      .text {
        color: red;
        position: absolute;
        top: 4.07vh;
        left: 2px;
        font-size: 0.73vw;
      }

      // 输入框
      input {
        width: 14vw;
        height: 3.7vh;
        outline: none;
        border: none;
        background: rgba(0, 7, 11, 0.1);
        color: "#fff";
        // color:red;
        position: relative;
      }

      input[type="password"] {
        font-family: Arial Source Han Sans CN;
      }

      input::-webkit-input-placeholder {
        color: #c0c0c0;
        font-size: 0.73vw;
      }

      /* Mozilla Firefox 4 to 18 */
      input:-moz-placeholder {
        color: #c0c0c0;
        opacity: 1;
        font-size: 0.73vw;
      }

      /* Mozilla Firefox 19+ */
      input::-moz-placeholder {
        color: #c0c0c0;
        opacity: 1;
        font-size: 0.73vw;
      }

      /* Internet Explorer 10+ */
      input:-ms-input-placeholder {
        color: #c0c0c0;
        font-size: 0.73vw;
      }
    }

    // 记住密码和忘记密码
    .password {
      width: 17.55vw;
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      margin: 0 0 10px 3.8vw;
      font-size: 0.83vw;
      cursor: pointer;
      // 记住密码
      .remeber {
        img {
          vertical-align: middle;
          margin: 0 0.52vw 0 0;
          width: 0.94vw;
          min-width: 15px;
        }
      }
      // 忘记密码
      .forget {
        color: #15f2ff;
        border-bottom: 1px solid #15f2ff;
      }
    }

    // 登录按钮
    .btn {
      width: 17.55vw;
      height: 4vh;
      background: rgb(98, 255, 246);
      border: 1px solid rgb(11, 166, 167);
      box-shadow: inset 0px 1px 17px rgb(11, 166, 167);
      border-radius: 7px;
      color: #ffffff;
      line-height: 4vh;
      font-size: 1.04vw;
      font-family: PingFang SC;
      font-weight: 500;
      margin-left: 3.75vw;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  // 底部
  .footer {
    margin: 50vh auto 0px;
    text-align: center;
    color: rgb(98, 255, 246);
    font-family: PingFang SC;
    font-size: 0.8vw;
    .ICP {
      color: #62fff6;
      text-decoration: none;
    }
    .ICP:hover {
      color: #fff;
    }
  }
}
</style>
