using System.Web;
using System.Web.Optimization;

namespace WebLanCenter
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/lc_css").Include(
                      "~/Content/css/style.css",
                      "~/Content/css/bootstrap.css",
                      "~/Content/font/font-awesome-4.7.0/css/font-awesome.min.css",
                      "~/Content/css/css4673.css?family=Lato:300,400,700,900",
                      "~/Content/css/css53c2.css?family=Righteous",
                      "~/Content/css/mega_menu.css",
                      "~/Content/css/settings.css",
                      "~/Content/css/navigation.css",
                      "~/Content/css/slider.css",
                      "~/Content/css/responsive.css",
                      "~/Content/css/carousel.min.css",
                      "~/Content/css/theme.min.css",
                      "~/Content/css/transitions.css",
                      "~/Content/font/font/flaticon.css",
                      "~/Content/css/datepicker.css"));
        }
    }
}
