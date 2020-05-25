export default [
  {
    path: "/login",
    name: "login",
    meta: {
      auth: false
    },
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/components/auth/Login.vue")
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/components/MasterView.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/Home.vue")
      }
    ]
  }
];
