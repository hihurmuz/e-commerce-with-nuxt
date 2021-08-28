<template>
  <div>
    <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>

          <b-nav-item-dropdown text="Product" right>
              <b-dropdown-item href="/product/create">Create</b-dropdown-item>
              <b-dropdown-item href="/product/delete">Delete</b-dropdown-item>
              <b-dropdown-item href="/product/update">Update</b-dropdown-item>
              <b-dropdown-item href="#">All</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item-dropdown text="Category" right>
            <b-dropdown-item href="/category/create">Create</b-dropdown-item>
            <b-dropdown-item href="/category/delete">Delete</b-dropdown-item>
          </b-nav-item-dropdown>
        
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>
