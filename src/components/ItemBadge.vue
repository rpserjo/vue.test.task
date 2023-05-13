<template>
    <div class="item-badge">
        <span><slot/></span>
    </div>
</template>

<style lang="scss" scoped>
    .item-badge{
        position: absolute;
        right: 30px;
        top: 21px;
        padding: 6px 9px;

        @media screen and (max-width: 1200px){
            right: 0;
        }

        span{
            display: list-item;
            margin-left: 1em;
        }

        &.red{
            background-color: #FFE4E4;
            color: #DD4C5D;
        }

        &.lightgray{
            background-color: #EDEDED;
            color: #686868;
        }

        &.darkgray{
            background-color: #CCCCCC;
            color: #808080;
        }

        &.lightblue{
            background-color: #D6F5FF;
            color: #0291C1;
        }
    }
</style>