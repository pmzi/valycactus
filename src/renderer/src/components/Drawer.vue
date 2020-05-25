<template>
  <VNavigationDrawer
    :value="isDrawerOpen"
    app
    right
    @input="emitDrawerStatusChange"
  >
    <VListItem>
      <VListItemContent>
        <VListItemTitle class="title">
          ولی کاکتوس
        </VListItemTitle>
        <VListItemSubtitle>
          خوش آمدید
          {{ $auth.user.name }}
        </VListItemSubtitle>
      </VListItemContent>
    </VListItem>

    <VDivider></VDivider>

    <VList shaped dense nav>
      <VListItem v-for="item in items" :key="item.title" link :to="item.to">
        <VListItemIcon>
          <VIcon>{{ item.icon }}</VIcon>
        </VListItemIcon>

        <VListItemContent>
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItemContent>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<script>
export default {
  name: "Drawer",
  model: {
    prop: "isDrawerOpen",
    event: "drawerStatusChange"
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          title: "داشبورد",
          icon: "mdi-view-dashboard",
          to: { name: "home" }
        },
        { title: "خروج", icon: "mdi-exit-to-app", to: { name: "logout" } }
      ],
      right: null
    };
  },
  methods: {
    emitDrawerStatusChange(val) {
      this.$emit("drawerStatusChange", val);
    }
  }
};
</script>
