<template>
    <div>  
        <router-link to="/login">登陆</router-link>
        <router-link to="/reg">注册</router-link>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
name:'app',
  data() {
      return {
          
      }
  },
}
</script>
