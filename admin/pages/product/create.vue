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
        <b-form-input id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Price:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Stock Number:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Decriciption:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-tags input-id="tags-basic" v-model="value" class="mb-2" placeholder="Add Decriciption"></b-form-tags>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Photo:"
        label-align-sm="right" class="mb-0"
      >
        <b-form-tags input-id="tags-basic" v-model="value" placeholder="Add Photo Link" class="mb-2"></b-form-tags>
      </b-form-group>

      <b-form-group
            label-cols-sm="3"
            label="Main Category:"
            label-align-sm="right"
            label-for="main-state"
        >
         <b-form-select v-model="selected" :options="options" class="mt-2"></b-form-select>
      </b-form-group>

      <b-form-group
            label-cols-sm="3"
            label="Sub Category:"
            label-align-sm="right"
            label-for="sub-state"
        >
         <b-form-select v-model="selected" :options="options" class="mt-2"></b-form-select>
      </b-form-group>  
    </b-form-group>
  </b-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                { value: null, text: 'Please select a main category',disabled: true },
                { value: 'A', text: 'A' },
                { value: 'B', text: 'B' },
                { value: 'C', text: 'C' },
                { value: 'D', text: 'D'}
                ]
        }
    },
}
</script>

<style>

</style>