<template>
  <div id="app" onselectstart="return false;">
    <transition
      name="change"
      mode="out-in"
      enter-active-class="animate__animated animate__zoomIn"
    >
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      userName: "",
      passWord: "",
      MenuPosition: false,
      isRouterAlive: true, //控制视图是否显示的变量
    };
  },
  components: {},
  watch: {
        $route(to, from){
          // 判断是否由登录页进入（是的话map页面项目选择默认为所以项目）
            if (to.path=='/map' &&from.path=='/Login') {
              sessionStorage.setItem('pathskip',1)
            }else{
              sessionStorage.setItem('pathskip',2)
            }
        },
      },
  methods: {
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true; //再打开
      });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
#app{
  min-width: 750px;
  font-size: 16px;
}
</style>
