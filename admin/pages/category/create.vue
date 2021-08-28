<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Main Category Create"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Title:"
          label-align-sm="right"
          label-for="catagory-name"
        >
          <b-form-input v-model="catagoryName" id="catagory-name" />
          <b-button variant="dark" class="mt-5" block @click="createMainCategory">Create</b-button>  
        </b-form-group>
      </b-form-group>
    </b-card>  
    
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Sub Category Create"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label-align-sm="right"
          label-for="sub-catagory-name"
        >          
          <b-form-select 
            placeholder="Select Main Category" 
            v-model="selectedMainCategory" 
            :options="mainCategoryList" 
            value-field="index"
            text-field="title"
            class="mt-2" />
            
          <b-list-group>
            <b-list-group-item v-for="(el,i) in getSubCategoryList" :key="el + i">
              {{ el }}
            </b-list-group-item>
          </b-list-group>  
            
          <b-form-input class="mt-3" v-model="subcatagoryName" id="sub-catagory-name" />    
          <b-button variant="dark" class="mt-5" block @click="createSubCategory">Create</b-button>      
        </b-form-group>
        
      </b-form-group>
    </b-card>  
  </div>
</template>

<script>
export default {
 data() {
   return {
     catagoryName: null,
     subcatagoryName: null,
     selectedMainCategory: null,
     mainCategoryList: []
   }
 },
 mounted() {
   this.getAllCategoryData()
 },
 methods: {
   async createMainCategory() {
     let newCategory ={
        title:this.catagoryName,
    };

    let result = await this.$axios.$post("http://localhost:8080/api/category", newCategory);
    
    console.log(result);
   },
   async createSubCategory() {
     
     
     let result = await this.$axios.$post(`http://localhost:8080/api/category/${this.mainCategoryList[this.selectedMainCategory]._id}`,
     {subCategory:this.subcatagoryName})
     .then(() => {
       this.getAllCategoryData()
     })
     
     
    
    console.log(result);
   },
   
   async getAllCategoryData() {
     let result = await this.$axios.$get("http://localhost:8080/api/category");
     
     let tempArr = []
     for (let i = 0; i < result.length; i++) {
       tempArr.push({...result[i], index: i})
     }
     this.mainCategoryList = tempArr
     console.log(result);
   }
 },
 computed: {
   getSubCategoryList() {
     if (this.selectedMainCategory !== null) {
       return this.mainCategoryList[this.selectedMainCategory].subCategory
     } else {
       return []
     }
   }
 }
}
</script>

<style>

</style>