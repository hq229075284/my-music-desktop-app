<template>
  <div id="app">
    <keep-alive :include="[]">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
html,
body,
#app {
  margin:0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: MicrosoftYaHei, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  font-size: 14px;
}
*{
  box-sizing: border-box;
}
button.van-button--default{
  border: 0px;
}
// .NProgress-parent{
//     height: 2px;
//     margin-bottom: -2px;
// }
</style>
