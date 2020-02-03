<template>
  <div class="bg-modal">
    <div class="modal-content row valign-wrapper">
      <form class="register-form col s12">
        <p style="font-size: 30px">LOGO</p>
        <h5>Registrera ett placeholder-konto</h5>

        <div class="email">
          <input class="col s11 input" type="email" placeholder="E-Mail" v-model="email" />
          <p class="error-message col s12">Ogiltligt e-mail format. Exempel: exempel@e-mail.com</p>
          <p class="error-message col s12">
            Den här e-mail adressen är redan kopplad till ett konto, är det du?
            <br />Klicka här för att
            <router-link to="/">Byta lösenord.</router-link>
          </p>
          <p class="error-message col s12">
            <i class="material-icons tiny warning-symbol">report_problem</i> Detta fältet är obligatoriskt.
          </p>
        </div>
        <input class="col s11" type="password" placeholder="Lösenord" v-model="password" />
        <i class="col s1 material-icons prefix right strong-password">verified_user</i>
        <input
          class="col s11"
          type="password"
          placeholder="Bekräfta Lösenord"
          v-model="confirmedPassword"
        />
        <i class="col s1 material-icons prefix right strong-password">verified_user</i>
        <div>
          <div class="error-box">
            <p class="center-align error-message col s12">Lösenorden är inte samma.</p>
            <p class="error-message col s12">Lösenordet är för kort. Minst 6 karaktärer.</p>
            <p class="error-message col s12">Lösenordet är för långt. Max 30 karaktärer.</p>
            <p class="error-message col s12">
              <i class="material-icons tiny warning-symbol">report_problem</i> Dessa fälten är obligatoriska.
            </p>
          </div>
          <div class="action-buttons right">
            <a class="btn-large light-blue right" @click="registerAccount()">Skapa Konto</a>
            <strong>
              <router-link to="/">logga in i stället</router-link>
            </strong>
          </div>
        </div>

        <span class="col s12 terms-of-service">
          <router-link to="/">Terms</router-link> |
          <router-link to="/">Privacy</router-link> |
          <router-link to="/">Security</router-link>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
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
      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(user + error.code);
        });
    }
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
  padding: 48px 40px 36px;
  max-width: 35%;
}

.light-blue {
  background-color: #03b6ef;
}

.strong-password {
  color: #03b6ef;
  margin-top: 4%;
}

.terms-of-service {
  margin-top: 8%;
}

.login-button {
  max-width: 10%;
}

.action-buttons {
  max-width: 47%;
  min-width: 47%;
}

.error-message {
  font-size: 11px;
  color: red;
  text-align: center;
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0vh;
}
</style>