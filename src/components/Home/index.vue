<template>
  <div class="cards">
    <div v-for="(card, index) in cards" :key="index" class="cards__card">
      <div class=" cards__card-body bg-gray-200">
        <div class="cards__card-body-img">
          <img src="@/assets/img/img1.jpeg" alt="" />
        </div>
        <div class="cards__card-body-info">
          <h3 class="text-gray-900 font-bold">{{ card.title }}</h3>
          <p class="text-base text-gray-700 text-justify">
            {{ card.text.substring(1, 140) + " ..." }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
interface Card {
  title: string;
  text: string;
}

export default defineComponent({
  name: "Home",
  setup() {
    const cards = ref<Card[]>([
      {
        title: "Card 1",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam suscipit est vitae incidunt alias fugit distinctio magni eveniet. Omnis id dignissimos voluptatibus assumenda nostrum, sint aliquam illum adipisci laudantium cupiditate",
      },
      {
        title: "Card 2",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam suscipit est vitae incidunt alias fugit distinctio magni eveniet. Omnis id dignissimos voluptatibus assumenda nostrum, sint aliquam illum adipisci laudantium cupiditate",
      },
      {
        title: "Card 3",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam suscipit est vitae incidunt alias fugit distinctio magni eveniet. Omnis id dignissimos voluptatibus assumenda nostrum, sint aliquam illum adipisci laudantium cupiditate",
      },
    ]);

    return {
      cards,
    };
  },
});
</script>
