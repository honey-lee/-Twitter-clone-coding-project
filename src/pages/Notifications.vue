<template>
  <!-- notifications -->
  <div class="flex-1 border-r border-gray-100 flex flex-col overflow-y-auto">
    <!-- title -->
    <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
    <!-- notifications -->
    <div v-for="notification in 10" 
      :key="notification"
      class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer">
      <div class="flex flex-row justify-between">
        <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80" alt="">
        <i class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center"></i>
      </div>
      <div>
        <span class="font-bold">이화정</span>
        님의 최근 트윗</div>
      <div class="text-gray-500">
        Vue 공부는 어렵지만 트위터를 만들어 보면서 조금씩 하니까 재밌어요! 
        조금씩 하다보면 언젠간 마스터할수있겠지!!
      </div>
    </div>
  </div>
  <!-- trends -->
  <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'
import { computed } from 'vue'
import store from '../store'
export default {
  components: { Trends },
  setup() {
    const currentUser = computed(() => store.state.user)
    return {
      currentUser
    }
  }

}
</script>

<style>

</style>