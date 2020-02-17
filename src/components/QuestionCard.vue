<template>
  <div
    v-if="!data.isAnswered && showCard"
    class="question-card flex justify-center p-4 mx-auto"
    @click="markAnswered"
  >
    <div
      class="max-w-md border-r w-full border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded p-4 flex flex-col justify-between leading-normal shadow"
    >
      <div class="mb-2">
        <div class="text-black font-bold text-xl mb-2">{{ data.text }}</div>
      </div>
      <div>
        <div class="text-sm text-center">
          <p class="text-black leading-none font-bold">{{ data.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    data: Object
  },
  data() {
    return {
      showCard: true
    };
  },
  methods: {
    markAnswered() {
      this.showCard = !this.showCard;
    }
  }
};
</script>
