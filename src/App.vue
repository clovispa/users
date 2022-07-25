<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.sidebar {
  background: #013a14;
}
.mainsection {
  grid-area: mainsection;
  background: #2c3e50;
}
.notes {
  background: #701313;
}
.header {
  background: #2c3e50;
}
.statics {
  background: #2d24a6;
}
</style>
