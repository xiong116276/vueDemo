<template>
  <div class="login-container">
    {{msg}}
    <div @click="login">登录</div>
    <div style="padding:15px;">
      <x-button type="primary" @click.native="toast">use text function</x-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginContainer',
  data () {
    return {
      msg: 'login container'
    }
  },
  methods:{
    login:function () {
      // this.$router.push('/main');
      let params = JSON.stringify({'username':'wanxiang','password':'123456','timestamp':Date.parse(new Date())/1000});
      this.$axios({
        methods:'get',
        url:'http://192.168.0.110:8080/wx/carinfo/getinfo',
        data:{"params":params,"version":"v1.0"},
      }).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      });
    },
    toast:function () {
      this.$vux.toast.show({
        text: 'Hello World',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .login-container{

  }
</style>
