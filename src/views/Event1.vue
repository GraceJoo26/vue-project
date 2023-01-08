<template>
    <button @click="counter++">누르면1추가</button>
    <p>이 버튼은 {{ counter }}회 눌렸습니다.</p>
</template>
<script>
    export default{
        data() {
            return{
                counter:0
            }
        }
    }
</script>