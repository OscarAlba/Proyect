<template>

  <b-container fluid>
    <b-row>
      <b-card class="text-center">
        <b-media-aside vertical-align="center" class="encabezado">
          <b-img thumbnail
                 slot="aside"
                 src="http://www.dole.com/~/media/ArticleImages/Featured_Article-Home_Cooking-1338x460.jpg"
                 alt="placeholder" />
        </b-media-aside>
        <b-media-body>
          <h1 class="mt-0">Media Title</h1>
          <p class="card-text">
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
    <hr>
    <b-row>
      <b-col>
        <b-card class="text-center">
          <b-media right-align vertical-align="center" class="encabezado">
            <b-img slot="aside"
                   src="https://static.wixstatic.com/media/4cc528_4b90d0ee9bcb465db9a4fa334e471098~mv2_d_1280_1280_s_2.jpg_256"
                   alt="placeholder" />
            <h2 class="mt-0">Media Title</h2>
            <p class="card-text">
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
          <b-media right-align vertical-align="center" class="encabezado">
            <b-img slot="aside" src=" https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_5860_4937.JPEG" />

            <h2 class="mt-0">Media Title</h2>
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
  </b-container>

</template>

<script>

  export default {}

</script>

<style>

  .encabezado {
    justify-content: center;
  }
  .centrado {
    justify-content: safe center;
  }
  div.absolute {
    position: absolute;
    top: 80px;
    right: 0;
    width: 200px;
    height: 100px;
    border: 3px solid #73ad21;
  }
  img.fake {
    float: left;
    width: 100%;
  }

</style>
