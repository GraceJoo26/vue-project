<template>
    <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"/>
    <!-- emit 이란? 상위이벤트->하위이벤트로 이벤트 전달때 사용함-->
</template>
<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue']
}
</script>