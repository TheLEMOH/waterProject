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
        children: [
          {
            path: "/about",
            name: "about",
            component: () => import("@/components/Dialog/DialogAbout.vue"),
          },
        ]
      },
      {
        path: "/biology",
        name: "biology",
        meta: { project: "biology" },
        component: () =>
          import("@/components/Sidebar/SidebarSubProjectBiology.vue"),
        children: [
          {
            path: "/biology/about",
            name: "biologyAbout",
            component: () => import("@/components/Dialog/DialogAboutBiology.vue"),
          },
        ]
      },
      {
        path: "/biology/samples",
        name: "biologySamples",
        meta: { project: "biology" },
        component: () => import("@/components/Sidebar/SidebarBiology.vue"),
      },
      {
        path: "/chemistry",
        name: "chemistry",
        meta: { project: "chemistry" },
        component: () =>
          import("@/components/Sidebar/SidebarSubprojectChemistry.vue"),
        children: [
          {
            path: "/chemistry/about",
            name: "chemistryAbout",
            component: () => import("@/components/Dialog/DialogAboutChemistry.vue"),
          },
        ]
      },
      {
        path: "/chemistry/samples",
        name: "chemistrySamples",
        meta: { project: "chemistry" },
        component: () => import("@/components/Sidebar/SidebarChemisty.vue"),
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
