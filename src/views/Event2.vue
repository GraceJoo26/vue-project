<template>
  <button @click="greet">인사해봐</button>
</template>
<script>
  export default{
    data() {
        return{
            name:'유진쓰'
        }
    },
    methods:{
        greet(event) {
            //'this' inside method points to the current active instance
            alert(`Hello ${this.name}!`)
            //`event` is the native DOM event
            if(event) {
                alert(event.target.tagName)
            }
        }
    }
  }
</script>