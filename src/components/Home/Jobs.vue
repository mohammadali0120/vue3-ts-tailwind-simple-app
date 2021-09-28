<template>
  <ul class="cards">
    <li class="cards__card" v-for="job in orderedJobs" :key="job.id">
      <div class="cards__card-body bg-gray-100">
        <div class="cards__card-body-img">
          <img :src="require(`@/assets/img/${job.img}`)" alt="" />
        </div>
        <div class="cards__card-body-info">
          <div class="xl:block flex flex-wrap justify-between">
            <p class="text-sm xl:mb-1 font-bold">{{ job.title }}</p>
            <p class="text-sm xl:mb-1 font-bold">{{ job.location }}</p>
            <p class="text-sm xl:mb-1 font-bold">{{ job.salary }}</p>
          </div>
          <p class="text-base text-justify text-gray-700">
            {{ job.description.substring(1, 130) + " ..." }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { Job } from "@/types/job";
import { computed, defineComponent, PropType } from "vue";
import { OrderTerm } from "@/types/job";

export default defineComponent({
  name: "Jobs",
  props: {
    jobs: { required: true, type: Array as PropType<Job[]> },
    order: { required: true, type: String as PropType<OrderTerm> },
  },
  setup(props) {
    // computed
    const orderedJobs = computed(() => {
      const jobs = props.jobs;
      return jobs.sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });
    return {
      orderedJobs,
    };
  },
});
</script>
