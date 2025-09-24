<template>
  <DashboardWrapper>
    <template #content>
      <DashboardReferralsContentAgent />
    </template>
  </DashboardWrapper>
</template>
<script setup lang="ts">
import DashboardWrapper from "@/templates/dashboard/DashboardWrapper.vue";
import DashboardReferralsContentAgent from "@/templates/dashboard/page/agent/DashboardReferralsContentAgent.vue";
</script>
