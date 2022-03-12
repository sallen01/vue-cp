<template>
<div>
  <div class="cart-head">
    <h1>Saved Outfits</h1>
    <p>outfits: {{outfitAmount}}</p>
  </div>
  <SavedList :saved="saved" />
</div>
</template>


<script>
import SavedList from "../components/SavedList.vue"
export default {
  name: 'SavedView',
  components: {
    SavedList
  },
  data() {
    return {
    }
  },
  computed: {
    saved() {
      return this.$root.$data.saved;
    },
    outfitAmount() {
      return this.$root.$data.saved.length;
    }
  },
}
</script>


<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
p {
  display: flex;
  justify-content: center;
  font-size: 20px;
}
</style>
