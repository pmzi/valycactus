export default [
  {
    path: "/auth/login",
    name: "login",
    meta: {
      auth: false
    },
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/components/auth/Login.vue")
  },
  {
    path: "/auth/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/components/auth/Logout.vue")
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
