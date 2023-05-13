<template>
    <button class="button">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
    .button{
        height: 38px;
        background-color: #E5E5E5;
        border: none;
        padding: 9px 13px;
        align-items: center;
        display: flex;
        cursor: pointer;
    }
</style>