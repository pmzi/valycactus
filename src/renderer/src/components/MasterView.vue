<template>
  <VApp>
    <!-- <v-navigation-drawer app permanent> -->
    <!-- -->
    <!-- </v-navigation-drawer> -->
    <Drawer v-model="isDrawerOpen" />

    <VAppBar app>
      <VAppBarNavIcon
        @click.stop="isDrawerOpen = !isDrawerOpen"
      ></VAppBarNavIcon>
      <!-- -->
    </VAppBar>

    <!-- Sizes your content based upon application components -->
    <VContent>
      <!-- Provides the application the proper gutter -->
      <VContainer fluid>
        <!-- If using vue-router -->
        <RouterView></RouterView>
      </VContainer>
    </VContent>
  </VApp>
</template>

<script>
import Drawer from "./Drawer";

export default {
  name: "MasterView",
  components: {
    Drawer
  },
  data() {
    return {
      isDrawerOpen: false
    };
  }
};
</script>
