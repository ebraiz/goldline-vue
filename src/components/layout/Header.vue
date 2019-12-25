<template>
  <div>
    <nav class="navbar navbar-lorem">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                     
          </button>
        <router-link to="/" class="navbar-brand">
          <img src="../assets/images/logo.png" class="img-responsive" alt="logo" />
        </router-link>
        <ul class="mobile-icon">
          <li>
            <router-link to="/" class="search-open1">
              <img src="../assets/images/search-icon.png" class="img-responsive hidden-sm hidden-md hidden-lg" alt="" />
            </router-link>
          </li>
          <li>
              <router-link to="Login">
                <img src="../assets/images/profile-icon.png" class="img-responsive hidden-sm hidden-md hidden-lg" alt="" />
              </router-link>
          </li>
          <li>
              <router-link to="Addcart">
                <img src="../assets/images/cart-icon.png" class="img-responsive hidden-sm hidden-md hidden-lg" alt="" />
              </router-link>
          </li>
        </ul>
        </div>

        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right-lorem">
            <li><router-link to="/" exact class="active">HOME</router-link></li>
            <li><router-link to="Eliquids">E-LIQUIDS</router-link></li>
            <li><router-link to="Saltnic">SALT NIC</router-link></li>
            <li><router-link to="Devices">DEVICES</router-link></li>
            <li><router-link to="Juul">JUUL COMPATIBLE PODS</router-link></li>
            <li><router-link to="Sale">SALE</router-link></li>
            <li><router-link to="Stlth">STLTH VAPE</router-link></li>
            <li><router-link to="Newarrivals">NEWEST ARRIVALS</router-link></li>
            <li><router-link to="Contactus">CONTACT US</router-link></li>
            <li>
              <router-link to="/" class="search-open">
                <img src="../assets/images/search-icon.png" class="hidden-xs img-responsive" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="Login">
                <img src="../assets/images/profile-icon.png" class="hidden-xs img-responsive" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="Addcart">
                <img src="../assets/images/cart-icon.png" class="hidden-xs img-responsive" alt="" />
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
    export default {
      name: 'Header'
    }
</script>

<style scoped>

</style>