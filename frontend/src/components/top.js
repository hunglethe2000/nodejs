import categoryApi from "../api/categoryAPI";
const top = {
  async render() {
    const { data: categories } = await categoryApi.getAll();
    return `
        <div class="header" id="home">
        <div class="container">
            <ul>
                <li> <a href="/#/admin" data-toggle="modal" data-target="#myModal"><i class="fa fa-unlock-alt" aria-hidden="true"></i> Sign In </a></li>
                <li> <a href="#" data-toggle="modal" data-target="#myModal2"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Sign Up </a></li>
                <li><i class="fa fa-phone" aria-hidden="true"></i> Call : 0967758023</li>
                <li><i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:hungltph08107@fpt.edu.vn">hungltph08107@fpt.edu.vn</a></li>
            </ul>
        </div>
    </div>
    <div class="header-bot">
        <div class="header-bot_inner_wthreeinfo_header_mid">
            <div class="col-md-4 header-middle">
                <form action="#" method="post">
                        <input type="search" name="search" placeholder="Search here..." required="">
                        <input type="submit" value=" ">
                    <div class="clearfix"></div>
                </form>
            </div>
                <div class="col-md-4 logo_agile">
                    <h1><a href="/"><span>E</span>lite Shoppy <i class="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true"></i></a></h1>
                </div>
            <div class="col-md-4 agileits-social top_content">
                <ul class="social-nav model-3d-0 footer-social w3_agile_social">
                   <li class="share">Share On : </li>
                    <li><a href="#" class="facebook">
                          <div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                          <div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" class="twitter"> 
                          <div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                          <div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" class="instagram">
                          <div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                          <div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                    <li><a href="#" class="pinterest">
                          <div class="front"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                          <div class="back"><i class="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <div class="ban-top">
        <div class="container">
            <div class="top_nav_left">
                <nav class="navbar navbar-default">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                    <div class="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav menu__list">
                        <li class="active menu__item menu__item--current"><a class="menu__link" href="/">Home <span class="sr-only">(current)</span></a></li>
                        <li class=" menu__item"><a class="menu__link" href="/#/products">Product</a></li>



                        
                        <li class="dropdown menu__item">
						<a href="#" class="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products 1<span class="caret"></span></a>
					<ul class="dropdown-menu multi-column columns-3">
						<div class="agile_inner_drop_nav_info">
							<div class="col-sm-6 multi-gd-img1 multi-gd-text ">
								<a href="#"><img src="images/top2.jpg" alt=" "/></a>
							</div>
							<div class="col-sm-3 multi-gd-img">
								<ul class="multi-column-dropdown">
                                
								</ul>
							</div>
								<div class="clearfix"></div>
							</div>
						</ul>
					</li>





                        <li class="dropdown menu__item">
                            <a href="#" class="dropdown-toggle menu__link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Danh Mục B<span class="caret"></span></a>
                                <ul class="dropdown-menu multi-column columns-3">
                                    <div class="agile_inner_drop_nav_info">
                                        <div class="col-sm-3 multi-gd-img">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Wallets</a></li>
                                                <li><a href="#">Footwear</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-3 multi-gd-img">
                                            <ul class="multi-column-dropdown">
                                                <li><a href="#">Jewellery</a></li>
                                                <li><a href="#">Sunglasses</a></li>
                                                <li><a href="#">Perfumes</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-sm-6 multi-gd-img multi-gd-text ">
                                            <a href="womens.html"><img src="images/top1.jpg" alt=" "/></a>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </ul>
                        </li>
                        <li class="menu__item dropdown">
                           <a class="menu__link" href="#" class="dropdown-toggle" data-toggle="dropdown">Short Codes <b class="caret"></b></a>
                                    <ul class="dropdown-menu agile_short_dropdown">
                                        <li><a href="#">Web Icons</a></li>
                                        <li><a href="#">Typography</a></li>
                                    </ul>
                        </li>
                        <li class=" menu__item"><a class="menu__link" href="/#/contact">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>	
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                            <div class="modal-body modal-body-sub_agile">
                            <div class="col-md-8 modal_body_left modal_body_left1">
                            <h3 class="agileinfo_sign">Sign In <span>Now</span></h3>
                                        <form action="#" method="post">
                                <div class="styled-input agile-styled-input-top">
                                    <input type="text" name="Name" required="">
                                    <label>Name</label>
                                    <span></span>
                                </div>
                                <div class="styled-input">
                                    <input type="email" name="Email" required=""> 
                                    <label>Email</label>
                                    <span></span>
                                </div> 
                                <input type="submit" value="Sign In">
                            </form>
                              <ul class="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                                <li><a href="#" class="facebook">
                                      <div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                                <li><a href="#" class="twitter"> 
                                      <div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                                <li><a href="#" class="instagram">
                                      <div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                                <li><a href="#" class="pinterest">
                                      <div class="front"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                            </ul>
                            <div class="clearfix"></div>
                            <p><a href="#" data-toggle="modal" data-target="#myModal2" > Don't have an account?</a></p>
    
                            </div>
                            <div class="col-md-4 modal_body_right modal_body_right1">
                                <img src="images/log_pic.jpg" alt=" "/>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="myModal2" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                            <div class="modal-body modal-body-sub_agile">
                            <div class="col-md-8 modal_body_left modal_body_left1">
                            <h3 class="agileinfo_sign">Sign Up <span>Now</span></h3>
                             <form action="#" method="post">
                                <div class="styled-input agile-styled-input-top">
                                    <input type="text" name="Name" required="">
                                    <label>Name</label>
                                    <span></span>
                                </div>
                                <div class="styled-input">
                                    <input type="email" name="Email" required=""> 
                                    <label>Email</label>
                                    <span></span>
                                </div> 
                                <div class="styled-input">
                                    <input type="password" name="password" required=""> 
                                    <label>Password</label>
                                    <span></span>
                                </div> 
                                <div class="styled-input">
                                    <input type="password" name="Confirm Password" required=""> 
                                    <label>Confirm Password</label>
                                    <span></span>
                                </div> 
                                <input type="submit" value="Sign Up">
                            </form>
                              <ul class="social-nav model-3d-0 footer-social w3_agile_social top_agile_third">
                                <li><a href="#" class="facebook">
                                      <div class="front"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-facebook" aria-hidden="true"></i></div></a></li>
                                <li><a href="#" class="twitter"> 
                                      <div class="front"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-twitter" aria-hidden="true"></i></div></a></li>
                                <li><a href="#" class="instagram">
                                      <div class="front"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-instagram" aria-hidden="true"></i></div></a></li>
                                <li><a href="#" class="pinterest">
                                      <div class="front"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
                                      <div class="back"><i class="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
                            </ul>
                            <div class="clearfix"></div>
                            <p><a href="#">By clicking register, I agree to your terms</a></p>
    
                            </div>
                            <div class="col-md-4 modal_body_right modal_body_right1">
                                <img src="images/log_pic.jpg" alt=" "/>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        `;
  },
};
export default top;
