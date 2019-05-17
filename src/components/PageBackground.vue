<template>
    <figure class="site__background bg-cover" :style="{ backgroundImage: `url('${url}')` }"></figure>
</template>
<script>
export default {
    name: "pageBackground",
    props: {
        url: String
    }
}
</script>
