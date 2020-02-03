<template>
  <div class="bg-modal">
    <div class="modal-content">
      <div class="row valign-wrapper">
        <form class="register-form col s12">
          <p style="font-size: 30px">LOGO</p>
          <h5>Registrera ett placeholder-konto</h5>
          <div class="email">
            <input class="col s12 input" type="email" placeholder="E-Mail" v-model="email" />
          </div>
          <input class="col s12" type="password" placeholder="Lösenord" v-model="password" />
          <input
            class="col s12"
            type="password"
            placeholder="Bekräfta Lösenord"
            v-model="confirmedPassword"
          />
          <div class="signup">
            <a class="btn-large create-account-button" @click="registerAccount()">Skapa Konto</a>
            <strong>
              <router-link to="/LoginModal" class="left">Logga in i stället</router-link>
            </strong>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmedPassword: ""
    };
  },
  methods: {
        async registerAccount() {
            const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
              console.log( user + error.code)
            })
    },
  }
};
</script>

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