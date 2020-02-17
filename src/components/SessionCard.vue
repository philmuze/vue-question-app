<template>
  <router-link :to="`/session/${eventData.slug}`" class="no-underline">
    <div class="px-4 py-2">
      <div
        class="border border-grey-light bg-white rounded p-4 leading-normal shadow hover:translateY-2px transition overflow-hidden"
      >
        <div class="text-black font-bold text-xl mb-2">
          {{ eventData.title }}
        </div>
        <div class="flex items-center justify-center">
          <div :class="[eventData.isLive ? 'green dot' : 'red dot']"></div>
          <p class="text-grey-darker text-base">{{ eventData.timeSlot }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SessionCard",
  props: {
    eventData: Object
  }
};
</script>

<style lang="scss" scoped>
.dot {
  border-radius: 50%;
  height: 8px;
  width: 8px;
  margin: 0 8px;
  &.green {
    background-color: #38c172;
  }
  &.red {
    background-color: #e3342f;
  }
}
</style>
