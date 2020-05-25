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
          Application
        </VListItemTitle>
        <VListItemSubtitle>
          subtext
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
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          to: { name: "home" }
        },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
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
