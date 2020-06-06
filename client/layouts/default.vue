<template>
  <div>
    <UnregisterdUserNavbar/>
    <nuxt />
    <TheFooter/>
  </div>
</template>
<script>
import UnregisterdUserNavbar from "../components/UnregisteredUserNavbar"
import TheFooter from "../components/TheFooter"
export default {
  components:{
    UnregisterdUserNavbar,
    TheFooter
  }
}
</script>
<style>

</style>
