import ProductApi from "../api/ProductApi.js";
import { $ } from "../pages/util.js";
import botAdmin from "../components/botAdmin.js";
import categoryApi from "../api/categoryAPI.js";
import firebase from "../firebase";
const ProductAddPage = {
  async render() {
    const { data: categories } = await categoryApi.getAll();
    return `
        <div class="page-wrapper">
        <header class="header-desktop3 d-none d-lg-block">
            <div class="section__content section__content--p35">
                <div class="header3-wrap">
                    <div class="header__logo">
                        <a href="/#/">
                            <img src="../../images/icon/logo-white.png" alt="CoolAdmin" />
                        </a>
                    </div>
                    <div class="header__navbar">
                        <ul class="list-unstyled">
                            <li class="has-sub">
                                <a href="/#/admin">
                                    <i class="fas fa-tachometer-alt"></i>Dashboard
                                    <span class="bot-line"></span>
                                </a>
                                <ul class="header3-sub-list list-unstyled">
                                    <li>
                                        <a href="/#/admin">Dashboard 1</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/#/admin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                              </svg>
                                    <span class="bot-line"></span>Product</a>
                            </li>
                            <li>
                                <a href="/#/categories">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
                                <path d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
                                </svg>
                                    <span class="bot-line"></span>Danh mục</a>
                            </li>
                            <li class="has-sub">
                                <a href="/#/feedback">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                              </svg>
                                    <span class="bot-line"></span>Contact</a>
                            </li>
                            <li class="has-sub">
                                <a href="#">
                                    <i class="fas fa-desktop"></i>
                                    <span class="bot-line"></span>UI Elements</a>
                                <ul class="header3-sub-list list-unstyled">
                                    <li>
                                        <a href="#">Button</a>
                                    </li>
                                    <li>
                                        <a href="#">Badges</a>
                                    </li>
                                    <li>
                                        <a href="#">Tabs</a>
                                    </li>
                                    <li>
                                        <a href="#">Cards</a>
                                    </li>
                                    <li>
                                        <a href="#">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="#">Progress Bars</a>
                                    </li>
                                    <li>
                                        <a href="#">Modals</a>
                                    </li>
                                    <li>
                                        <a href="#">Switchs</a>
                                    </li>
                                    <li>
                                        <a href="#">Grids</a>
                                    </li>
                                    <li>
                                        <a href="#">FontAwesome</a>
                                    </li>
                                    <li>
                                        <a href="#">Typography</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="header__tool">
                        <div class="account-wrap">
                            <div class="account-item account-item--style2 clearfix js-item-menu">
                                <div class="image">
                                    <img src="../../images/icon/hahahaha.jpg" alt="Hung Lee" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header class="header-mobile header-mobile-2 d-block d-lg-none">
            <nav class="navbar-mobile">
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">
                        <li class="has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-tachometer-alt"></i>Dashboard</a>
                            <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="/#/admin">Dashboard 1</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-chart-bar"></i>Charts</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-table"></i>Tables</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="far fa-check-square"></i>Forms</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-calendar-alt"></i>Calendar</a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-map-marker-alt"></i>Maps</a>
                        </li>
                        <li class="has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-copy"></i>Pages</a>
                            <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="#">Login</a>
                                </li>
                                <li>
                                    <a href="#">Register</a>
                                </li>
                                <li>
                                    <a href="#">Forget Password</a>
                                </li>
                            </ul>
                        </li>
                        <li class="has-sub">
                            <a class="js-arrow" href="#">
                                <i class="fas fa-desktop"></i>UI Elements</a>
                            <ul class="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="#">Button</a>
                                </li>
                                <li>
                                    <a href="#">Badges</a>
                                </li>
                                <li>
                                    <a href="#">Tabs</a>
                                </li>
                                <li>
                                    <a href="#">Cards</a>
                                </li>
                                <li>
                                    <a href="#">Alerts</a>
                                </li>
                                <li>
                                    <a href="#">Progress Bars</a>
                                </li>
                                <li>
                                    <a href="#">Modals</a>
                                </li>
                                <li>
                                    <a href="#">Switchs</a>
                                </li>
                                <li>
                                    <a href="#">Grids</a>
                                </li>
                                <li>
                                    <a href="#">Fontawesome Icon</a>
                                </li>
                                <li>
                                    <a href="#">Typography</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="sub-header-mobile-2 d-block d-lg-none">
            <div class="header__tool">
                <div class="header-button-item has-noti js-item-menu">
                    <div class="notifi-dropdown notifi-dropdown--no-bor js-dropdown">
                        <div class="notifi__title">
                            <p>You have 3 Notifications</p>
                        </div>
                        <div class="notifi__item">
                            <div class="bg-c1 img-cir img-40">
                                <i class="zmdi zmdi-email-open"></i>
                            </div>
                            <div class="content">
                                <p>You got a email notification</p>
                                <span class="date">April 12, 2018 06:50</span>
                            </div>
                        </div>
                        <div class="notifi__item">
                            <div class="bg-c2 img-cir img-40">
                                <i class="zmdi zmdi-account-box"></i>
                            </div>
                            <div class="content">
                                <p>Your account has been blocked</p>
                                <span class="date">April 12, 2018 06:50</span>
                            </div>
                        </div>
                        <div class="notifi__item">
                            <div class="bg-c3 img-cir img-40">
                                <i class="zmdi zmdi-file-text"></i>
                            </div>
                            <div class="content">
                                <p>You got a new file</p>
                                <span class="date">April 12, 2018 06:50</span>
                            </div>
                        </div>
                        <div class="notifi__footer">
                            <a href="#">All notifications</a>
                        </div>
                    </div>
                </div>
                <div class="header-button-item js-item-menu">
                    <i class="zmdi zmdi-settings"></i>
                    <div class="setting-dropdown js-dropdown">
                        <div class="account-dropdown__body">
                            <div class="account-dropdown__item">
                                <a href="#">
                                    <i class="zmdi zmdi-account"></i>Account</a>
                            </div>
                            <div class="account-dropdown__item">
                                <a href="#">
                                    <i class="zmdi zmdi-settings"></i>Setting</a>
                            </div>
                            <div class="account-dropdown__item">
                                <a href="#">
                                    <i class="zmdi zmdi-money-box"></i>Billing</a>
                            </div>
                        </div>
                        <div class="account-dropdown__body">
                            <div class="account-dropdown__item">
                                <a href="#">
                                    <i class="zmdi zmdi-globe"></i>Language</a>
                            </div>
                            <div class="account-dropdown__item">
                                <a href="#">
                                    <i class="zmdi zmdi-pin"></i>Location</a>
                            </div>
                            <div class="account-dropdown__item">
                                <a href="#">
                                    <i class="zmdi zmdi-email"></i>Email</a>
                            </div>
                            <div class="account-dropdown__item">
                                <a href="#">
                                    <i class="zmdi zmdi-notifications"></i>Notifications</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="account-wrap">
                    <div class="account-item account-item--style2 clearfix js-item-menu">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content--bgf7">
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="title-4">Welcome back
                                <span>Hung Lee!</span>
                            </h1>
                            <hr class="line-seprate">
                        </div>
                    </div>
                </div>
            </section>
            <section class="statistic statistic2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-3">
                            <div class="statistic__item statistic__item--green">
                                <h2 class="number">10,368</h2>
                                <span class="desc">members online</span>
                                <div class="icon">
                                    <i class="zmdi zmdi-account-o"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="statistic__item statistic__item--orange">
                                <h2 class="number">388,688</h2>
                                <span class="desc">items sold</span>
                                <div class="icon">
                                    <i class="zmdi zmdi-shopping-cart"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="statistic__item statistic__item--blue">
                                <h2 class="number">1,086</h2>
                                <span class="desc">this week</span>
                                <div class="icon">
                                    <i class="zmdi zmdi-calendar-note"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="statistic__item statistic__item--red">
                                <h2 class="number">$1,060,386</h2>
                                <span class="desc">total earnings</span>
                                <div class="icon">
                                    <i class="zmdi zmdi-money"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="p-t-20">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="title-5 m-b-35">Thêm Sản Phẩm</h3>
                            <div class="table-data__tool">
                                <div class="table-data__tool-left">
                                    <div class="rs-select2--light rs-select2--md">
                                        <select class="js-select2" name="property">
                                            <option selected="selected">All Properties</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                        <div class="dropDownSelect2"></div>
                                    </div>
                                    <div class="rs-select2--light rs-select2--sm">
                                        <select class="js-select2" name="time">
                                            <option selected="selected">Today</option>
                                            <option value="">3 Days</option>
                                            <option value="">1 Week</option>
                                        </select>
                                        <div class="dropDownSelect2"></div>
                                    </div>
                                    <button class="au-btn-filter">
                                        <i class="zmdi zmdi-filter-list"></i>filters</button>
                                </div>
                                <div class="table-data__tool-right">
                                    <button class="au-btn au-btn-icon au-btn--green au-btn--small">
                                        <i class="zmdi zmdi-plus"></i><a href="/#/admin">Product</a></button>
                                    <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                        <select class="js-select2" name="type">
                                            <option selected="selected">Export</option>
                                            <option value="">Option 1</option>
                                            <option value="">Option 2</option>
                                        </select>
                                        <div class="dropDownSelect2"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive table-responsive-data2" id="listproduct">
                                <form id="form-addproducts">
                                    <div class="form-group mb-3">
                                        <label for="product-name" class="form-label">Tên Sản Phẩm: *</label><br>
                                        <input type="text" class="form-control" placeholder="ten san pham" id="product-name">
                                        <span class="errorName" style="color="red;"></span>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="product-image" class="form-label">Ảnh Sản Phẩm: </label><br>
                                        <input type="file" class="form-control" placeholder="anh san pham" id="product-image">
                                        <span class="errorImage"></span>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="product-price" class="form-label">Giá Sản Phẩm: *</label><br>
                                        <input type="number" class="form-control" placeholder="gia san pham" id="product-price">
                                        <span class="errorPrice"></span>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="product-status" class="form-label">Trạng Thái Sản Phẩm: </label><br>
                                            <select name="cars" id="product-status" class="form-control">
                                                <option value="true">còn hàng</option>
                                                <option value="false">hết hàng</option>
                                            </select>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="product-category" class="form-label">Danh Mục Sản Phẩm: </label><br>
                                        <select name="cars" class="form-control" id="product-category">
                                        ${categories
                                          .map((categories) => {
                                            return `
                                                    <option value="${categories.id}">${categories.name}</option>
                                                `;
                                          })
                                          .join("")}
                                            
                                        </select>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="product-quantity" class="form-label">Số Lượng Sản Phẩm *</label><br>
                                        <input type="number" class="form-control" placeholder="so luong san pham" id="product-quantity">
                                        <span class="errorQuantity"></span>
                                    </div>
                                    <br>
                                    <div class="mb-3" style="text-align: center;">
                                    <button type="submit" class="btn btn-primary">ADD Product</button>
                                    </div>
                                    <br>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="p-t-60 p-b-20">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="copyright">
                        <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    ${botAdmin.render()}
        `;
  },

  async afterRender() {
    $("#form-addproducts").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#product-name").value;
      if (name == "") {
        $(".errorName").innerHTML = "Không được để trống tên sản phẩm!";
      } else {
        $(".errorName").innerHTML = "";
      }
      const image = $("#product-image").value;
      if (image == "") {
        $(".errorImage").innerHTML = "Sản phẩm cần có hình ảnh minh họa!";
      } else {
        $(".errorImage").innerHTML = "";
      }
      const price = $("#product-price").value;
      if (price == "") {
        $(".errorPrice").innerHTML = "Không được để trống giá sản phẩm!";
      } else {
        $(".errorPrice").innerHTML = "";
      }
      const quantity = $("#product-quantity").value;
      if (quantity == "") {
        $(".errorQuantity").innerHTML =
          "Hãy cho chúng tôi biết số lượng của sản phẩm!";
      } else {
        $(".errorQuantity").innerHTML = "";
      }

      if (name != "" && price != "" && image != "" && quantity != "") {
        const productImage = $("#product-image").files[0];
        let storageRef = firebase.storage().ref(`images/${productImage.name}`);
        storageRef.put(productImage).then(function () {
          console.log("upload thanh cong");
          storageRef.getDownloadURL().then((url) => {
            const product = {
              id: Math.random().toString(36).substr(2, 9).toLowerCase(),
              name: $("#product-name").value,
              image: url,
              price: $("#product-price").value,
              status: $("#product-status").value,
              quantity: $("#product-quantity").value,
            };
            ProductApi.add(product);
            console.log(product);
            window.location.hash = "/admin";
          });
        });
      }
    });
  },
};
export default ProductAddPage;
