<template>
  <VContainer class="login">
    <VRow justify="center" align="center" class="login__row">
      <VCol cols="6">
        <VRow justify="center">
          ورود
        </VRow>
        <VRow>
          <VCol cols="12">
            <VForm ref="loginForm" v-model="isValid" lazy-validation>
              <VTextField
                v-model="model.username"
                :rules="[isRequired]"
                label="نام کاربری"
              />
              <VTextField
                v-model="model.password"
                :rules="[isRequired]"
                label="گذرواژه"
              />

              <VBtn :loading="loading" color="primary" @click="submit"
                >ورود</VBtn
              >
            </VForm>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { isRequired } from "@/shared/utilities/validation";

export default {
  name: "Login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      isValid: true,
      loading: false
    };
  },
  methods: {
    async submit() {
      await this.$refs.loginForm.validate();

      if (this.isValid) {
        this.loading = true;
        this.$auth
          .login({
            username: this.model.username,
            password: this.model.password
          })
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch(() => {
            // TODO: Snackbar show error
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    isRequired
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
