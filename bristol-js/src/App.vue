<template>
  <div id="app" class="font-display text-black">
    <navbar :name="title" />

    <div class="h-48 flex items-center justify-center bg-yellow">
      <div class="p-4 text-center">
        <h1 class="text-4xl leading-none font-bold">{{ title }}</h1>
        <p class="mt-6 text-sm">{{ description }}</p>
      </div>
    </div>

    <main>
      <recent-talks/>

      <div class="max-w-6xl px-3 mx-auto">
        <div class="mt-12 mb-20 grid gap-8 md:grid-cols-3">
          <div
            class="flex flex-col-reverse space-y-6 space-y-reverse"
            style="justify-content: start"
          >
            <div class="space-y-2">
              <h2 class="text-lg font-bold text-center">About</h2>

              <p class="font-body text-center text-sm leading-relaxed">Since May 2012 we've held monthly JavaScript talks. Today the group is over 800 members strong and has a great friendly community that we've been proud to see grow.</p>
            </div>

            <div>
              <svg class="mx-auto h-16 w-16 fill-current text-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"/></svg>
            </div>
          </div>

          <div
            class="flex flex-col-reverse space-y-6 space-y-reverse"
            style="justify-content: start"
          >
            <div class="space-y-2">
              <h2 class="text-lg font-bold text-center">Format</h2>

              <p class="font-body text-center text-sm leading-relaxed">Talk nights are usually held on the last Wednesday of every month. They usual consist of two main talks and occasionally lightning talks that can be on any topic.</p>
            </div>

            <div>
              <svg class="mx-auto h-16 w-16 fill-current text-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M347.94 129.86L203.6 195.83a31.938 31.938 0 00-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0015.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"/></svg>
            </div>
          </div>

          <div
            class="flex flex-col-reverse space-y-6 space-y-reverse"
            style="justify-content: start"
          >
            <div class="space-y-2">
              <h2 class="text-lg font-bold text-center">Fancy speaking?</h2>

              <p class="font-body text-center text-sm leading-relaxed">Bristol JS is only as strong as it's speakers so we're always on the lookout for great talks. Drop us an <a href="#0">e-mail</a> with an outline of your talk as well as your availability, if it's right for us we'll get you booked in.</p>
            </div>

            <div>
              <svg class="mx-auto h-16 w-16 fill-current text-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0019.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto pt-12 pb-24">
        <div class="grid gap-6 md:grid-cols-2">
          <frequently-asked/>
        </div>
      </div>
    </main>

    <aside class="py-24 px-4 bg-gray-50">
      <our-sponsors/>
    </aside>

    <footer class="py-20 bg-black">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <section>
            <h2 class="pb-2 text-xl font-bold border-b-2 text-white">Links</h2>

            <div class="mt-6 space-x-1">
              <a href="#" class="btn btn-blue">Meetup</a>
              <a href="#" class="btn btn-blue">Twitter</a>
              <a href="#" class="btn btn-blue">YouTube</a>
            </div>
          </section>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import FrequentlyAsked from '@/components/frequently-asked'
import Navbar from '@/components/navbar'
import OurSponsors from '@/components/our-sponsors'
import RecentTalks from '@/components/recent-talks'

export default {
  name: 'App',

  components: {
    FrequentlyAsked,
    Navbar,
    OurSponsors,
    RecentTalks
  },

  data() {
    return {
      title: 'Bristol JS',
      description: 'We host monthly JavaScript meetings in the beautiful city of Bristol, UK.'
    }
  }
}
</script>

<style src="@/assets/css/tailwind.css"/>
