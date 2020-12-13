<template>

  <header>
    <Navbar />
  </header>

  <main>
    <div id="view">
      <router-view/>
    </div>
  </main>

</template>

<style lang="scss">
@import "src/scss/global";
@import "src/scss/_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bg-primary;
  color: $text-primary;
  min-height: 100vh;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: $bg-primary;
}

::-webkit-scrollbar-thumb {
  background: $text-primary;
}

</style>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  setup() {
    console.log(process.env);
    return {};
  },
};

</script>
