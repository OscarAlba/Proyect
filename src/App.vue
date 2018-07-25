<template>

  <div class="container">
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Food & Dining</a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    </nav>
    <router-view></router-view>
  </div>

</template>

<script>

  export default {}

</script>

<style>

  .mobile {
    padding-bottom: 20%;
  }

  .espacio {
    margin-bottom: 30%;
  }
  .encabezado {
    justify-content: center;
  }

</style>
