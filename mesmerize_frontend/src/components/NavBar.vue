<template>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <img style="height: 2rem; padding-left: 10px;" src="https://i.postimg.cc/yY9SvgLx/justLogo.png">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/product">SHOP</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin">ADMIN</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/signup">SIGNUP</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">LOGIN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/myaccount"><i class="fa-solid fa-user"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout"><i class="fa-solid fa-cart-shopping"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout">CHECKOUT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
      Name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}

nav {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;
}
</style>
