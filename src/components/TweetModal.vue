<template>
  <div @click="$emit('close-modal')" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <!-- contents -->
      <div @click.stop class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="border-b border-gray-100 p-2">
          <button class="fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50 rounded-full"></button>
        </div>
        <div class="flex p-4">
          <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" alt="">
          <div class="flex-1 flex flex-col ml-2">
            <textarea @keyup.enter="onAddTweet" rows="5" v-model="tweetBody" placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
            <div class="text-right">
              <button v-if="!tweetBody.length" class="bg-light text-white px-4 py-1 text-sm rounded-full font-bold">트윗</button>
              <button v-else @click="onAddTweet" class="bg-primary text-white px-4 py-1 text-sm rounded-full font-bold hover:bg-dark">트윗</button>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const tweetBody = ref('')

    return {
      tweetBody
    }
  }
}
</script>

<style>

</style>