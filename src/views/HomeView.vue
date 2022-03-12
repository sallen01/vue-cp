<template>
  <div class="home">
    <div class='background-image'>
      <img src="../../Clothes/mountain-background.jpg" height="433">
        <div class="centered">Pics2Pix</div>
          <div class="sub-text">browse your friends' trends<br><br>
            <div class="buttons">
            <router-link to="/browse">
            <button class="btn btn-outline-light">Outfits</button>
            </router-link>
            <router-link to="/saved">
            <button class="btn btn-outline-light">Saved</button>
            </router-link>
            </div>
          </div>
        </div>
    </div>
</template>


<style scoped>
.background-image {
  width: 100%;
  text-align: center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  color: white;
  font-size: 90px;
  text-shadow: -2px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
}
.sub-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,60%);
  color: white;
  font-size: 20px;
  text-shadow: -2px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
}
.buttons {
  display: flex;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  margin-top: -20px;
}
.background-image {
  padding: 35px;
  //position: absolute;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}
@media (max-width: 825px) {
  .background-image img{
    height: 150px;
  }
  .centered {
    top: 50%;
    left: 50%;
    transform: translate(-47%, -350%);
    color: white;
    font-size: 40px;
    text-shadow: -2px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
  }
  .sub-text {
    top: 50%;
    left: 50%;
    transform: translate(-46%,-480%);
    color: white;
    font-size: 10px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    //display: none;
  }
  .sub-text a {
    width: 40%;
  }
  .buttons {
    display: none;
  }
  .row {
    border: 1px solid black;
  }
}

</style>
