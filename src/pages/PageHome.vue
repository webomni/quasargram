<template>
  <q-page class="constrain q-pa-md" id="PageHome">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post q-mb-md"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img
                  src="https://gravatar.com/userimage/92146302/2e776184dad15bb4feb614efd20b7fca.jpeg?size=256"
                />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">paulo_castro</q-item-label>
              <q-item-label caption> {{ post.location }} </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <q-img :src="post.imageURL" />
          <q-card-section>
            <div>{{ post.caption }}</div>
            <div class="text-caption text-grey">{{ post.date }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <!-- min profile -->

        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img
                src="https://gravatar.com/userimage/92146302/2e776184dad15bb4feb614efd20b7fca.jpeg?size=256"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">paulo_castro</q-item-label>
            <q-item-label caption> Dannyj </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";
import { date } from "quasar";

const posts = reactive([
  {
    id: 1,
    caption: "Gold gate Bridge",
    date: date.formatDate(1699295959089, "MMMM D h:mmA"),
    location: "San Francisco, United States",
    imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  {
    id: 2,
    caption: "Gold gate Bridge",
    date: date.formatDate(1699295959089, "MMMM D h:mmA"),
    location: "San Francisco, United States",
    imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  {
    id: 3,
    caption: "Gold gate Bridge",
    date: date.formatDate(1699295959089, "MMMM D h:mmA"),
    location: "San Francisco, United States",
    imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  {
    id: 4,
    caption: "Gold gate Bridge",
    date: date.formatDate(1699295959089, "MMMM D h:mmA"),
    location: "Monte Carmelo - MG",
    imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
]);
</script>

<style lang="scss" scoped>
.card-post .q-img {
  min-height: 200px;
}
</style>
