<template>
     <div> 
        <section>
            <div class="banner bg9">
                <h1>Contact Us</h1>
            </div>
        </section>
        
        <section>
            <div class="inner-section">
                <div class="container">
                    <h2>Get In <b>Touch</b></h2><br />
                    <div class="row">
                        <div class="col-md-8">
                            <div class="well well-sm">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name">Name</label>
                                                <input type="text" class="form-control" name="fullname" id="name" placeholder="Enter name" />
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Email Address</label>
                                                <div class="input-group">
                                                    <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                                    </span>
                                                    <input type="email" class="form-control" name="email" id="email" placeholder="Enter email" /></div>
                                            </div>
                                            <div class="form-group">
                                                <label for="phone">Phone</label>
                                                <input type="number" id="phone" name="phone" class="form-control" placeholder="0000 000 0000" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="name">Message</label>
                                                <textarea name="message" id="message" class="form-control" rows="9" cols="25"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-brograd pull-right" id="btnContactUs">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <form>
                            <legend><span class="fa fa-globe"></span> <strong>Our office</strong></legend>
                            <address>
                                <strong>lorem Mine, Inc.</strong><br />
                                795 Folsom Ave, Suite 600<br />
                                San Francisco, CA 94107<br /><br />
                                <abbr title="Phone">
                                    <b>Phone No:</b></abbr>
                                <br />(123) 456-7890
                            </address>
                            <address>
                                <strong>Email</strong><br />
                                <router-link to="mailto:#">first.last@example.com</router-link>
                            </address>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-xs-12">
                            <div class="box">
                                <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                                <div class='details'><h3>USA</h3></div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="box">
                                <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                                <div class='details'><h3>+00 0000000000</h3></div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="box">
                                <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                                <div class='details'><h3>info@loremipsum.com</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
</template>

<script>
    export default {
        name: 'Contactus'
    }
</script>

<style scoped>

</style>