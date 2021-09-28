<template>
  <button @click="menuIsVisible = !menuIsVisible" class="humberger-menu">
    <span class="humberger-menu__icon">|||</span>
  </button>
  <ul :class="{ hidden: !menuIsVisible }" class="nav">
    <li class="nav__item" v-for="(nav, index) in items" :key="index">
      <router-link :to="nav.link"> {{ nav.name }} </router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

interface Item {
  name: string;
  link: string;
}

export default defineComponent({
  setup() {
    const items = ref<Item[]>([
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
    ]);
    const menuIsVisible = ref<boolean>(false);
    return {
      items,
      menuIsVisible,
    };
  },
});
</script>
