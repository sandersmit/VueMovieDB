<template>
  <nav>
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item"><router-link class="nav-link" to="/">Search</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to="/featurepage">Featured</router-link></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
a {
  color: white;
  &.active,
  &.router-link-exact-active {
    color: #35eb9a
  }

  &.nav-link {
    
    font-size: 2rem;
    padding: 1rem;
    display: block;
    &:hover {
      color: #f2f2f2
    }
  }
}

nav {
  .nav-item {
    &.active {
      a {
        color: #35eb9a
      }
    }
  }
}
</style>