<template>
  <div class="flex flex-col flex-col-reverse justify-end space-y-5 space-y-reverse">
    <div class="py-2 text-lg font-bold border-t-2 border-b-2">
      {{ talk.title }}
    </div>

    <div class="block relative h-0 overflow-hidden aspect-ratio-16/9">
      <iframe
        class="absolute w-full h-full inset-0 border-0"
        :src="`https://www.youtube.com/embed/${talk.videoId}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentTalk',

  props: {
    talk: {
      type: Object,
      required: true
    }
  }
}
</script>
