import ProductApi from "../api/ProductApi.js";
import BannerAll from "../components/BannerAll.js";
import top from "../components/top.js";
import bot from "../components/bot.js";

const HomePage = {
  async render() {
    try {
      const { data: products } = await ProductApi.getAll();

      // console.log(products);
      const result = products
        .map((products) => {
          return `
		  				<div class="tab1">
							<div class="col-md-3 product-men">
								<div class="men-pro-item simpleCart_shelfItem">
									<div class="men-thumb-item">
										<img src="${products.image}" alt="" class="pro-image-front">
										<img src="${products.image}" alt="" class="pro-image-back">
											<div class="men-cart-pro">
												<div class="inner-men-cart-pro">
													<a href="/#/products/${products.id}" class="link-product-add-cart">Chi Tiết</a>
												</div>
											</div>
											<span class="product-new-top">New</span>
											
									</div>
									<div class="item-info-product ">
										<h4><a href="/#/products/${products.id}">${products.name}</a></h4>
										<div class="info-product-price">
											<span class="item_price">${products.price} $</span>
										</div>
										<div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
										<form action="#" method="post">
										<fieldset>
											<input type="hidden" name="cmd" value="_cart" />
											<input type="hidden" name="add" value="1" />
											<input type="hidden" name="business" value=" " />
											<input type="hidden" name="item_name" value="Formal Blue Shirt" />
											<input type="hidden" name="amount" value="30.99" />
											<input type="hidden" name="discount_amount" value="1.00" />
											<input type="hidden" name="currency_code" value="USD" />
											<input type="hidden" name="return" value=" " />
											<input type="hidden" name="cancel_return" value=" " />
											<input type="submit" name="submit" value="Add to cart" class="button" />
										</fieldset>
									</form>
								</div>								
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
                `;
        })
        .join("");
      return `
			 ${await top.render()}
               ${BannerAll.render()}
            <div class="resp-tabs-container">
            <h3 class="wthree_text_info">New <span>Arrivals</span></h3>	
			${result};
			</div>
			 ${bot.render()}
                `;
    } catch (error) {
      console.log(error);
    }
  },
};
export default HomePage;
