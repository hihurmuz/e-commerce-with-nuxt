<template>
    <div>
        <div>
            <b-card bg-variant="light">
                <b-form-group
                label-cols-lg="3"
                label="Product Update"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
                >
                <b-form-group
                    label-cols-sm="3"
                    label="Product ID:"
                    label-align-sm="right"
                    label-for="nested-street"
                >
                    <b-form-input v-model="productID" id="nested-street"></b-form-input>
                    <b-button variant="dark" class="mt-5" block  @click="getProduct">Get</b-button>  
                </b-form-group>     
                </b-form-group>
            </b-card>
        </div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            productID:null
        }
    },
    methods: {
        async getProduct(){
            let result = await this.$axios.$get(`http://localhost:8080/api/product/${this.productID}`);
            
            console.log(result);
        }
    },
}
</script>

<style>

</style>