<template>
  <!-- tweets -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
      <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer ml-3 mr-2" alt="">
      <div class="flex-1 flex flex-col space-y-1">
        <div class="text-sm space-x-1">
          <span class="text-bold">{{ tweet.email }}</span>
          <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
          <span>.</span>
          <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
        </div>
        <!-- tweet body -->
        <div>
          {{ tweet.tweet_body }}
        </div>
        <!-- tweet actions -->
        <div class="flex justify-between">
          <!-- comment button -->
          <div @click="showCommentmodal = true" class="text-gray-500 hover:text-primary">
            <i class="far fa-comment rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
          </div>
          <!-- retweet button -->
          <div @click="handleRetweet(tweet)" class="text-gray-500 hover:text-green-500">
            <i class="fas fa-retweet rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
          </div>
          <!-- like button -->
          <div class="text-gray-500 hover:text-red-500">
            <i class="far fa-heart rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
          </div>
          <!-- share button -->
          <div class="text-gray-500 hover:text-primary">
            <i class="far fa-share-square rounded-full p-2"></i>
          </div>
        </div>
      </div>
    </div>
    <comment-modal :tweet="tweet" v-if="showCommentmodal" @close-modal="showCommentmodal = false"></comment-modal>
</template>

<script>
import moment from 'moment'
import { ref } from 'vue'
import CommentModal from './CommentModal.vue'
import handleRetweet from '../utils/handleRetweet'

export default {
  components: { CommentModal },
  props: ['currentUser', 'tweet'],
  setup() {
    const showCommentmodal = ref(false)
    return {
      moment,
      showCommentmodal,
      handleRetweet
    }
  }
}

</script>

<style>

</style>