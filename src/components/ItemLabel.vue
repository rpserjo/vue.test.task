<script setup>
    import IconFlat from '@/components/icons/IconFlat.vue';
    import IconParking from '@/components/icons/IconParking.vue';

    const props = defineProps(['tooltip', 'icon']);
    const icons = {
        'flat': IconFlat,
        'parking': IconParking
    }
    const icon = icons[props.icon];
</script>
<template>
    <div class="item-label">
        <icon />
        <span class="item-label__type">
            <slot />
        </span>
        <span class="item-label__tooltip" v-if="props.tooltip">
            {{ props.tooltip }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
    .item-label{
        position: relative;
        height: 26px;
        padding: 5px 16px;
        border-radius: 13px;
        line-height: 16px;
        font-size: 12px;
        width: fit-content;
        box-shadow: 0 0 2px 0 rgba(94, 119, 157, 0.25);
        cursor: pointer;
        display: flex;
        align-items: center;

        &__type{
            margin-left: 12px;

            @media screen and (max-width: 1000px) {
                margin-left: 8px;
            }
        }

        &__tooltip{
            visibility: hidden;
            position: absolute;
            z-index: 1;
            top: 135%;
            left: 50%;
            margin-left: -15px;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 12px 19px;
            line-height: 150%;
            font-size: 13px;
            color: #fff;
            white-space: nowrap;

            &::before{
                content: "";
                position: absolute;
                bottom: 100%;
                left: 8px;
                border-width: 7px;
                border-style: solid;
                border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
            }
        }

        &:hover{
            span {
                visibility: visible;
            }
        }
    }
</style>