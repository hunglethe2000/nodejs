import Error404Page from "./pages/Error404Page.js";
import HomePage from "./pages/HomePage.js";
import ProductDetail from "./pages/ProductDetail.js";
import ProductsPage from "./pages/ProductsPage.js";
import { parseRequestUrl, $ } from "./pages/util.js";
import CategoryPage from "./pages/CategoryPage.js";
import ProductAddPage from "./pages/ProductAddPage.js";
import AdminPage from "./pages/AdminPage.js";
import EditPage from "./pages/EditPage.js";
import CategoryAddpage from "./pages/CategoryAddpage.js";
import AddminCatePage from "./pages/AddminCatePage.js";
import EditCatePage from "./pages/EditCatePage.js";
import ContactPage from "./pages/ContactPage.js";
import AdminContactPage from "./pages/AdminContactPage.js";

const routes = {
  "/": HomePage,
  "/products": ProductsPage,
  "/products/:id": ProductDetail,
  "/category/:id": CategoryPage,
  "/addproduct": ProductAddPage,
  "/admin": AdminPage,
  "/categories": AddminCatePage,
  "/editproduct/:id": EditPage,
  "/addcategory": CategoryAddpage,
  "/editcategory/:id": EditCatePage,
  "/contact": ContactPage,
  "/feedback": AdminContactPage,
};

const router = async () => {
  const { resource, id } = parseRequestUrl();
  const parseUrl = (resource ? `/${resource}` : "/") + (id ? "/:id" : "");
  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
  $("#main-content").innerHTML = await page.render();
  if (page.afterRender) {
    await page.afterRender();
  }
};
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
