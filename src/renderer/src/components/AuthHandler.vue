<template>
  <div>
    <template v-if="$auth.isGettingUserInfo">
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
