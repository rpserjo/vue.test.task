<script setup>
    import IconSearch from '@/components/icons/IconSearch.vue';

    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="search-input">
        <div class="search-input__icon">
            <IconSearch />
        </div>
        <div class="search-input__input">
            <input
                type="text"
                :value="modelValue"
                @input="emit('update:modelValue', $event.target.value)"
                placeholder="Введите ЖК / корпус / № квартиры / № паркинга"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .search-input{
        width: 100%;
        height: 38px;
        border: 1px solid #C4C4C4;
        display: flex;
        align-items: center;

        &__icon{
            width: 101px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            stroke: #9B9B9B;
            stroke-width: 1.5;

            @media screen and (max-width: 1000px){
                width: 72px;
            }

            @media screen and (max-width: 800px){
                width: 36px;
            }
        }

        &__input{
            flex-grow: 1;

            input[type='text']{
                width: 100%;
                border: none;
                background-color: transparent;
                outline: none;
                height: 38px;
            }
        }
    }
</style>