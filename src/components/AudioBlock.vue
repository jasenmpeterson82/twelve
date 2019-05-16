<template>
	<figure class="audio__block" v-if="audioClip">
		<h5>Listen: {{audioClip.description}}</h5>
		<audio controls :src="audioClip.url" v-if="audioClip"></audio>
	</figure>
</template>

<script>
export default {
	name: "AudioBlock",
	props: {
		id: Number
	},
	data: function(){
		return {
			audioClip: null
		}
	},
	watch: {
        id: function() {
            this.$http.get(`wp/v2/audio_block/${this.id}`).then((response) => {
                this.audioClip = {
                    'url': response.data.acf.audio_clip,
                    'description': response.data.acf.description
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
