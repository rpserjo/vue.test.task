<script setup>
    import { onMounted, ref } from 'vue';

    const props = defineProps(['options']);
    const emit = defineEmits(['update:modelValue']);
    const showOptions = ref(false);
    const selectedOption = ref({});
    onMounted(() => selectedOption.value = props.options[0]);

    const handleClick = (option) => {
        emit('update:modelValue', option.value);
        selectedOption.value = option;
    }
</script>

<template>
    <div class="select" :class="{active: showOptions}" @click="showOptions = !showOptions">
        {{ selectedOption.option }}
        <div class="options" v-show="showOptions">
            <div
                class="option"
                v-for="(option) in props.options"
                :key="option.value"
                :data-value="option.value"
                @click="handleClick(option)"
            >
                {{ option.option }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .select{
        height: 36px;
        border: none;
        background-color: #E5E5E5;
        padding: 9px 13px;
        position: relative;
        cursor: pointer;
        width: 250px;
        user-select: none;

        &::after{
            content: '';
            position: absolute;
            right: 13px;
            top: 9px;
            width: 9px;
            height: 9px;
            border: solid #000;
            border-width: 0 1px 1px 0;
            transform: rotate(45deg);
        }

        &.active{

            &::after{
                top: 15px;
                transform: rotate(225deg);
            }
        }

        .options{
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 10;
            background-color: #E5E5E5;

            .option{
                height: 36px;
                padding: 9px 13px;
                white-space: nowrap;

                &:hover{
                    background-color: #D5D5D5;
                }
            }
        }
    }

    option{
        height: 36px;
    }
</style>