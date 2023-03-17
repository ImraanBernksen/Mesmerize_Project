<template>
    <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.background {
  background-color: black;
  margin-top: 55px;
}

h2 {
  padding: 20px;
}

form {
  padding: 20px;
}

#app {
  font-family: 'Anton', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
