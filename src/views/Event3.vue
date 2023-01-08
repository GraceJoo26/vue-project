<template>
    <button @click="say('안녕')">안녕</button>
    <button @click="say('뭐시라')">뭐시라</button>
</template>
<script>
  export default{
    methods: {
        say(message) {
            alert(message)
        }
    }
  }
</script>