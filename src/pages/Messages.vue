<template>
  <div class="flex-1 flex">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-scroll">
      <div class="flex flex-col">
        <div class="p-3 font-bold text-lg border-b border-gray-100 h-14">쪽지</div>
        <!-- a chat list -->
        <div v-for="message in 20"
          :key="message"
          class="flex px-3 py-4 hover:bg-gray-200 border-b border-gray-100">
          <img src="http://picsum.photos/200" class="w-10 h-10 rounded-full cursor-pointer mr-2" alt="">
          <div class="flex space-x-1">
            <div class="font-bold">honeylee.com</div>
            <div class="text-gray-500">@honeylee999</div>
            <div class="text-gray-500">8월 9일</div>
          </div>
        </div>
      </div>
    </div>
    <!-- chatting -->
    <div class="w-3/5 border-r border-gray-100">
      <div class="flex flex-col h-screen">
        <!-- title -->
        <div class="flex px-3 h-14 border-b items-center border-gray-100">
          <img src="http://picsum.photos/100" class="w-8 h-8 rounded-full mr-2 cursor-pointer" alt="">
          <div>
            <div class="font-bold text-lg">honeylee.com</div>
            <div class="text-sm text-gray-500">@honey</div>
          </div>
        </div>
        <!-- user info -->
        <div class="flex flex-col justify-center items-center border-b border-gray-100 hover:bg-gray-50 py-6">
          <div>
            <span class="font-bold mr-1">honeylee.com</span>
            <span class="text-gray-500">@honey</span>
          </div>
          <div>
            <span class="font-bold mr-1">291321831813</span><span class="text-gray-500">팔로우 중</span>
            <span class="font-bold ml-3 mr-1">18328472138123</span><span class="text-gray-500">팔로워</span>
          </div>
          <div>
            <span class="text-gray-500 mr-1">가입일:</span><span class="text-gray-500">2021년 1월</span>
          </div>
        </div>
        <div class="flex-1 overflow-y-scroll">
        <!-- chat bubble : my chat-->
        <div class="text-right px-3 py-3">
          <span class="bg-primary text-white px-4 py-2 rounded-full">메시지</span>
          <div class="text-xs text-gray-500 mt-2">2021년 8월 9일 오후 11:06</div>
        </div>
        <!-- chat bubble : opponent chat -->
        <div class="text-left px-3 py-3" v-for="chat in 10" :key="chat">
          <span class="bg-gray-100  px-4 py-2 rounded-full">🧡💙</span>
          <div class="text-xs text-gray-500 mt-2">2021년 8월 9일 오후 11:06</div>
        </div>
        </div>
        <!-- chat input -->
        <div class="flex items-center bg-white border-t border-gray-100 sticky">
          <input type="text" class="m-2 py-1 px-4 rounded-full bg-gray-100 resize-none outline-none flex-1" placeholder="새 쪽지 작성하기">
          <button class="text-center"><i class="far fa-paper-plane text-primary text-lg hover:bg-lighter p-2 rounded-full w-10 h-10"></i></button>
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