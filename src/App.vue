<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "assets/css/base";
  body{
    max-width: 750px;
    margin: 0 auto;
    font-size:28px!important;
    color: #333;
  }
</style>
