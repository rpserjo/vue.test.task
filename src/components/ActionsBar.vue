<script setup>
    import CheckBox from '@/components/ui/CheckBox.vue';
    import Button from '@/components/ui/Button.vue';
    import IconDelete from '@/components/icons/IconDelete.vue';
    import Select from '@/components/ui/Select.vue';
    import { statuses } from '@/utils/status';

    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue', 'delete', 'reload', 'status']);
    const selectOptions = Object.keys(statuses).map(key => {
        return { value: key, option: statuses[key].label };
    });
    selectOptions.unshift({ value: 0, option: 'Все' });
</script>
<template>
    <div class="actions-bar">
        <div>
            <CheckBox
                :modelValue="props.modelValue"
                @update:modelValue="emit('update:modelValue', $event)"
            />
            <span>все</span>
        </div>
        <Button @click="emit('delete')">
            Удалить
            <IconDelete/>
        </Button>
        <Button @click="emit('reload')">
            Обновить
        </Button>
        <Select
            :options="selectOptions"
            @update:modelValue="emit('status', $event)"
        />
    </div>
</template>

<style lang="scss" scoped>
    .actions-bar{
        margin-top: 29px;
        display: flex;
        align-items: center;
        gap: 13px;
        
        div{
            display: flex;
            line-height: 16px;

            span{
                margin-left: 9px;
            }
        }

        @media screen and (max-width: 1000px){
            margin-top: 31px;
        }

        @media screen and (max-width: 800px){
            margin-top: 25px;
        }
    }
</style>