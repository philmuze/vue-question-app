<template>
  <div class="container lg:max-w-screen-lg mx-auto px-6 py-2">
    <h1 class="text-base font-display font-bold tracking-wide uppercase py-2">
      Live Sessions
    </h1>
    <template v-if="loading > 0">
      <div class>
        <div>Loading...</div>
      </div>
    </template>
    <ul class="list-reset">
      <li v-for="event in events" :key="event.id">
        <SessionCard :eventData="event" />
      </li>
    </ul>
  </div>
</template>

<script>
import SessionCard from "@/components/SessionCard";

export default {
  name: "PageSessions",
  components: {
    SessionCard
  },
  data: () => ({
    events: [
      {
        title: "Vue Workshop Berlin",
        timeSlot: "13. Mai um 09:00",
        slug: "vue-workshop-berlin",
        isLive: true
      },
      {
        title: "Vue Workshop Böblingen",
        timeSlot: "04. März um 09:00",
        slug: "vue-workshop-boeblingen",
        isLive: false
      },
      {
        title: "Vue Workshop Leipzig",
        timeSlot: "02. Februar um 09:00",
        slug: "vue-workshop-leipzig",
        isLive: false
      }
    ],
    loading: 0
  })
};
</script>
