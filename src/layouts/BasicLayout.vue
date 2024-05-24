<template>
  <div id="basicLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <a-card style="border-radius: 8px; width: auto; height: 80vh">
          <router-view />
        </a-card>
      </a-layout-content>
      <a-layout-footer class="footer">
        <PageFooter />
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  box-sizing: border-box;
  padding: 40px 160px;
  background: linear-gradient(to right, #fefefe, #fff);
}

.footer {
  padding: 16px;
  text-align: center;
  background: #efefef;
  box-shadow: #eee 1px 1px 5px;
}
</style>
