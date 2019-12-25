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
                        <form class="form-horizontal" >
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
                                            <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
                                        </span>
                                        <input type="password" class="form-control input-lg alt-input" name="password" id="password"  placeholder="Enter Password" />
                                    </div>
                                </div>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" name="rememberMe" /> Remember me</label>
                            </div>
                            <div class="form-group">
                                <Button type="submit" class="btn btn-brograd2">Login</Button>
                            </div>
                            <div class="login-register heading2">
                                <router-link to="Signup">Create Account</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    export default {
        name: "Login",
        components: {
            Header
        }
    }
</script>

<style scoped>

</style>