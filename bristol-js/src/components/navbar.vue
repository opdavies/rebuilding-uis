<template>
  <div class="bg-black">
    <div class="max-w-6xl mx-auto py-6 px-4">
        <div class="flex justify-between">
          <div class="w-1/2 flex items-center">
            <a class="text-lg text-white font-black" href="#" v-text="name"></a>
          </div>

          <div class="w-1/2 flex justify-end md:hidden">
            <button class="text-white focus:text-yellow" type="button" @click="isOpen = !isOpen">
              <span class="sr-only">Toggle mobile nav</span>

              <svg
                class="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav class="hidden space-x-6 md:block">
            <a
              class="
                font-body text-xs font-bold uppercase
                hover:text-yellow
                focus:text-yellow
              "
              href="#"
              v-for="(link, i) in links"
              :class="{
                'text-white': !link.isActive,
                'text-yellow': link.isActive
              }"
              :key="i"
            >
              {{ link.text }}
            </a>
          </nav>
        </div>
    </div>

    <div :class="{ hidden: !isOpen }" class="absolute w-full bg-black md:hidden">
      <nav class="py-3 border-white border-t">
        <a
          class="
            px-4 py-3 block text-xs font-bold uppercase
            hover:text-yellow
            focus:text-yellow
          "
          href="#"
          v-for="(link, i) in links"
          :class="{
            'text-yellow': link.isActive,
            'text-white': !link.isActive
          }"
          :key="i"
        >
          {{ link.text }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  props: {
    name: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      links: [
        { text: 'Home', isActive: true },
        { text: 'Talks', isActive: false },
        { text: 'Contact', isActive: false }
      ],
      isOpen: false
    }
  }
}
</script>
