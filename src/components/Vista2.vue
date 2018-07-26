<template>

  <b-container fluid>
    <b-row>
      <b-col>
        <b-card class="text-center">
          <b-media right-align vertical-align="center">
            <b-img slot="aside"
                   src="https://www.feriadelasculturas.com/content/2017/12/arroz-con-leche-256x256.jpg.pagespeed.ce.Y3A7q0N0jj.jpg"

                   alt="placeholder" />
            <h5 class="mt-0">Media Title</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
              felis in faucibus.
            </p>
            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </b-media>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="text-center">
          <b-media right-align vertical-align="center">
            <b-img slot="aside"
                   src="https://pbs.twimg.com/profile_images/691360452584976384/xuLID2Rn_400x400.jpg"
                   alt="placeholder" />
            <h5 class="mt-0">Media Title</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
              felis in faucibus.
            </p>
            <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </b-media>
        </b-card>
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-card class="text-center">
        <b-media-aside vertical-align="center" class="encabezado">
          <b-img thumbnail
                 slot="aside"
                 src="https://www.liffed.com/wp-content/uploads/2017/09/o-KITCHEN-COOKING-facebook-1.jpg"
                 class="fake" />
        </b-media-aside>
        <b-media-body>
          <h1 class="mt-0">Media Title</h1>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
            in faucibus.
          </p>
          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </p>
        </b-media-body>
      </b-card>
    </b-row>

  </b-container>

</template>

<script>

  export default {}

</script>

<style>

  .encabezado {
    justify-content: center;
  }
  img.fake {
    float: left;
    width: 100%;
  }

</style>
