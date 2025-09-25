<template>
  <DashboardWrapper>
    <template #content>
      <DashboardReferralsContentVendor />
    </template>
  </DashboardWrapper>
</template>
<script setup lang="ts">
import DashboardWrapper from "@/templates/dashboard/DashboardWrapper.vue";
import DashboardReferralsContentVendor from "@/templates/dashboard/page/vendor/DashboardReferralsContentVendor.vue";
</script>
