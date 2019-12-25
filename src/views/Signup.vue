<template>

    <div class="login-page">
    <div class="container-fluid">
        <div class="row main">
            <div class="col-sm-12">
                <div class="panel-heading">
                   <div class="panel-title text-center">
                        <router-link to="/"><img src="assets/images/logo.png" class="img-responsive mx-auto" alt="" /></router-link>
                        <hr />
                    </div>
                </div> 
                <div class="main-login main-center">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="fa fa-user fa" aria-hidden="true"></i>
                                    </span>
                                    <input type="text" class="form-control input-lg alt-input" name="username" id="username" placeholder="Enter Username" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="fa fa-envelope fa" aria-hidden="true"></i>
                                    </span>
                                    <input type="text" class="form-control input-lg alt-input" name="email" id="email" placeholder="Enter Email" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
                                    </span>
                                    <input type="password" class="form-control input-lg alt-input" name="password" id="n_password" placeholder="New Password" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="cols-sm-10">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
                                    </span>
                                    <input type="password" class="form-control input-lg alt-input" name="confirmpassword" id="c_password" placeholder="Confirm Password" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="checkbox-inline">
                                <input type="checkbox" name="gender" />Male
                            </label>
                            <label class="checkbox-inline">
                            <input type="checkbox" name="gender" />Female
                            </label>
                        </div>

                        <div class="form-group">
                            <label for="sel1">Location:</label>
                            <select class="form-control" name="location" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <Button type="submit" class="btn btn-brograd2">Signup</Button>
                        </div>
                        <div class="login-register heading2">
                            <router-link to="/Login">Already Registered?</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Signup'
    }
</script>

<style scoped>

</style>