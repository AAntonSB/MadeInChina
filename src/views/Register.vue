<template>
  <div class="bg-modal">
    <div class="modal-content">
    <form class="register-form col s12">
      <p style="font-size: 30px">LOGO</p>
      <h5>Registrera ett placeholder-konto</h5>
      <div class="email">
        <input class="col s12 input" type="email" placeholder="E-Mail" />
      </div>
      <input class="col s12" type="password" placeholder="Lösenord" />
      <input class="col s12" type="password" placeholder="Bekräfta Lösenord" />
      <div class="signup">
        <a class="btn-large create-account-button">Skapa Konto</a>
        <strong>
          <router-link to="/LoginModal" class="left">Logga in i stället</router-link>
        </strong>
      </div>
    </form>
    </div>
  </div>
</template>


<style scoped>
.bg-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
}
.modal-content {
  display: flex;
  background-color: white;
  text-align: center;
}
</style>