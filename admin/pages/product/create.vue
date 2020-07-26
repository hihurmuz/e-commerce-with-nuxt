<template>
<div>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Product Create"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Title:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input v-model="title" id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Price:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input v-model="price" id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Stock Number:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input v-model="stockNumber" id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Description:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-tags input-id="tags-basic" v-model="description" class="mb-2" placeholder="Add Decriciption"></b-form-tags>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Photo:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-tags input-id="tags-basic" v-model="photo" placeholder="Add Photo Link" class="mb-2"></b-form-tags>
      </b-form-group>

      <b-form-group
            label-cols-sm="3"
            label="Main Category:"
            label-align-sm="right"
            label-for="main-state"
        >
         <b-form-select v-model="mainCategory" :options="options" class="mt-2"></b-form-select>
      </b-form-group>

      <b-form-group
            label-cols-sm="3"
            label="Sub Category:"
            label-align-sm="right"
            label-for="sub-state"
        >
         <b-form-select v-model="subCategory" :options="subCategoryOptions" class="mt-2"></b-form-select>
         <b-button variant="dark" class="mt-5" block :disabled="!allValueValid" @click="createProduct">Create</b-button>  
      </b-form-group>
      
    </b-form-group>
  </b-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            title:null,
            price:null,
            stockNumber:null,
            description:null,
            photo:null,
            mainCategory:null,
            subCategory:null,
            options: [
                { value: null, text: 'Please select a main category',disabled: true },
                { value: 'A', text: 'A' },
                { value: 'B', text: 'B' },
                { value: 'C', text: 'C' },
                ],
        }
    },
    computed: {
        subCategoryOptions: function(){
            if(this.mainCategory === 'A'){
                let sub = [
                    { value: null, text: 'Please select a sub category',disabled: true },
                    { value: '1', text: '1' },
                    { value: '2', text: '2' },
                    { value: '3', text: '3' },
                    ];
                return sub
            }else if(this.mainCategory === 'B'){
                 let sub = [
                    { value: null, text: 'Please select a sub category',disabled: true },
                    { value: '4', text: '4' },
                    { value: '5', text: '5' },
                    { value: '6', text: '6' },
                    ];
                return sub
            }else if(this.mainCategory === 'C'){
                 let sub = [
                    { value: null, text: 'Please select a sub category',disabled: true },
                    { value: '7', text: '7' },
                    { value: '8', text: '8' },
                    { value: '9', text: '9' },
                    ];
                return sub
            }else{
                let sub = [
                    { value: null, text: 'Please select a main category first ',disabled: true },                    
                    ];
                return sub
            }
        },
        allValueValid: function(){
            if(this.title && this.price && this.stockNumber && this.description && this.photo 
            && this.mainCategory && this.subCategory){
                return true
            }else{
                return false
            }
        }
    },
    methods: {
        async createProduct(){
            let newProduct={
                title:this.title,
                price:this.price,
                stockNumber:this.stockNumber,
                description:this.description,
                photo:this.photo,
                mainCategory:this.mainCategory,
                subCategory:this.subCategory,
            };

            let result = await this.$axios.$post("http://localhost:8080/api/product",newProduct);
            
            console.log(result);
            
        }
    },
}
</script>

<style>

</style>