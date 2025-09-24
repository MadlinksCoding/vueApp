<template>
  <DashboardWrapper>
    <template #content>
      <DashboardReferralsContentCreator />
    </template>
  </DashboardWrapper>
</template>
<script setup lang="ts">
import DashboardWrapper from "@/templates/dashboard/DashboardWrapper.vue";
import DashboardReferralsContentCreator from "@/templates/dashboard/page/creator/DashboardReferralsContentCreator.vue";
</script>
