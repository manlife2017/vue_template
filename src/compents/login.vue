<template>
  <div>
      login html
      <div>
          number:{{$store.state.reg.number}}
      </div>
  </div>
</template>


<script>
export default {
    name:'login',
    data() {
        return {
            
        }
    },
    mounted() {
        this.$store.dispatch('reg/increment')
    },
}
</script>