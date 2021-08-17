<template>
  <div class="flex flex-col items-center space-y-4 mt-10">
    <i :class="`fab fa-twitter text-4xl text-primary ${loading ? 'animate-bounce' : ''}`"></i>
    <span class="text-2xl font-bold">뜨위떠 로그인</span>
    <input v-model="email" type="text" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="이메일">
    <input v-model="password" type="password" class="rounded w-96 px-4 py-3 border border-gray-300 focus:ring-2 focus:border-primary focus:outline-none" placeholder="비밀번호">
    <button v-if="loading" class="w-96 rounded bg-light text-white px-4 py-3">로그인 중입니다.</button>
    <button v-else @keyup.enter="onLogin" @click="onLogin" class="w-96 rounded bg-primary text-white px-4 py-3 hover:bg-dark">로그인</button>
    <router-link to="/register">
      <button class="text-primary">계정이 없으신가요? 회원가입하기</button>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const loading = ref(false)
    const router = useRouter()

    const onLogin = () => {
      try {
        loading.value = true
        const { user } = await auth.signInWithEmailAndPassword(email.value, password.value)
        console.log(user.uid)
        router.replace("/")
      } catch (e) {
        alert(e.message)
      } finally {
        loading.value = false
      }
    }

    return {
      email, password, onLogin, loading
    }
  }

}
</script>

<style>

</style>