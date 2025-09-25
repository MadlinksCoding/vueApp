<template>
  <DashboardWrapper>
    <template #content>
      <DashboardReferralsContentCustomer />
    </template>
  </DashboardWrapper>
</template>
<script setup lang="ts">
import DashboardWrapper from "@/templates/dashboard/DashboardWrapper.vue";
import DashboardReferralsContentCustomer from "@/templates/dashboard/page/fan/DashboardReferralsContentCustomer.vue";
</script>
