<script setup>
    import { computed, onMounted, ref, watch } from 'vue';
    import SearchBar from '@/components/SearchBar.vue';
    import ActionsBar from "@/components/ActionsBar.vue";
    import ItemCard from '@/components/ItemCard.vue';
    import { mockData } from "@/mock/mockData";

    const data = ref([]);
    onMounted(() => handleReload());

    const filter = ref('');
    const filterByStatus = ref(0);
    const filteredData = computed(() => {
       return data.value.filter(item => {
           if(filterByStatus.value > 0){
               if(item.status === filterByStatus.value){
                   return item;
               }
           }else{
               if(item.description.object.toLowerCase().includes(filter.value.toLowerCase())){
                   return item;
               }
               if(String(item.description.section).toLowerCase().includes(filter.value.toLowerCase())){
                   return item;
               }
               if(item.details.number.toLowerCase().includes(filter.value.toLowerCase())){
                   return item;
               }
           }
       });
    });

    const selectAll = ref(false);
    watch(selectAll, (value) => {
        data.value = data.value.map(item => {
           if(filteredData.value.includes(item)){
               return { ...item, selected: value };
           }
           return item;
        });
    });

    const handleDelete = () => {
        data.value = data.value.filter(item => !item.selected);
    }

    const handleReload = () => {
        data.value = mockData.map(item => {
            return {...item, selected: false};
        });
    };

    const handleFilterStatus = (e) => {
        filterByStatus.value = Number(e);
    }
</script>

<template>
    <div class="wrapper">
        <header>
            <SearchBar v-model="filter"/>
            <ActionsBar
                v-model="selectAll"
                @delete="handleDelete"
                @reload="handleReload"
                @status="handleFilterStatus"
            />
        </header>
        <main>
            <template v-if="filteredData.length > 0">
                <div class="item-cards">
                    <ItemCard v-for="(item, i) in filteredData" :key="i" :item="item"/>
                </div>
            </template>
            <template v-else>
                <div class="item-cards__not-found">
                    Ничего не найдено
                </div>
            </template>
        </main>
    </div>

</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=PT+Sans');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: PT Sans, sans-serif;
        font-size: 14px;
    }

    body{
        background-color: #F7F6F4;
    }

    .wrapper{
        max-width: 1400px;
        margin: 0 auto;
        padding: 89px 5px 71px;
    }

    .item-cards{
        margin-top: 36px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 23px 32px;

        @media screen and (max-width: 1200px){
            grid-gap: 23px;
            margin-top: 34px;
        }
        @media screen and (max-width: 800px){
            grid-template-columns: 1fr;
            grid-gap: 25px;
            margin-top: 25px;
        }

        &__not-found{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 18px;
            padding: 20px;
        }
    }
</style>
