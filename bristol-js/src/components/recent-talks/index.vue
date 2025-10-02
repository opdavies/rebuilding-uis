<template>
  <section class="py-4">
    <div class="mx-auto px-4">
      <h2 class="text-2xl font-bold uppercase text-center">Recent Talks</h2>

      <div class="mt-2 grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <recent-talk v-for="(talk, i) in talks" :key="i" :talk="talk"/>
      </div>
    </div>
  </section>
</template>

<script>
import RecentTalk from '@/components/recent-talks/recent-talk'
import { getTalks } from '@/services/talk-service'

export default {
  name: 'RecentTalks',

  components: {
    RecentTalk
  },

  data() {
    return {
      talks: []
    }
  },

  created() {
    this.talks = getTalks()
  }
}
</script>
