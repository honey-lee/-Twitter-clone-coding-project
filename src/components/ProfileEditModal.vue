<template>
  <div @click="$emit('close-modal')" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex justify-center min-h-screen sm:pt-6 sm:px-4 sm:pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <!-- contents -->
      <div @click.stop class="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
        <div class="border-b border-gray-100 p-2 flex items-center justify-between">
          <div class="flex items-center">
            <button @click="$emit('close-modal')" class="flex items-center justify-center fas fa-times text-primary text-lg p-2 h-10 w-10 hover:bg-blue-50 rounded-full"></button>
            <span class="font-bold text-lg">프로필 수정</span>
          </div>
          <div class="text-right mr-2">
            <button @click="onSaveProfile" class="hover:bg-dark bg-primary text-white font-bold px-3 py-1 rounded-full">저장</button>
          </div>
        </div>
        <!-- image section -->
        <div class="h-60">
          <!-- background image -->
          <div class="bg-gray-300 h-40 relative flex-none flex items-center justify-center">
            <img ref="backgroundImage" :src="currentUser.background_image_url" class="object-cover absolute h-full w-full" alt="">
            <button @click="onChangeBackgroundImage" class="absolute h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg"></button>
            <input @change="previewBackgroundImage" type="file" accept="image/*" id="backgroundImageInput" class="hidden">
          
            <!-- profile image -->
            <img ref="profileImage" :src="currentUser.profile_image_url" alt="" class="border-4 border-white w-28 h-28 absolute -bottom-14 left-2 rounded-full" />
            <button @click="onChangeProfileImage" class="absolute h-10 w-10 hover:text-gray-200 rounded-full fas fa-camera text-white text-lg -bottom-5 left-11"></button>
            <input @change="previewprofileImage" type="file" accept="image/*" id="profileImageInput" class="hidden">
          </div>
        </div>
        
        <!--  -->
        <div class="flex flex-col p-2">
          <div class="text-gray mx-2 my-1 px-2 py-1 border border-gray-200 rounded hover:border-primary hover:text-primary">
            <div class="text-sm">이름</div>
            <input type="text" :value="currentUser.email" class="text-black focus:outline-none">
          </div>
          <div class="text-gray mx-2 my-1 px-2 py-5 border border-gray-200 rounded hover:border-primary hover:text-primary">
            <input type="text" class="text-black focus:outline-none" placeholder="자기소개">
          </div>
          <div class="text-gray mx-2 my-1 px-2 py-5 border border-gray-200 rounded hover:border-primary hover:text-primary">
            <input type="text" class="text-black focus:outline-none" placeholder="위치">
          </div>
          <div class="text-gray mx-2 my-1 px-2 py-3 border border-gray-200 rounded hover:border-primary hover:text-primary">
            <input type="text" class="text-black focus:outline-none" placeholder="웹사이트">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ref, computed } from 'vue'
import addTweet from '../utils/addTweet'
import store from '../store'
import {storage, USER_COLLECTION} from '../firebase'
export default {
  setup(props, { emit }) {
    const tweetBody = ref('')
    const currentUser = computed(() => store.state.user)
    
    const profileImage = ref(null)
    const profileImageData = ref(null) 
    const backgroundImage = ref(null)
    const backgroundImageData = ref(null)

    const onAddTweet = async() => {
      try {
        await addTweet(tweetBody.value, currentUser.value)
        tweetBody.value = ''
        emit('close-modal')
        } catch (e) {
        console.log('on add tweet error on homepage:', e)
      }
    }

    const onChangeBackgroundImage = () => {
      document.getElementById('backgroundImageInput').click()
    }

    const onChangeProfileImage = () => {
      document.getElementById('profileImageInput').click()
    }

    const previewBackgroundImage = (event) => {
      const file = event.target.files[0]
      backgroundImageData.value = file
      let reader = new FileReader()
      reader.onload = function (event) {
        backgroundImage.value.src = event.target.result
      }
      reader.readAsDataURL(file)
    }

    const previewprofileImage = (event) => {
      const file = event.target.files[0]
      profileImageData.value = file
      let reader = new FileReader()
      reader.onload = function (event) {
        profileImage.value.src = event.target.result
      }
      reader.readAsDataURL(file)
    }
    
    const onSaveProfile = async() => {
      if (!profileImageData.value && !backgroundImageData.value) {
        return
      }

      if (profileImageData.value) {
        try {
          const uploadTask = await storage.ref(`profile/${currentUser.value.uid}/profile`).put(profileImageData.value)
          const url = await uploadTask.ref.getDownloadURL();
          await USER_COLLECTION.doc(currentUser.value.uid).update({
            profile_image_url: url
          })
          store.commit("SET_PROFILE_IMAGE", url)
        } catch (e) {
          console.log(`profile image data error:${e}`)
        }
      }
      
      if (backgroundImageData.value) {
        try {
          const uploadTask = await storage.ref(`profile/${currentUser.value.uid}/background`).put(backgroundImageData.value)
          const url = await uploadTask.ref.getDownloadURL();
          await USER_COLLECTION.doc(currentUser.value.uid).update({
            background_image_url: url
          })
          store.commit("SET_BACKGROUND_IMAGE", url)
        } catch (e) {
          console.log(`background image data error:${e}`)
        }
      }
      emit('close-modal')
    }

    return {
      tweetBody,
      onAddTweet,
      currentUser,
      onChangeBackgroundImage,
      onChangeProfileImage,
      previewBackgroundImage,
      previewprofileImage,
      backgroundImage,
      backgroundImageData,
      profileImage,
      profileImageData,
      onSaveProfile
    }
  }
}
</script>

<style>

</style>