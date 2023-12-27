<template>
  <div id="app" class="border-[#E6E8EA]">
    <HeaderThink></HeaderThink>
    <NavThink></NavThink>
    <router-view v-slot="{Component}">
      <component :is="Component"/>
    </router-view>
    <FooterThink></FooterThink>
    <ChatButton></ChatButton>
  </div>
</template>

<script>
import HeaderThink from './components/sharedVue/headerThinkPro.vue';
import NavThink from './components/sharedVue/navThinkPro.vue';
import FooterThink from './components/sharedVue/footerThinkPro.vue';
import ChatButton from './components/sharedVue/chatButton.vue';
export default {
  components: {
    HeaderThink,
    NavThink,
    FooterThink,
    ChatButton,
  },
  
}
</script>

<style>
</style>
