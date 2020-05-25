<template>
  <VApp>
    <div class="grey lighten-5">
      <AuthHandler>
        <RouterView />
      </AuthHandler>
    </div>
  </VApp>
</template>

<script>
import "@/stylesheets/main.scss";

import AuthHandler from "./components/AuthHandler";

export default {
  name: "App",
  components: {
    AuthHandler
  }
};
</script>
