<template>
  <VContainer class="login">
    <VRow justify="center" align="center" class="login__row">
      <VCol cols="6">
        <VRow justify="center">
          ورود
        </VRow>
        <VRow>
          <VCol cols="12">
            <VForm ref="loginForm" lazy-validation>
              <VTextField
                :rules="[isRequired]"
                label="نام کاربری"
                v-model="model.username"
              />
              <VTextField
                :rules="[isRequired]"
                label="گذرواژه"
                v-model="model.password"
              />

              <VBtn @click="submit" color="primary">ورود</VBtn>
            </VForm>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { isRequired } from "@/shared/utilities/validation";
import { auth } from "@/api";

export default {
  name: "Login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      isValid: true
    };
  },
  methods: {
    submit() {
      // this.$refs.loginForm.validate();

      if (this.isValid) {
        auth
          .login({
            username: this.model.username,
            password: this.model.password
          })
          .then(() => {
            alert("Radif");
          });
      }
    }
  },
  computed: {
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
