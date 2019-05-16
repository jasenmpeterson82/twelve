<template>
  <article class="home">
	  
	<section class="rotating__quotes">
		<div v-for="(quote, index) in rotatingQuotesBlock" :key="index" v-show="index === rotatingQuoteIndex">
			<blockquote>
				<p v-html="quote.quote"></p>
				<cite>&ndash; {{quote.author}}</cite>
			</blockquote>
		</div>
	</section>

	<section class="page__content home_page__content">
		<section class="text-center" v-html="pageCopy"></section>
		<BiographyBlock :id="biographyIDs[0]"/>
		<AudioBlock :id="audioClips[0]" />
		<BiographyBlock :id="biographyIDs[1]"/>
	</section>
	  

  </article>
</template>

<script>
// @ is an alias to /src
import AudioBlock from '@/components/AudioBlock';
import BiographyBlock from '@/components/BiographyBlock';
import { mapActions } from 'vuex';

export default {
	name: 'home',
	data: function(){
		return {
			rotatingQuotesBlock: null,
			rotatingQuoteIndex: 0,
			biographyIDs: [],
			audioClips: [],
			pageCopy: null,
		}
	},
	methods: {
		...mapActions({
			pageData: 'RETRIEVE_PAGE_DATA'
		}),
	},
	created() {
		this.pageData(this.$route.name).then(() => {
			// store (page) data
			const componentData = this.$store.state.pageData;
			

			// rotating quotes block
			this.rotatingQuotesBlock = componentData.acf.content[0]['quotes'];

			// bios
			const bios = componentData.acf.content.filter(bio => bio.hasOwnProperty('biography_module'));
			for(let bio of bios) {
				this.biographyIDs.push(bio.biography_module);
			}

			// copy
			this.pageCopy = componentData.acf.content[1].copy;

			// audio clips
			const audio__clips = componentData.acf.content.filter(audio => audio.hasOwnProperty('audio_module'));
			this.audioClips.push(audio__clips[0].audio_module);
		});
	},
	components: {
		AudioBlock,
		BiographyBlock
	}
}
</script>
