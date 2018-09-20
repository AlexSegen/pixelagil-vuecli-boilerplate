<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/elements">Elements</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #0068FF;
    }
  }
}
</style>
