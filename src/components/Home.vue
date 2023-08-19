<template>
  <div class="home">
    <div class="main">
      <div class="header">
        <div v-for="(item, i) in menuList" :key="i" class="header-right" @click="routerLink(i)">
          <div class="itemblock">
            <span :class="index == i ? ' circle bg' : 'circle'"></span>
            <span :class="index == i ? ' title color' : 'title'">{{ item.name }}</span>
          </div>

        </div>
      </div>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="mains">
        <div class="logoAddress">
          <div class="logo">logo</div>
          <div class="zixun">咨询热线</div>
          <div class="text">地址：浙江省杭州市余杭区五常街道西坝路131号B座216</div>
          <div class="text">联系电话：12223456676</div>
        </div>
        <div class="block">
          <div class="zixun">热门产品</div>
          <div class="text" v-for="i in 5">热门产品</div>
        </div>
        <div class="block">
          <div class="zixun">ICP</div>
          <div class="text" v-for="i in 5">ICP</div>
        </div>
        <div class="block">
          <div class="zixun">快速链接</div>
          <div class="text" v-for="i in 5">快速链接</div>
        </div>
        <div class="block">
          <div class="zixun">更多信息</div>
          <div class="text" v-for="i in 5">更多信息</div>
        </div>
      </div>
      <div class="brand">Copyright 2012-2020 JDD.com 版权左右 京ICP备11041704号-31京ICP证070359号 隐私声明 资质证照</div>

    </div>
  </div>
</template>
<script>
// import axios from 'axios';

export default {
  data() {
    return {
      menuList: [{ name: "首页", index: 0 }, { name: "产品展示厅", index: 1 }, { name: "技术支持与服务", index: 2 },
      { name: "公司新闻董事长寄语", index: 3 }, { name: "联系我们", index: 4 },],
      index: 0
    };
  },
  created() {

  },
  mounted() {

  },
  // 监听,当路由发生变化的时候执行


  methods: {
    // 跳转路由
    routerLink(i) {
      this.index = i;
    },
    // 打开退出登录
    logOpen() {
      this.$confirm("确定要退出登录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warnimg",
      })
        .then((status) => {
          if (status == "confirm") {
            this.logout();
          }
        })
        .catch((status) => {
          if (status == "cancel") {
            this.cancelLogout();
          }
        });
    },
    // 退出登录
    logout() {
      //   window.sessionStorage.clear();
      //   this.clearCookie();
      this.$get("/user/logout")
        .then((res) => {
          if (res.code == 1) {
            this.$router.push("/Login");
            this.$message({
              type: "success",
              message: "登出成功!",
            });
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(() => {
          console.log("异常");
        });
    },
    cancelLogout() {
      this.visible = false;
      this.$message({
        type: "info",
        message: "已取消登出",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  font-size: 16px;

  .main {
    float: right;
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 10;
  }

  .header {
    display: flex;

    .header-right {
      display: flex;
      align-items: center;
      margin-right: 20px;
      cursor: pointer;
    }

    .circle {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #909CBD;
    }

    .title {
      color: rgba(255, 255, 255, 1);
      font-size: 1.34vw;
      font-family: PingFangSC-Semibold;
      text-align: left;
      white-space: nowrap;
      line-height: 28px;
      margin: 0 0 0 10px;
      color: #909CBD;
    }

    .color {
      color: #fff;
      font-weight: 600;
    }

    .bg {
      background-color: #fff;
    }

    .itemblock:hover {
      .title {
        color: #fff;
      }

      .circle {
        background-color: #fff;
      }
    }
  }

  .footer {
    width: 100%;
    background: #0D0F1B;
    color: #FFFFFF;
    .mains{
      width: 80%;
      margin: 0 10%;
      height: 200px;
      border-bottom: solid 1px #92959C;
      display: flex;
      justify-content: space-between;
      padding: 40px 0 20px;
      .logo{
        font-size: 2.5vw;
        font-family: Arial-Black, Arial;
        font-weight: 900;
        cursor: pointer;
      }
      .zixun{
        font-size: 0.83vw;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        margin: 10px 0;
        cursor: pointer;
      }
      .text{
        font-size: 0.73vw;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A4A4AE;
        margin: 10px 0;
        cursor: pointer;
      }
    }
    .brand{
      text-align: center;
      padding:  20px 0;
      font-size: 0.7vw;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #A4A4AE;
      cursor: pointer;
    }
  }
}</style>

