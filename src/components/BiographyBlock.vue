<template>
    <section class="biography__block" v-if="biography">
        <h3>{{biography.title}}</h3>
        <h5 v-html="biography.bio.subtitle"></h5>
        <article>
            <p v-html="biography.bio.biography"></p>
        </article>
    </section>
</template>
<script>
export default {
    props: {
        id: Number
    },
    data: function(){
		return {
            biography: null
		}
	},
    watch: {
        id: function() {
            this.$http.get(`wp/v2/biographies/${this.id}`).then((response) => {
                this.biography = {
                    'bio': response.data.acf,
                    'title': response.data.title.rendered
                }
            });
        }
    }
}
</script>
