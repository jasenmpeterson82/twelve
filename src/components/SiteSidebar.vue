<template>
    <aside class="site__sidebar">
        <nav v-if="siteNavigation">
            <ul>
                <router-link tag="li" v-for="link in sortedMenu" :key="link.slug" :to="link.slug">
                   <a>{{link.title}}</a>
                </router-link>
            </ul>
        </nav>
    </aside>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: "siteSidebar",
    data: function(){
      return {
        siteNavigation: null
      }
    },
    methods: {
      ...mapActions({
        pages: 'RETRIEVE_PAGES'
      }),
    },
    computed: {
      sortedMenu: function() {
        const menu = this.siteNavigation[0].sort(function (a,b) { return a.menu_order - b.menu_order });
        return menu;
      }
    },
    created() {
      this.pages().then(() => {
        this.siteNavigation = this.$store.state.pages;
      });
	},
}
</script>
