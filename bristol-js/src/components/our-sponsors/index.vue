<template>
  <section>
    <h2 class="text-2xl font-bold uppercase text-center">Our sponsors</h2>

    <div class="mt-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="(sponsor, i) in sponsors" :key="i">
            <sponsor :sponsor="sponsor"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sponsor from '@/components/our-sponsors/sponsor'
import { getSponsors } from '@/services/sponsor-service'

export default {
  name: 'OurSponsors',

  components: {
    Sponsor
  },

  data() {
    return {
      sponsors: []
    }
  },

  created() {
    this.sponsors = getSponsors()
  }
}
</script>
