<template>
  <div>
    <!-- <Index /> -->
    <!-- <hr /> -->
    <div class="filter-menu ">
      <ul class="filter-menu__items">
        <li class="filter-menu__items-item">
          <button
            class="filter-menu__items-item-btn btn-success"
            @click="handleClick('title')"
          >
            Order by Title
          </button>
        </li>
        <li class="filter-menu__items-item">
          <button
            class="filter-menu__items-item-btn btn-primary"
            @click="handleClick('salary')"
          >
            Order by Salary
          </button>
        </li>
        <li class="filter-menu__items-item">
          <button
            class="filter-menu__items-item-btn btn-secondery"
            @click="handleClick('location')"
          >
            Order by Location
          </button>
        </li>
      </ul>
      <p class="filter-menu__text">Order by {{ order }}</p>
    </div>
    <br />
    <Jobs :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Jobs from "@/components/Home/Jobs.vue";
// import Index from "@/components/Home/index.vue";
import { Job, OrderTerm } from "@/types/job";

export default defineComponent({
  name: "Home",
  components: {
    Jobs,
    // Index,
  },
  setup() {
    // values
    const jobs = ref<Job[]>([
      {
        title: "Farm Worker",
        img: "img1.jpeg",
        location: "Amesterdam",
        salary: 30000,
        id: "1",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero architectotempore officia libero porro, ad expedita itaque laboriosam?",
      },
      {
        title: "Engineer",
        img: "img1.jpeg",
        location: "Tampa",
        salary: 44000,
        id: "2",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero architectotempore officia libero porro, ad expedita itaque laboriosam?",
      },
      {
        title: "Gamer",
        img: "img1.jpeg",
        location: "Kentaki",
        salary: 70000,
        id: "3",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero architectotempore officia libero porro, ad expedita itaque laboriosam?",
      },
      {
        title: "Police",
        img: "img1.jpeg",
        location: "Tehran",
        salary: 24000,
        id: "4",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero architectotempore officia libero porro, ad expedita itaque laboriosam?",
      },
    ]);
    const order = ref<OrderTerm>("title");
    // functions
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };
    return {
      jobs,
      order,
      handleClick,
    };
  },
});
</script>
