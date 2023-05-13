<script setup>
    import { computed, toRefs } from 'vue';
    import ItemBadge from '@/components/ItemBadge.vue';
    import IconLocation from '@/components/icons/IconLocation.vue';
    import ItemLabel from '@/components/ItemLabel.vue';
    import CheckBox from '@/components/ui/CheckBox.vue';
    import { status } from '@/utils/status';

    const props = defineProps(['item']);
    const { item } = toRefs(props);
    const itemStatus = computed(() => status(item.value.status));
</script>
<template>
    <div class="item-card">
        <div class="item-card__checkbox">
            <CheckBox v-model="item.selected"/>
        </div>
        <div class="item-card__primary">
            <ItemBadge :class="itemStatus.class"> {{ itemStatus.label }} </ItemBadge>
            <div class="item-card__header">
                <h3> {{ (item.price).toLocaleString('ru') }} руб.</h3>
                <ItemLabel
                    v-if="item.type"
                    :icon="item.type.icon"
                    :tooltip="item.type.tooltip"
                >
                    {{ item.type.label }}
                </ItemLabel>
            </div>
            <div class="item-card__description">
                {{ item.description.object }} <span>корпус {{ item.description.section}}, {{ item.description.release }}</span>
            </div>
            <div class="item-card__details">
                <div>
                    <span>{{ item.details.number }}</span>
                    <span>{{ item.details.rooms }}</span>
                </div>
                <div>
                    <span>{{ item.details.square }} м<sup>2</sup></span>
                    <span>{{ (item.details.floor) ? `${item.details.floor} этаж` : '' }}</span>
                </div>
            </div>
            <div class="item-card__location">
                <div class="icon">
                    <IconLocation/>
                </div>
                <div class="location">
                    {{ item.location }}
                </div>
            </div>
            <div class="item-card__image">
                <img :src="item.image" />
                <div class="item-card__added">
                    Добавлено {{ item.added }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .item-card {
        height: 238px;
        width: 100%;
        min-width: 530px;
        background-color: #ffffff;
        border: 1px solid #E5E5E5;
        padding: 25px 35px;
        display: flex;
        position: relative;

        &__checkbox {
            width: 16px;
            justify-content: center;
            align-items: center;
            display: flex;
        }

        &__primary {
            display: grid;
            margin-left: 25px;
            grid-template-areas:
                'header header'
                'description image'
                'details image'
                'location image'
            ;
            width: 100%;
            grid-template-columns: 1fr 180px;
            grid-template-rows: 26px auto 1fr auto;
            grid-column-gap: 22px;

            @media screen and (max-width: 1000px){
                grid-template-columns: 1fr 132px;
            }
        }

        &__header{
            grid-area: header;
            display: flex;
            height: 30px;
            align-items: center;
            position: relative;
            padding: 3px 0;

            h3{
                color: #FF0D29;
                line-height: 20px;
                font-size: 15px;
                font-weight: 700;
                margin-right: 16px;
                padding-right: 50px;

                @media screen and (max-width: 1000px){
                    padding-right: 0;
                }
            }
        }

        &__description{
            grid-area: description;
            line-height: 150%;

            span{
                color: #808080;

                sup{
                    font-size: 8px !important;
                }
            }
        }

        &__details{
            grid-area: details;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: min-content;
            margin-top: 14px;

            div{
                display: grid;

                span{
                    line-height: 25px;
                }
            }

            div:last-of-type{
                border-left: 1px solid #C4C4C4;
                padding-left: 28px;
            }
        }

        &__location{
            grid-area: location;
            margin-left: -25px;
            display: grid;
            grid-template-columns: 25px 1fr;

            .icon{
                justify-content: center;
                display: flex;
                padding: 3px;

                svg{
                    fill: #9B9B9B;
                }
            }

            .location{
                line-height: 150%;
            }
        }

        &__image{
            grid-area: image;
            display: flex;
            flex-direction: column;
            align-self: end;
            justify-self: end;

            img{
                width: 100%;
                margin-bottom: 17px;
            }
        }

        &__added{
            display: grid;
            align-self: end;
            justify-self: end;
            font-size: 13px;
            color: #9B9B9B;
            line-height: 20px;
        }

    }
</style>