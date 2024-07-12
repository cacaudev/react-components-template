class RoutesApp {

  private static ROUTES_INFO = [
   {
      name: "home",
      path: "home",
      isProtected: false,
      description: "App Home Complete Page",
    },
     {
      name: "dashboard",
      path: "dashboard/index",
      isProtected: true,
      description: "Dashboard Main Partial Page",
    },
    {
      name: "analytics",
      path: "dashboard/analytics",
      isProtected: true,
      description: "Analytics Partial Page",
    },
    {
      name: "crm",
      path: "dashboard/crm",
      isProtected: true,
      description: "CRM Partial Page",
    },
     {
      name: "projects",
      path: "dashboard/projects",
      isProtected: true,
      description: "Projects Partial Page",
    },
  ];

}
export { RoutesApp};
