<script setup>
    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <input
        type="checkbox"
        :checked="props.modelValue"
        @change="emit('update:modelValue', $event.target.checked)"
    />
</template>

<style lang="scss" scoped>
    input[type='checkbox']{
        appearance: none;
        width: 16px;
        height: 16px;
        border: 1px solid #C4C4C4;
        position: relative;

        &::before{
            content: '';
            position: absolute;
            left: 4px;
            top: 0px;
            width: 6px;
            height: 9px;
            border: solid #000;
            border-width: 0 1px 1px 0;
            transform: rotate(45deg);
            display: none;
        }

        &:checked{
            background-color: #FCE66F;

            &::before{
                display: block;
            }
        }
    }
</style>