import { createWebHistory, createRouter } from "vue-router";
import Map from "@/views/Map/Map.vue";
import MapLayout from "@/layouts/MapLayout.vue";

const routes = [
  {
    path: "",
    component: Map,
    name: "map",
    meta: { layout: MapLayout },
    children: [
      {
        path: "",
        name: "menu",
        component: () => import("@/components/Sidebar/SidebarMenu.vue"),
      },
      {
        path: "/biology",
        name: "biology",
        component: () => import("@/components/Sidebar/SidebarBiology.vue"),
      },
      {
        path: "/chemistry",
        name: "chemistry",
        component: () => import("@/components/Sidebar/SidebarChemisty.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/components/Sidebar/SidebarAbout.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
