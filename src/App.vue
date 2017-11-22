<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "assets/style/common";
	@import 'assets/style/mui.min';
  #app{
    width: 100%;
    height: 100%;
    background-color: #F6F6F6;
  }
</style>
