<template>
    <header v-if="title">{{title}}</header>
</template>
<script>
export default {
    name: "headerComponent",
    props: {
        title: String
    }
}
</script>
