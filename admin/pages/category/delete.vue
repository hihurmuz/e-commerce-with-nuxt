<template>
  <div class="w-75">
    <b-tabs content-class="mt-3">
      <b-form-select 
        value-field="index"
        text-field="title"  
        v-model="mainCategory" 
        :options="mainCategoryList" 
        class="mt-2" />
      <b-tab title="Main Category">        
        <b-button variant="secondary" class="mt-5" @click="deleteCategory('main')" block>Delete</b-button>    
      </b-tab>
      <b-tab title="Sub Category">
        <b-form-select             
          v-model="subCategory" 
          :options="getSubCategoryList" 
          class="mt-2" />
        <b-button variant="secondary" class="mt-5" @click="deleteCategory('sub')" block>Delete</b-button>    
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainCategory: null,
      mainCategoryList: [],
      subCategory: null
    }
  },
  mounted() {
    this.getAllCategoryData()
  },
  methods: {
    async getAllCategoryData() {
      let result = await this.$axios.$get("http://localhost:8080/api/category");
      
      let tempArr = []
      for (let i = 0; i < result.length; i++) {
        tempArr.push({...result[i], index: i})
      }
      this.mainCategoryList = tempArr
    },
    async deleteCategory(type) {
      let _id = this.mainCategoryList[this.mainCategory]._id
      switch (type) {
        case 'main':
          await this.$axios.$delete(`http://localhost:8080/api/category/${_id}`);
          break;
          
        case 'sub':
          await this.$axios.$put(`http://localhost:8080/api/category/${_id}`, 
          {subCategory: this.subCategory});
          break;
      }
    }
  },
  computed: {
    getSubCategoryList() {
      if (this.mainCategory !== null) {
        return this.mainCategoryList[this.mainCategory].subCategory
      } else {
        return []
      }
    }
  }
}
</script>

<style>

</style>