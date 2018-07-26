<template>

  <b-container fluid>
    <b-row>
      <b-card class="text-center">
        <b-media-aside vertical-align="center" class="encabezado">
          <b-col lg="6">
            <input type="file" @change="previewImage" accept="image/*" >
            <div class="image-preview" v-if="imageData.length > 0">
              <img class="preview" :src="imageData">
            </div>
          </b-col>

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
            <input type="file" @change="previewImage2" accept="image/*" >
            <div class="image-preview" v-if="imageData2.length > 0">
              <img class="preview" :src="imageData2">
            </div>
            <h2 class="mt-0">Media Title</h2>
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
            <input type="file" @change="previewImage1" accept="image/*" >
            <div class="image-preview" v-if="imageData1.length > 0">
              <img class="preview" :src="imageData1">
            </div>
            <h2 class="mt-0">Media Title</h2>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
              felis in faucibus.
            </p>
          </b-media>
        </b-card>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>

  export default {
    data() {
      return {
        imageData:" ",
        imageData1:" ",
        imageData2:" "
      }
    },
    methods: {
      previewImage(event) {
        // Reference to the DOM input element
        var input = event.target
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader()
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = e => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.imageData = e.target.result
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0])
        }
      },

      previewImage1(event) {
        // Reference to the DOM input element
        var input = event.target
        console.log(event.target.files)
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader()
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = e => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.imageData1 = e.target.result
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0])
        }
      },
      previewImage2(event) {
        // Reference to the DOM input element
        var input = event.target
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader()
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = e => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.imageData2 = e.target.result
          }
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0])
        }
      }

    }
  }

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
  img.preview {
      width: 100%;
      border: 1px solid #DDD;
      padding: 5px;
  }
 .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}

</style>
