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
        <b-navbar-nav class="ml-auto"  v-if="!this.$store.state.email">
            <b-nav-item @click="$bvModal.show('bv-modal-example')">Login</b-nav-item>
        </b-navbar-nav>        

        <b-dropdown :text="this.$store.state.email" variant="outline-dark" size="sm" class="m-2 ml-auto" right v-else>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="userLogout">Logout</b-dropdown-item>
        </b-dropdown>

        <div>
          <b-modal id="bv-modal-example" hide-footer>
            <template v-slot:modal-title>
              Login
            </template>
            <div class="d-block text-center">
              <div>
                <b-tabs content-class="mt-3" align="center">
                  <b-tab title="Sign In" active>
                      <div>
                        <b-form-group
                          id="fieldset-1"
                          label="Enter your email"
                          label-for="input-1"
                        >
                          <b-form-input id="input-1" v-model="email" type="email" trim></b-form-input>
                        </b-form-group>

                        <b-form-group
                          id="fieldset-2"
                          label="Enter your password"
                          label-for="input-2"
                        >
                          <b-form-input id="input-2" v-model="password" type="password" trim></b-form-input>
                        </b-form-group>
                        <b-button variant="outline-primary" @click="userSignIn" block>Sign In</b-button>
                      </div>
                  </b-tab>
                  <b-tab title="Sign Up">
                    <div>
                        <b-form-group
                          id="fieldset-3"
                          label="Enter your email"
                          label-for="input-3"
                        >
                          <b-form-input id="input-3" v-model="email" type="email" trim></b-form-input>
                        </b-form-group>

                        <b-form-group
                          id="fieldset-4"
                          label="Enter your name"
                          label-for="input-4"
                        >
                          <b-form-input id="input-4" v-model="name" trim></b-form-input>
                        </b-form-group>

                        <b-form-group
                          id="fieldset-5"
                          label="Enter your password"
                          label-for="input-5"
                        >
                          <b-form-input id="input-5" v-model="password" type="password" trim></b-form-input>
                        </b-form-group>

                        <b-form-group
                          id="fieldset-6"
                          label="Enter your address"
                          label-for="input-6"
                        >
                          <b-form-textarea id="input-6" v-model="address" trim></b-form-textarea>
                        </b-form-group>
                        
                        <b-form-group
                          id="fieldset-7"
                          label="Enter your phone number"
                          label-for="input-7"
                        >
                          <b-form-input id="input-7" v-model="phone" trim></b-form-input>
                        </b-form-group>
                        <b-button variant="outline-primary" block @click="userSignUp">Sign Up</b-button>
                      </div>
                  </b-tab>
                </b-tabs>
              </div>
            </div>
          </b-modal>
        </div>
    </b-navbar>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {  // <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  data() {
    return {
      name:null,
      email:null,
      password:null,
      phone:null,
      address:null
    }
  },
  methods: {
    async userSignUp(){
      console.log("tıklandı ....");
      
      try {
        let userData={
          name:this.name,
          email:this.email,
          password:this.password,
          phone:this.phone,
          address:this.address
        };

        let result = await this.$axios.$post("http://localhost:8080/api/authentication/signup",userData)
        console.log(result);
        
        if(result.success){
          Cookie.set("access_token",result.token);
          this.$store.commit("setUser",{
            name:this.name,
            email:this.email,
          });
          this.$bvmodal.hide('bv-modal-example');
        }
      } catch (error) {
        console.log(error);        
      }
    },

    async userLogout(){
       Cookie.remove("access_token");  
       this.$store.commit("deleteUser");
    },

    async userSignIn(){
      try {
        let userData={
          email:this.email,
          password:this.password,
        };

        let result = await this.$axios.$post("http://localhost:8080/api/authentication/signin",userData)
        Cookie.set("access_token",result.token);
          this.$store.commit("setUser",{
            name:result.user.name,
            email:result.user.email,
          });
      } catch (error) {
        
      }
    }
  },

}
</script>

<style>

</style>