<template>
  <div>
    <template v-if="$auth.isGettingUserInfo && $auth.isLoggedIn">
      در حال گرفتن اطلاعات...
    </template>
    <slot v-else />
  </div>
</template>

<script>
export default {
  name: "AuthHandler"
};
</script>
