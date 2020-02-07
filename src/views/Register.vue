<template>
  <div class="bg-modal">
    <div class="modal-content">

      <div v-if="!registered" class="success">
          <h3>Logo</h3>
          <i class="material-icons checkmark large">check_circle</i>
          <h3 class="main-textblock">Du har skapat ett nytt konto på <strong>Filmvisarna AB</strong></h3>
          <router-link to="/mypage"><a class="waves-effect waves-light btn green">Fortsätt till Minsida</a></router-link>
      </div>

      <!-- TODO Make it occur only on register event. -->



      <div v-if="registered" class="row valign-wrapper">
        <form class="register-form col s12">
          <p style="font-size: 30px">LOGO</p>
          <h5>Registrera ett placeholder-konto</h5>
          <div class="email">
            <input class="col s11 input" type="email" placeholder="E-Mail" v-model="email" />
            <div>
            <p
              v-if="this.emailError == 'auth/invalid-email'"
              class="error-message col s12"
            >Ogiltligt e-mail format. Exempel: exempel@e-mail.com</p>
            <p v-if="this.emailError == 'auth/email-already-in-use'" class="error-message col s12">
              Den här e-mail adressen är redan kopplad till ett konto, är det du?
              <br />Klicka här för att
              <router-link to="/">Byta lösenord.</router-link>
            </p>
            <p v-if="this.emailError == 'auth/required-field'" class="error-message col s12">
              <i class="material-icons tiny warning-symbol">report_problem</i> Detta fältet är obligatoriskt.
            </p>
            </div>
          </div>
          <div class="password">
            <input class="col s11" type="password" placeholder="Lösenord" v-model="password" />

            <input
              class="col s11"
              type="password"
              placeholder="Bekräfta Lösenord"
              v-model="confirmedPassword"
            />
            <i
                
                class="col s1 material-icons prefix right strong-password"
              >verified_user</i>
            <p
              v-if="this.passError == 'auth/different-passwords'"
              class="center-align error-message col s12"
            >Lösenorden är inte samma.</p>
            <p
              v-if="this.passError == 'auth/weak-password'"
              class="error-message col s12"
            >Lösenordet är för kort. Minst 6 karaktärer.</p>
            <p
              v-if="this.passError == 'auth/long-password'"
              class="error-message col s12"
            >Lösenordet är för långt. Max 30 karaktärer.</p>
            <p v-if="this.passError == 'auth/required-field'" class="error-message col s12">
              <i class="material-icons tiny warning-symbol">report_problem</i> Dessa fälten är obligatoriska.
            </p>

            
            <div class="action-buttons">
              <a class="btn light-blue submit-button" @click="registerAccount()">Skapa Konto</a>
              <strong>
                <router-link class="login-button" to="/login">logga in i stället</router-link>
              </strong>
            </div>

            <span class="col s12 terms-of-service">
           
              <router-link to="/">Terms</router-link> |
              <router-link to="/">Privacy</router-link> |
              <router-link to="/">Security</router-link>
            </span>
          </div>
        </form>
      </div>
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
      confirmedPassword: "",
      emailError: "",
      passError: "",
      strongPassword: false,
      registered: true  
    }
  },
    watch:{
      password(password){
        var re = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}/;
        //alert(this.password)
        return this.strongPassword = re.test(password);
        
      },


    },
  methods: {
    
    async registerAccount() {
      var that = this;
      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          console.log(user);
          that.errorHandling(error.code);
        });
        this.registered = false;
    },

    errorHandling(errorCode){
    if(this.email != ""){
              if (
                errorCode == "auth/invalid-email" ||
                errorCode == "auth/email-already-in-use"
              ) { 
                this.emailError = errorCode;
              }
              
              }else{
                  this.emailError = 'auth/required-field'
              }
            if(this.password != "" || this.confirmedPassword != ""){
                if(this.password == this.confirmedPassword){
                    //   Potentialy creating an advanced password checker for secure passwords.
                if (this.password.length < 6) {
                this.passError = 'auth/weak-password';
              }else if(this.password.length > 30){
                    this.passError = 'auth/long-password'
                    }
                }else{
                    this.passError = 'auth/different-passwords'
                }
                }else{
                    this.passError = 'auth/required-field'
                }
            }
  }
}
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
   background-color: rgba(0,0,0,0.7);
   z-index: 10;
}
.modal-content {
  display: flex;
  background-color: white;
  text-align: center;
  padding: 48px 40px 36px;
  max-width: 450px; 
  height: 560px;
}
.login-button{
  margin-top: 3%;
}

.main-textblock{
  margin-bottom: 15%;
}

.light-blue {
  background-color: #03b6ef;
}

.action-buttons {
  text-align: center;
  margin-left: 26%;
  margin-right: 26%;
  margin-bottom: 5%;
}

.checkmark{
  margin-bottom: 10%;
  color: rgb(21, 207, 14);
}

.strong-password {
  color: #03b6ef;
  margin-top: 3.2%;
  display: none
}

.error-message {
  font-size: 11px;
  color: red;
  text-align: center;
  margin: 0;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  padding: 0vh;

}
.submit-button{
background-color: #54C6F3;
}

@media (max-width: 450px) {
  .bg-modal {
    background-color: white;
  }
  .strong-password{
    display: none
  }
  body{
    background-color: white;
  }
}
</style>