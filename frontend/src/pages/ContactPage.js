import { $ } from "../pages/util.js";
import contactApi from "../api/contactApi.js";
import bot from "../components/bot.js";
import top from "../components/top.js";
const ContactPage = {
  async render() {
    return `
        <div id="top">${await top.render()}</div>
				<br>
                <div class="row">
			<div class="page-head_agile_info_w3l">
		<div class="container">
			<h3>Contact <span>Page </span></h3>
			<!--/w3_short-->
				 <div class="services-breadcrumb">
						<div class="agile_inner_breadcrumb">

						   <ul class="w3_short">
								<li><a href="#">Home</a><i>|</i></li>
								<li>Contact Page</li>
							</ul>
						 </div>
				</div>
	   <!--//w3_short-->
	</div>
</div>
<div class="banner_bottom_agile_info">
	    <div class="container">
		  <div class="contact-grid-agile-w3s">
				<div class="col-md-4 contact-grid-agile-w3">
						<div class="contact-grid-agile-w31">
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							<h4>Address</h4>
							<p>12K Street, 45 Building Road <span>California, USA.</span></p>
						</div>
					</div>
					<div class="col-md-4 contact-grid-agile-w3">
						<div class="contact-grid-agile-w32">
							<i class="fa fa-phone" aria-hidden="true"></i>
							<h4>Call Us</h4>
							<p>+1234 758 839<span>+1273 748 730</span></p>
						</div>
					</div>
					<div class="col-md-4 contact-grid-agile-w3">
						<div class="contact-grid-agile-w33">
							<i class="fa fa-envelope-o" aria-hidden="true"></i>
							<h4>Email</h4>
							<p><a href="mailto:info@example.com">info@example1.com</a><span><a href="mailto:info@example.com">info@example2.com</a></span></p>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
	   </div>
	 </div>
	   <div class="contact-w3-agile1 map" data-aos="flip-right">
			
		   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783" class="map" style="border:0" allowfullscreen=""></iframe>
	   </div>
   <div class="banner_bottom_agile_info">
	<div class="container">
	   <div class="agile-contact-grids">
				<div class="agile-contact-left">
					<div class="col-md-6 address-grid">
						<h4>For More <span>Information</span></h4>
							<div class="mail-agileits-w3layouts">
								<i class="fa fa-volume-control-phone" aria-hidden="true"></i>
								<div class="contact-right">
									<p>Telephone </p><span>+1 (100)222-23-33</span>
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="mail-agileits-w3layouts">
								<i class="fa fa-envelope-o" aria-hidden="true"></i>
								<div class="contact-right">
									<p>Mail </p><a href="mailto:info@example.com">info@example.com</a>
								</div>
								<div class="clearfix"> </div>
							</div>
							<div class="mail-agileits-w3layouts">
								<i class="fa fa-map-marker" aria-hidden="true"></i>
								<div class="contact-right">
									<p>Location</p><span>7784 Diamonds street, California, US.</span>
								</div>
								<div class="clearfix"> </div>
							</div>
							<ul class="social-nav model-3d-0 footer-social w3_agile_social two contact">
							                              <li class="share">SHARE ON : </li>
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
					<div class="contact-form col-md-6">
						<h4 class="white-w3ls">Contact <span>Form</span></h4>
						<form id="form-contacts">
							<div class="styled-input agile-styled-input-top">
							<span class="errorName"></span>	
							<input type="text" name="Name"  id="contact-name">
							<label>Name</label>
							</div>
							<div class="styled-input">
							<span class="errorEmail"></span>
							<input type="email" name="Email"  id="contact-gmail"> 
							<label>Email</label>
							</div> 
							<div class="styled-input">
								<input type="text" name="Phone"  id="contact-phone">
								<label>Phone</label>
							</div>
							<div class="styled-input">
							<span class="errorMessage"></span>	
							<textarea name="Message" id="contact-message"></textarea>
							<label>Message</label>
							</div>	 
							<input type="submit" class="btn btn-primary" value="SEND">
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
  async afterRender() {
    $("#form-contacts").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#contact-name").value;
      if (name == "") {
        $(".errorName").innerHTML = "Kh??ng ???????c ????? tr???ng t??n c???a b???n!";
      } else {
        $(".errorName").innerHTML = "";
      }
      const email = $("#contact-gmail").value;
      if (email == "") {
        $(".errorEmail").innerHTML = "Kh??ng ???????c ????? tr???ng gmail c???a b???n!";
      } else {
        $(".errorEmail").innerHTML = "";
      }
      const message = $("#contact-message").value;
      if (message == "") {
        $(".errorMessage").innerHTML = "Kh??ng ???????c ????? tr???ng ph???n n??y!";
      } else {
        $(".errorMessage").innerHTML = "";
      }
      if (name != "" && email != "" && message != "") {
        const contact = {
          // id: Math.random().toString(36).substr(2, 9),
          name: $("#contact-name").value,
          gmail: $("#contact-gmail").value,
          phone: $("#contact-phone").value,
          message: $("#contact-message").value,
        };
        contactApi.add(contact);
        //   console.log(contact);
        window.location.hash = "/contact";
      }
    });
  },
};
export default ContactPage;
