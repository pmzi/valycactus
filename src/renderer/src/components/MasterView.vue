<template>
  <VApp>
    <VNavigationDrawer app>
      <!-- -->
      Hey
    </VNavigationDrawer>

    <VContent>
      <VContainer fluid>
        <RouterView></RouterView>
      </VContainer>
    </VContent>

    <VFooter app>
      <!-- -->
    </VFooter>
  </VApp>
</template>

<script>
export default {
  name: "MasterView"
};
</script>
