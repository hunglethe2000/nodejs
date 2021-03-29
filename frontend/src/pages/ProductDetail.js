import ProductAPI from "../api/ProductApi.js";
import { parseRequestUrl } from "./util.js";
import top from "../components/top.js";
import bot from "../components/bot.js";
import categories from "../api/categoryAPI.js";

const ProductDetail = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: product } = await ProductAPI.get(id);
    // const { data: categories } = await categoryApi.getAll();

    return `
        <div id="top">${await top.render()}</div>
				<br>
                <div class="row">
			<div class="page-head_agile_info_w3l">
		<div class="container">
			<h3>Single <span>Page </span></h3>
			<!--/w3_short-->
				 <div class="services-breadcrumb">
						<div class="agile_inner_breadcrumb">

						   <ul class="w3_short">
								<li><a href="#">Home</a><i>|</i></li>
								<li>Single Page</li>
							</ul>
						 </div>
				</div>
	   <!--//w3_short-->
	</div>
</div>
        <div class="banner-bootom-w3-agileits">
		<h1>Chi Tiết Sản Phẩm</h1>
	        <div class="container">
	            <div class="col-md-4 single-right-left ">
			        <div class="grid images_3_of_2">
				        <div class="flexslider">
                            <ul class="slides">
                                <li data-thumb="${product.image}">
                                    <div class="thumb-image"> <img src="${
                                      product.image
                                    }" data-imagezoom="true" class="img-responsive"> </div>
                                </li>
					<div class="clearfix"></div>
					<div class="responsive_tabs_agileits"> 
				<div id="horizontalTab">
						<ul class="resp-tabs-list">
							<li>Description</li>
						</ul>
					<div class="resp-tabs-container">
					<!--/tab_one-->
					   <div class="tab1">
							<div class="single_page_agile_its_w3ls">
							  <h6>Lorem ipsum dolor sit amet</h6>
							   <p>${product.description}</p>
							</div>
						</div>
					</div>
				</div>	
			</div>
				</div>	
			</div>
		</div>
		<div class="col-md-8 single-right-left simpleCart_shelfItem">
					<h3>${product.name}</h3>
					<p><span class="item_price">Giá: ${product.price} $ </span></p>
					<div class="rating1">
						<span class="starRating">
							<input id="rating5" type="radio" name="rating" value="5">
							<label for="rating5">5</label>
							<input id="rating4" type="radio" name="rating" value="4">
							<label for="rating4">4</label>
							<input id="rating3" type="radio" name="rating" value="3" checked="">
							<label for="rating3">3</label>
							<input id="rating2" type="radio" name="rating" value="2">
							<label for="rating2">2</label>
							<input id="rating1" type="radio" name="rating" value="1">
							<label for="rating1">1</label>
						</span>
					</div>
					<div class="color-quality">
						<div class="color-quality-right">
							<h5>Số Lượng :</h5>
							<p>[${product.quantity}]</p>
						</div>
					</div>
					<div class="occasional">
						<h5>Status :</h5>
						<p>${product.status ? "còn hàng" : "hết hàng"}</p>
					<div class="occasion-cart">
						<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
							<form action="#" method="post">
								<fieldset>
									<input type="hidden" name="cmd" value="_cart">
									<input type="hidden" name="add" value="1">
									<input type="hidden" name="business" value=" ">
									<input type="hidden" name="item_name" value="Wing Sneakers">
									<input type="hidden" name="amount" value="650.00">
									<input type="hidden" name="discount_amount" value="1.00">
									<input type="hidden" name="currency_code" value="USD">
									<input type="hidden" name="return" value=" ">
									<input type="hidden" name="cancel_return" value=" ">
									<input type="submit" name="submit" value="Add to cart" class="button">
								</fieldset>
							</form>
                        </div>
                        </div>
	 			<div class="clearfix"> </div>
		</div>
 	</div>
	</div>
	${bot.render()}
        `;
  },
};
export default ProductDetail;
