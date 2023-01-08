<template>
    <MouseTracker v-slot="{x,y}">
    마우스는 지금: {{ x }},{{ y }} 에 있습니다.
    </MouseTracker>
</template>
<script>
import MouseTracker from './MouseTracker.vue'

export default{
    components:{
        MouseTracker
    }
}
</script>