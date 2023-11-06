<template>
  <q-page class="constrain-more q-pa-md" id="PageCamera">
    <div class="camera-frame q-pa-md">
      <img class="full-width" src="https://cdn.quasar.dev/img/parallax2.jpg" />
    </div>
    <div class="text-center q-pa-md">
      <q-btn round color="black" icon="eva-camera" size="lg" />
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
import { reactive } from "vue";

const post = reactive([
  {
    id: uid(),
    caption: "",
    location: "",
    photo: null,
    date: Date.now(),
  },
]);
</script>

<style lang="scss" scoped>
.camera-frame {
  border: 2px solid $grey-10;
  border-radius: 10px;
}
</style>
