using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace BabaOmo.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapPageRoute("app-info", "info", "~/index.html");
            routes.MapPageRoute("app-child", "child", "~/index.html");
            routes.MapPageRoute("app-father", "father", "~/index.html");
            routes.MapPageRoute("app-result", "result", "~/index.html");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
