<template>
  <nav class="navbar justify-content-center pt-0">
    <img src="../assets/SCOOPE02.png" class="img-fluid border logoLogin" />
  </nav>
  <div class="container" id="login">
    <div class="login mt-4 p-4 mx-auto border rounded bg-white">
      <h3 class="mb-3 text-center fw-bold">LOGIN</h3>
      <form>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" class="form-control" id="username" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <RouterLink to="/landingpage">
          <button type="submit" class="btn-login btn btn-primary">Login</button>
        </RouterLink>
      </form>
    </div>
  </div>
</template>
  
<style>
.logoLogin {
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  max-width: 50%;
  max-height: 75px;
  box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 6px 20px -5px rgba(0, 0, 0, 0.66);
}
#login {
  max-width: 400px;
}
.login {
  box-shadow: 10px 8px 20px -5px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 10px 8px 20px -5px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 10px 8px 20px -5px rgba(0, 0, 0, 0.66);
}
.btn-login {
  width: 100%;
}
</style>