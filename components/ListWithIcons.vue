<template>
  <div class="flex gap-4 flex-wrap justify-center">
    <div v-for="item in items" :key="item.icon" class="flex gap-2 items-center w-40 h-28 justify-end flex-col" >
      <div class="">
        <Icon :name="item.icon" size="32" />  
      </div>
      <div class="text-sm text-center h-12 w-full pt-1" v-html="item.title"></div>
    </div>
  </div>
</template>

<script setup>
defineProps(['items'])
</script>