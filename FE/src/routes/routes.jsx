import config from "../config";
import homeLayout from "../layouts/homeLayout";
import adminLayout from "../layouts/adminLayout";
import home from "../pages/client/home";
import maGiamGia from "../pages/client/menu";
import dashbroard from "../pages/admin/dashbroard";
import list from "../pages/admin/list";
import add from "../pages/admin/add";
import register from "../pages/auth/register";
import login from "../pages/auth/login";


export const publicRoutes = [
    { path: config.routes.register, component: register, layout: homeLayout },
    { path: config.routes.login, component: login, layout: homeLayout },
    { path: config.routes.home, component: home, layout: homeLayout },
    { path: config.routes.maGiamGia, component: maGiamGia, layout: homeLayout },
    { path: config.routes.dashbroard, component: dashbroard, layout: adminLayout },
    { path: config.routes.list, component: list, layout: adminLayout },
    { path: config.routes.add, component: add, layout: adminLayout },
]