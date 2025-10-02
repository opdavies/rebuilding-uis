<template>
  <div>
    <a href="#">
      <img
        :src="sponsor.logo"
        :alt="`${sponsor.name} logo`"
        style="max-height: 100px; max-width: 80%"
      />

      <span v-text="sponsor.name" class="sr-only"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Sponsor',

  props: {
    sponsor: {
      type: Object,
      required: true
    }
  }
}
</script>