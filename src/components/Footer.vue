<template>
  
  <footer class="border-t border-red-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-900 sm:text-center">© 2025 <a href="/" class="text-red-600 font-bold">Anisaki Street Food™</a>. All Rights Reserved.</span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900">
        <li>
          <router-link to="/about" class="me-4 md:me-6">About</router-link>
        </li>
        <li>
          <router-link href="/home" class="me-4 md:me-6">Privacy Policy</router-link>
        </li>
        <li>
          <router-link href="/home" class="me-4 md:me-6">Licensing</router-link>
        </li>
        <li>
          <router-link to="/contact" class="">Contact</router-link>
        </li>
      </ul>
    </div>
  </footer>
   
</template>

<style scoped>
  .router-link-active {
  }
</style>