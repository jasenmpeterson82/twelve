<template>
  <div id="app">
    <siteSidebar/>
    <main class="site__content">
        <router-view/>
    </main>
    <PageBackground :url="pageBackground"/>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  import siteSidebar from '@/components/SiteSidebar';
  import PageBackground from '@/components/PageBackground'
	export default {
    name: "App",
		methods: {
			...mapActions({
				siteData: 'RETRIEVE_SITE_DATA'
			})
    },
    computed: {
      pageBackground: {
          get() {
            return this.$store.state.pageBackground;
          }
      }
    },
		mounted() {
			this.siteData();
    },
    components: {
        siteSidebar,
        PageBackground
    }
	}
</script>
