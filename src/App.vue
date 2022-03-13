<template>
<div id="app">
<nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/">
      <div class="navbar-brand">Pics2Pix</div>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/">
            <p class="nav-link">Home</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/browse">
            <p class="nav-link">Outfits</p>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/saved">
            <p class="nav-link">Saved</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>

  <router-view />

  <div class="background-margin"></div>
    <div class="card-footer">
      <p>To get your photo shared:</p>
      <p>DM @syder333 on instagram</p>
      <a href="https://github.com/sallen01/vue-cp" target="-blank">Git Hub</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
}
.nav-item {
  padding-top: 32px;
}
.container-fluid {
  background-color: #E6DFD8;
  border: 1px solid black;
}
.container-fluid a {
  color: black;
}
.router-link-exact-active p {
  font-weight: bold;
  text-decoration: underline;
}
.navbar-brand {
  padding: 5px 15px;
  border: 1px solid black;
}
form {
  display: flex;
  text-align: center;
  justify-content: center;
  height: 40px;
  padding-top: 15px;
}
label p {
  padding-right: 5px;
}
.navbar-collapse {
  display: flex;
  justify-content: space-between;
}
#navbarSupportedContent {
    height: 80px;
}
.card-footer {
  background-color: #E6DFD8;
  margin-top: 20px;
  height: 150px;
}
.card-footer a {
  color: black;
}
.card-footer a:visited {
  color: gray;
}
.card-footer a:hover {
  color: blue;
}
</style>
