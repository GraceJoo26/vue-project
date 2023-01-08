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
//1. native input에서 modelValue porperty로 연동시켜야함
//2. native input 이벤트가 생기면 update:modelValue 커스텀 이벤트를 새로운 value에 emit(연동)해야함
</script>