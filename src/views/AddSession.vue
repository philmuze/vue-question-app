<template>
  <div class="container p-8 bg-white rounded mx-auto mt-4 max-w-md">
    <h1 class="text-3xl leading-normal mb-8 font-bold">
      Starte eine neue Live-Session
    </h1>
    <form class="w-full max-w-md">
      <div class="-mx-3 mb-6">
        <div class="w-full px-3 mb-6">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
            for="grid-last-name"
            >Name der Session</label
          >
          <input
            class="appearance-none block w-full bg-grey-200 text-grey-darker border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Veranstaltungsname"
          />
        </div>
      </div>
      <button
        class="bg-green-500 w-full text-md hover:bg-green-dark-700 text-white font-semibold py-3 px-12 border border-green rounded shadow"
        type="submit"
      >
        Neue Session beginnen
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSession"
};
</script>

<style scoped></style>
