<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Udemy Shop</b-navbar-brand>

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>   

<!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item>Sing In</b-nav-item>
            <b-nav-item>Sing Up</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>