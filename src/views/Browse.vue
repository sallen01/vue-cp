<template>
<div>
  <div class="wrapper">
    <h1>Outfits</h1>
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <OutfitList :outfits="outfits" />
</div>
</template>



<script>
import OutfitList from "../components/OutfitList.vue"
export default {
  name: 'Home-view',
  components: {
    OutfitList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    outfits() {
      return this.$root.$data.outfits.filter(outfit => outfit.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
</style>
