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
        meta: { project: "biology" },
        component: () =>
          import("@/components/Sidebar/SidebarSubProjectBiology.vue"),
      },
      {
        path: "/biology/samples",
        name: "biologySamples",
        meta: { project: "biology" },
        component: () => import("@/components/Sidebar/SidebarBiology.vue"),
      },
      {
        path: "/biology/about",
        name: "biologyAbout",
        meta: { project: "biology" },
        component: () => import("@/components/Sidebar/SidebarBiologyAbout.vue"),
      },
      {
        path: "/chemistry",
        name: "chemistry",
        meta: { project: "chemistry" },
        component: () =>
          import("@/components/Sidebar/SidebarSubprojectChemistry.vue"),
      },
      {
        path: "/chemistry/samples",
        name: "chemistrySamples",
        meta: { project: "chemistry" },
        component: () => import("@/components/Sidebar/SidebarChemisty.vue"),
      },
      {
        path: "/chemistry/about",
        name: "chemistryAbout",
        meta: { project: "chemistry" },
        component: () =>
          import("@/components/Sidebar/SidebarChemistryAbout.vue"),
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
