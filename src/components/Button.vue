<template>
    <div class="root" :style="{ width, height }">
        <slot name="fontAwesome"></slot>
        <span class="caption">{{ caption }}</span>
    </div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            width: {
                type: String,
                required: false,
                default: 'initial'
            },
            height: {
                type: String,
                required: false,
                default: 'initial'
            },
            caption: {
                type: String,
                required: false,
                default: ''
            }
        }
    }
</script>