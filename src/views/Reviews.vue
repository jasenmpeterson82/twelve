<template>
    <article class="history">
        <section class="page__content home_page__content">
            <PageHeader :title="pageTitle"/>
            <AudioBlock :id="audioClips[0]" />
            <Accordion :sections="accordion"/>
        </section>
    </article>
</template>
<script>
import { mapActions } from 'vuex';
import PageHeader from '@/components/PageHeader';
import AudioBlock from '@/components/AudioBlock';
import Accordion from '@/components/Accordion';
export default {
    name: "reviews",
    data: function(){
		return {
            pageTitle: null,
            audioClips: [],
            accordion: null
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

            // title
            this.pageTitle = componentData.title

            // audio clips
			const audio__clip = componentData.acf.audio_block;
            this.audioClips.push(audio__clip);
            
            // accordions
            const accordions = componentData.acf.page_content.filter(accordion => accordion.acf_fc_layout === 'accordion');
            this.accordion = accordions;
		});
    },
    components: {
        PageHeader,
        AudioBlock,
        Accordion
    }
}
</script>
