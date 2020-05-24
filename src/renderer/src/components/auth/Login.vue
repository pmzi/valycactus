<template>
  <VContainer class="login">
    <VRow justify="center" align="center" class="login__row">
      <VCol cols="6">
        <VRow justify="center">
          ورود
        </VRow>
        <VRow>
          <VCol cols="12">
            <VForm>
              <VTextField label="نام کاربری" v-model="username" />
              <VTextField label="گذرواژه" v-model="password" />

              <VBtn color="primary">ورود</VBtn>
            </VForm>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  &__row {
    height: 100%;
  }
}
</style>
