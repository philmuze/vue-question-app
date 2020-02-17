import Vue from "vue";
import Router from "vue-router";
import PageSessions from "@/views/PageSessions";
import SinglePageSession from "@/views/SinglePageSession";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: PageSessions
    },
    {
      path: "/sessions",
      name: "sessions",
      component: () =>
        import(/* webpackChunkName: "live" */ "./../views/PageSessions.vue")
    },
    {
      path: "/session/:id",
      name: "session",
      component: SinglePageSession
    },
    {
      path: "/start",
      name: "start",
      component: () =>
        import(/* webpackChunkName: "ask" */ "./../views/AddSession.vue")
    }
  ]
});
