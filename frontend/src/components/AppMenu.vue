<template>
    <div class="flex-container">
        <nav>
            <div class="flex-item">
                <button @click="toggleFlexItem" class="toggle-button">Toggle</button>
            </div>
            <div class="flex-item">
                <a href="/">
                    <img src="public/tumefatti-eyewear-high-resolution-logo-transparent.png" width="130" height="100" alt="logo">
                    <h1>Tumefatti</h1>
                </a>
            </div>
        </nav>
        <div class="flex-item" id="menu" v-if="showFlexItem">
            <ul>
                <li><RouterLink to = "/">Pagina 1</RouterLink></li>
                <li><RouterLink to = "/">Pagina 2</RouterLink></li>
                <li><RouterLink to = "/">Pagina 3</RouterLink></li>
                <li><RouterLink to = "/">Pagina 4</RouterLink></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showFlexItem: true,
    };
  },
  methods: {
    toggleFlexItem() {
      this.showFlexItem = !this.showFlexItem;
    },
  },
};
</script>