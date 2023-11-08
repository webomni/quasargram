<template>
  <q-page class="constrain-more q-pa-md" id="PageCamera">
    <div class="camera-frame q-pa-md">
      <video
        v-show="!imageCaptured"
        autoplay
        class="full-width"
        ref="videoplay"
      />
      <canvas ref="canvas" class="full-width" height="240" />
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        v-if="hasCameraSuport"
        @click="captureImage"
        color="grey-10"
        icon="eva-camera"
        round
        size="lg"
      />
      <q-file
        outlined
        v-model="imageUpdaload"
        v-if="!hasCameraSuport"
        label="Choose an image"
        accept="image/*"
        @input="captureImageFallBack"
      >
        <template v-slot:prepend>
          <q-icon name="eva-attach-outline" />
        </template>
      </q-file>

      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.caption"
          label="Caption"
          class="col col-sm-6"
          dense
        />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.location"
          label="Location"
          class="col col-sm-6"
          dense
        >
          <template v-slot:append>
            <q-btn round dense flat icon="eva-navigation-2-outline" />
          </template>
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn rounded color="primary" unelevated label="Post Image" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { event, uid } from "quasar";
import { onMounted, reactive, ref } from "vue";

const post = reactive({
  id: uid(),
  caption: "",
  location: "",
  photo: null,
  date: Date.now(),
});

const videoplay = ref(null);
const canvas = ref(null);
const imageCaptured = ref(false);

// para informar se tem acesso a camera
const hasCameraSuport = ref(true);
const imageUpdaload = ref([]);

const initCamera = function () {
  console.log("iniciou a camera");
  navigator.mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((MediaStream) => {
      console.log("Abrindo webcam ");
      videoplay.value.srcObject = MediaStream;
    })
    .catch((error) => {
      console.log("Erro aoa abrir webcam ".error);
      hasCameraSuport.value = false;
    });
};
const captureImage = async function () {
  console.log("imageCaptured 1");
  console.log(imageCaptured.value);
  let myVideo = videoplay;
  let myCanvas = canvas;
  // com camera
  /*  myCanvas.value.width = myVideo.value.getBoundingClientRect().width;
  myCanvas.value.height = myVideo.value.getBoundingClientRect().height;
  let context = myCanvas.value.getContext("2d");
  context.drawImage(myVideo, 0, 0, myCanvas.value.width, myCanvas.value.height); */

  // sem acesso a camera
  let fundoImg = new Image();
  fundoImg.src = "https://cdn.quasar.dev/img/parallax2.jpg";

  let context = myCanvas.value.getContext("2d");
  await context.drawImage(fundoImg, 0, 0, 337, 252);
  imageCaptured.value = true;
  console.log("imageCaptured 2");
  console.log(imageCaptured.value);

  post.photo = dataURItoBlob(myCanvas.value.toDataURL());
};

const captureImageFallBack = function (file) {
  post.photo = file;

  let myCanvas = canvas;
  let context = myCanvas.value.getContext("2d");

  var reader = new FileReader();
  reader.onload = (event) => {
    var img = new Image();
    img.onload = () => {
      myCanvas.value.width = igm.width;
      myCanvas.value.height = img.height;
      context.drawImage(img, 0, 0, 337, 252);
      imageCaptured.value = true;
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
};

const dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], { type: mimeString });
  return blob;
};
onMounted(() => {
  initCamera();
});
</script>

<style lang="scss" scoped>
.camera-frame {
  border: 2px solid $grey-10;
  border-radius: 10px;
}
</style>
