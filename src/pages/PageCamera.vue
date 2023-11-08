<template>
  <q-page class="constrain-more q-pa-md" id="PageCamera">
    <div class="camera-frame q-pa-md">
      <video autoplay class="full-width" ref="videoplay" />
      <canvas ref="canvas" class="full-width" height="240" />
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        @click="captureImage"
        color="grey-10"
        icon="eva-camera"
        round
        size="lg"
      />
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
import { uid } from "quasar";
import { onMounted, reactive, ref } from "vue";

const post = reactive([
  {
    id: uid(),
    caption: "",
    location: "",
    photo: null,
    date: Date.now(),
  },
]);

const videoplay = ref(null);
const canvas = ref(null);

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
    .catch((erro) => {
      console.log("Erro aoa abrir webcam ".erro);
    });
};
const captureImage = function () {
  let myVideo = videoplay;
  let myCanvas = canvas;

  myCanvas.value.width = myVideo.value.getBoundingClientRect().width;
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
