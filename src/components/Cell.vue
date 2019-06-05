<template>
    <div class="mt-3">
        <div class="cell">
            <input type="checkbox" v-model="item.isChecked">
            <input type="text" v-model="item.text">
            <button type="button" @click="emitDeleteEvent">削除</button>
            <button type="button" @click="emitCopyEvent">コピー</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["item"],
    methods: {
        emitDeleteEvent: function() {
            this.$emit('delete-btn-clicked', this.item.id);
        },
        emitCopyEvent: function() {
            this.$emit('copy-btn-clicked', this.item.id);
        }
    }
}
</script>

<style>
    .cell {
        display: inline-block;
    }
</style>