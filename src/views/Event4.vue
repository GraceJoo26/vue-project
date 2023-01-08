<template>
   <CustomInput v-model="message" placeholder="입력해보세요."/>
   {{ message }}
</template>
<script>
import CustomInput from './CustomInput.vue'
export default{
    components: { CustomInput },
    data() {
        return {
            message:'주유진'
        }
    }
}
</script>