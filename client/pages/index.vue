<template>
  <div class="mainContainer">
    <TheSlider/>
    <div class="productsList">
      <div v-for="i in 12" :key="i" class="productArea">Product</div>
    </div>
  </div>
</template>

<script>
import TheSlider from "../components/TheSlider"

export default {
  components:{
    TheSlider
  }
}
</script>

<style>
.mainContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.productsList{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  background-color: turquoise;
  padding-left: 20px;
  padding-right: 20px;

}
.productArea{
  background-color: tomato;
  height: 300px;
  width: 300px;
  margin-bottom: 20px;
}
</style>
