<script>
export default {
  name: "Logout",
  created() {
    this.$auth.logout().then(() => {
      this.$router.push({ name: "login" });
    });
  },
  render: () => null
};
</script>
