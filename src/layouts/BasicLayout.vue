<template>
  <div id="basicLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <a-card style="border-radius: 8px; width: auto">
          <router-view />
        </a-card>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a-space>
          <a-link
            style="color: #848587; margin-right: 25px"
            href="https://github.com/lhccong"
          >
            <template #icon>
              <icon-github style="font-size: 20px" />
            </template>
            站长：程序员聪
          </a-link>
          <a-link
            style="color: #848587; margin-right: 25px"
            href="https://github.com/lhccong"
          >
            <template #icon>
              <icon-exclamation-circle-fill style="font-size: 20px" />
            </template>
            关于本站
          </a-link>
          <a-link style="color: #848587" href=" https://github.com/lhccong">
            <template #icon>
              <icon-bug style="font-size: 20px" />
            </template>
            建议反馈
          </a-link>
        </a-space>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 28px;
  padding: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
}

.footer {
  padding: 16px;
  text-align: center;
  background: #efefef;
  box-shadow: #eee 1px 1px 5px;
}
</style>
