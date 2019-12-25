<template>
  <div>
      	<footer>
	    	<div class="footer-section">
	    		<div class="container-fluid">
	    			<div class="logo-footer">
		    			<img src="assets/images/footer-logo.png" class="img-responsive" alt="" />
		    		</div>
		    		<div class="row">
		    			<div class="col-sm-2 col-xs-6">
		    				<div class="foot-sec-col1">
			    				<h3>QUICK LINKS</h3>
			    				<ul>
				    				<li><router-link to="/">HOME</router-link></li>
			    					<li><router-link to="Eliquids">E-LIQUIDS</router-link></li>
			    					<li><router-link to="Saltnic">SALT NIC</router-link></li>
			    					<li><router-link to="Devices">DEVICES</router-link></li>
			    					<li><router-link to="Juul">JUUL COMPATIBLE PODS</router-link></li>
		    					</ul>
	    					</div>
		    			</div>
		    			<div class="col-sm-2 col-xs-6">
		    				<div class="foot-sec-col1">
		    					<h3 class="v-hidden">Q</h3>
		    					<ul>
									<li><router-link to="Sale">SALE</router-link></li>
			    					<li><router-link to="Stlth">STLTH VAPE</router-link></li>
			    					<li><router-link to="Newarrivals">NEWEST ARRIVALS</router-link></li>
			    					<li><router-link to="Policies">POLICIES</router-link></li>
			    					<li><router-link to="Contactus">Contact Us</router-link></li>
		    					</ul>
	    					</div>
		    			</div>
		    			<div class="col-sm-4 col-xs-12">
		    				<div class="foot-sec-col3">
		    					<h3>CONTACT US</h3>
		    					<ul>
			    					<li>
			    						<span><img src="assets/images/footer-call.png" alt="" /></span>
			    						<span>&emsp;780-306-5650</span>
			    					</li>
									<li>
										<span><img src="assets/images/footer-email.png" alt="" /></span>
										<span>&emsp;<router-link to="mailto:someone@example.com?Subject=Hello%20again" target="_top">info@loremipsum.com</router-link></span>
									</li>
									<li>
										<span><img src="assets/images/footer-location.png" alt="" /></span>
										<span>&emsp;&nbsp;&nbsp;Lorem ipsum dollar dummy text</span> 
									</li>
								</ul>
		    				</div>
		    			</div>
		    			<div class="col-sm-4 col-xs-12">
			    			<div class="foot-sec-col4">
			    				<h3>NEWSLETTER</h3>
			    				<ul>
			    					<li>Subscribe us for products news and updates</li>
			    					<li>
			    						<form class="form-inline">
										    <div class="form-group">
										      <input type="text" class="footer-input" placeholder="Email" />
										    </div>
										    
										    <button type="submit" class="input-btn">
										    	<img src="assets/images/btn-icon.png" alt="" />
										    </button>
										</form>
			    					</li>
			    					<li>&copy; 2019 <span class="yellow">Lorem Ipsum</span> | All Rights Reserved</li>
			    				</ul>
		    				</div>
		    			</div>
		    		</div>
	    		</div>
	    	</div>
	    </footer>
  </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>

</style>