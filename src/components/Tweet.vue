<template>
  <!-- tweets -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
      <router-link :to="`/profile/${tweet.uid}`">
        <img :src="currentUser.profile_image_url" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer ml-3 mr-2" alt="">
      </router-link>
      <div class="flex-1 flex flex-col space-y-1">
        <div class="text-sm space-x-1">
          <span class="text-bold">{{ tweet.email }}</span>
          <span class="text-gray-500 text-xs">@{{ tweet.username }}</span>
          <span>.</span>
          <span class="text-gray-500 text-xs">{{ moment(tweet.created_at).fromNow() }}</span>
        </div>
        <!-- tweet body -->
        <router-link :to="`/tweet/${tweet.id}`">
          {{ tweet.tweet_body }}
        </router-link>
        <!-- tweet actions -->
        <div class="flex justify-between">
          <!-- comment button -->
          <div @click="showCommentmodal = true" class="text-gray-400 hover:text-primary">
            <i class="far fa-comment rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_comments }}</span>
          </div>
          <!-- retweet button -->
          <div v-if="!tweet.isRetweeted" @click="handleRetweet(tweet)" class="text-gray-500 hover:text-green-400">
            <i class="fas fa-retweet rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
          </div>
          <div v-else @click="handleRetweet(tweet)" class="text-green-400">
            <i class="fas fa-retweet rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_retweets }}</span>
          </div>
          <!-- like button -->
          <div v-if="!tweet.isLiked" class="text-gray-400 hover:text-red-400" @click="handleLikes(tweet)">
            <i class="far fa-heart rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
          </div>
          <div v-else class="text-red-400" @click="handleLikes(tweet)">
            <i class="far fa-heart rounded-full p-2"></i>
            <span class="ml-1 text-sm">{{ tweet.num_likes }}</span>
          </div>
          <!-- share button -->
          <div class="text-gray-400 hover:text-primary">
            <i class="far fa-share-square rounded-full p-2"></i>
          </div>
        </div>
      </div>
    </div>
    <comment-modal :tweet="tweet" v-if="showCommentmodal" @close-modal="showCommentmodal = false"></comment-modal>
</template>

<script>
import moment from 'moment'
import { ref, computed } from 'vue'
import CommentModal from './CommentModal.vue'
import handleRetweet from '../utils/handleRetweet'
import handleLikes from '../utils/handleLikes'
import store from '../store'

export default {
  components: { CommentModal },
  props: ['currentUser', 'tweet'],
  
  setup() {
    const showCommentmodal = ref(false)
    const currentUser = computed(() => store.state.user)
    return {
      moment,
      showCommentmodal,
      handleRetweet,
      handleLikes,
      currentUser
    }
  }
}

</script>

<style>

</style>