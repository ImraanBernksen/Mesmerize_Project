<template>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a href="/"><img style="height: 2rem;" class="img-fluid" src="https://i.postimg.cc/NFL3dKw8/whitelogo-middle.png"></a>
          <ul class="navbar-nav ms-auto">
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
              <a class="nav-link" href="/myAccount">MY ACCOUNT</a>
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

.nav-link:hover{
  color: blue;
}

nav {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;
}
</style>
