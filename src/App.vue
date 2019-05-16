<template>
  <div id="app">
    <siteSidebar/>
    <main class="site__content">
        <router-view/>
    </main>
    <pageBackground/>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  import siteSidebar from '@/components/SiteSidebar';
  import pageBackground from '@/components/PageBackground'
	export default {
		methods: {
			...mapActions({
				siteData: 'RETRIEVE_SITE_DATA'
			})
		},
		mounted() {
			this.siteData();
    },
    components: {
        siteSidebar,
        pageBackground
    }
	}
</script>
