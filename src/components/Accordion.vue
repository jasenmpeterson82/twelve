<template>
    <section class="accordion" v-if="sections">
        <div v-for="(section, index) in sections" :key="index">
            <h2 class="label" v-if="section.label">{{section.label}}</h2>
            <header>{{section.title}}</header>
            <article v-html="section.content[0].copy"  v-show="index === accordionIndex"></article>
        </div>
    </section>
</template>
<script>
export default {
    name: "accordion",
    props: {
        sections: Array
    },
    data: function(){
		return {
            accordionIndex: 0
        }
    }
}
</script>
