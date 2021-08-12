<template>
  <!-- tweets -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
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
          내뿌가 없으면 슬퍼요😂. 매일매일 허리가 쑥쑥 길어지고 있는 아기 강아지예요!🐶 <br>
          맛있는거 좋아해요! 팝콘도 잘먹어요! 제일 좋아하는건 내뿌예요!💛
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
</template>

<script>
export default {

}
</script>

<style>

</style>