<template>
    <div>
        i am a {{ msg }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'vue 文件'
        }
    }
}
</script>

<style>
div {
    background-color: aqua;
    color: aliceblue;
}
</style>