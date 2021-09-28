<template>
  <div class="w-full bg-gray-50">
    <div class="container mx-auto">
      <Header />
      <div class=" lg:px-2 py-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/layouts/Header.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>
