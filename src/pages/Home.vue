<template>
  <div class="flex-1 border-r border-gray-100 overflow-y-auto">
  <div class="flex flex-col">
    <!-- page title -->
    <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">홈</div>
    <!-- tweeting section -->
    <div class="flex px-3 py-2 border-b-8 border-gray-100">
      <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" alt="">
      <div class="flex-1 flex flex-col">
        <textarea placeholder="무슨 일이 일어나고 있나요?" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
        <div class="text-right">
          <button class="bg-primary text-white px-4 py-1 text-sm rounded-full font-bold hover:bg-dark">트윗</button>
        </div>
      </div>
    </div>
    <!-- tweets -->
    <div class="flex px-3 py-3 border-b border-gray-100"
      v-for="tweet in 10" :key="tweet">
      <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer ml-3 mr-2" alt="">
      <div class="flex-1 flex flex-col space-y-1">
        <div class="text-sm space-x-1">
          <span class="text-bold">쏘세지 강아지</span>
          <span class="text-gray-500 text-xs">@ramy</span>
          <span>.</span>
          <span class="text-gray-500 text-xs">7분</span>
        </div>
        <!-- tweet body -->
        <div>
          내뿌가 없으면 슬퍼요. 매일매일 허리가 쑥쑥 길어지고 있는 아기 강아지예요!
        </div>
        <!-- tweet actions -->
        <div class="flex justify-between">
          <div class="text-gray-500 hover:text-primary">
            <i class="far fa-comment rounded-full p-2"></i>
            <span class="ml-1 text-sm">10</span>
          </div>
          <div class="text-gray-500 hover:text-green-500">
            <i class="fas fa-retweet "></i>
            <span class="ml-1 text-sm">20</span>
          </div>
          <div class="text-gray-500 hover:text-red-500">
            <i class="far fa-heart "></i>
            <span class="ml-1 text-sm">500</span>
          </div>
          <div class="text-gray-500 hover:text-primary">
            <i class="far fa-share-square"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- trend section -->
<Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
export default {
  components: { Trends },

}
</script>

<style>

</style>