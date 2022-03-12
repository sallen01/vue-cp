<template>
<div class="wrapper">
  <div class="outfits">
    <div class="outfit" v-for="outfit in outfits" :key="outfit.id">
      <div class="image">
        <img :src="'/Clothes/'+outfit.image">
      </div>
      <div class="info">
        <h1>{{outfit.name}} {{outfit.last}}</h1>
        <p>{{outfit.year}}</p>
        <button @click="addToSaved(outfit)" class="auto">Save</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'OutfitList',
  props: {
    outfits: Array
  },
  methods: {
    addToSaved(outfit) {
      let added = false;
      this.$root.$data.saved.forEach(item => {
        if (item.id == outfit.id) {
          added = true;
        }
      });
      if (!added) {
        outfit.quantity = 1;
        this.$root.$data.saved.push(outfit);
      }
      else {
        outfit.quantity++;
      }
    }
  }
}
</script>



<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.outfits {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid black;
  padding-bottom: 40px;
}
.outfit {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
  border: 1px solid black;
  background: #DBEED2;
}
.outfit img {
  //border: 2px solid #333;
  height: 300px;
  width: 200px;
  object-fit: cover;
  border: 1px solid black;
}
.outfit .image {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.info {
  color: #000;
  height: 80px;
  background: #E6DFD8;
  padding-left: 10px;
}
.info h1 {
  font-size: 16px;
  padding-top: 5px;
}
.info p {
  margin: 0px;
  font-size: 10px;
  margin-top: -10px;
  margin-bottom: 5px;
}
button {
  height: 30px;
  width: 60px;
  background: gray;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>
