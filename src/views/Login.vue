<template>
  <div>
    <!-- . och skriv classens namn -->
    <div class="bg-modal">
      <div class="modal-content">
        <div class="row">
          <!-- TODO Create a logo picture -->
          <i class="material-icons large">account_circle</i>

          <h4>Logga in</h4>
          <form action>
            <div class="inputfields">
              <input type="email" placeholder="E-post" v-model="email" />
              <input type="password" placeholder="Lösenord" v-model="password" />
              <p
                v-if="this.failedLogin"
                class="error-message col s12"
              >Fel användarnamn eller lösenord.</p>
            </div>

            <br />
            <a
              class="waves-effect waves-light btn submit-button"
              @click="Signin"
              @blur="this.failedLogin == true"
              type="submit"
            >Logga in</a>

            <br />
            <br />
          </form>
          <p class="btn googleSigninButton" @click="socialSignin">
            <img class="googleLogo" src="../components/GoogleLogo.svg"/>
            Logga in med google
          </p>
          <div class="forgotpassword">
            <!-- <router-link to="">Har du glömt ditt lösenord?</router-link> -->
          </div>
          <span>
            Behöver du ett ett konto?
            <router-link to="/register">Registrera dig här</router-link>.
          </span>
          <span class="col s12 terms-of-service">
            <!-- TODO Create a terms and agreements page popup and condition. -->
            <router-link to="/">Terms</router-link>|
            <router-link to="/">Privacy</router-link>|
            <router-link to="/">Security</router-link>
          </span>
        </div>
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
      error: "",
      failedLogin: false
    };
  },

  methods: {
    async Signin() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "mypage" });
      } catch (err) {
        this.failedLogin = true;
      }
    },

    async socialSignin() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();

        const result = await firebase.auth().signInWithPopup(provider);

        this.$router.replace({ name: "mypage" });
        console.log(result);
      } catch (err) {
        console.log(err);
      }
    }
  },
  watch: {
    email() {
      this.failedLogin = false;
    },
    password() {
      this.failedLogin = false;
    }
  }
};
</script>

<style scoped>
.bg-modal {
  /*display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.7);
    z-index: 10;
    top: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
}
.modal-content {
  /* background-color: white;
    border-radius: 4px;
    text-align: center;
    padding: 40px 70px 40px 70px;
    top: 50%;
    left: 50%;
    transform: translate(-50%); */
  display: flex;
  background-color: white;
  text-align: center;
  padding: 48px 40px 36px;
  width: 450px;
  height: 560px;
}
.terms-of-service {
  margin-top: 5%;
}
.inputfields {
  max-width: 100%;
  text-align: center;
  justify-content: center;
  align-content: center;
}
.submit-button {
  background-color: #03a9f4;
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

.googleLogo{
  margin-top: 3%;
  height:15px;
  width:15px;
}

.googleSigninButton{
  background-color: white;
  color: black;
  text-transform: none;
  border-radius: 15px;
  font-size: 14px;
  box-shadow: -10px -10px 20px #f3f9ff, 10px 10px 20px #becbd8;
  transition: 0.3s all ease-in-out;
}

.googleSigninButton:hover{
  box-shadow: -10px -10px 30px #f3f9ff, 10px 10px 30px #becbd8;
  transform: translateY(2px) scale(0.99);
  font-size: 100%;
  font:bold;
}



@media (max-width: 450px) {
  .bg-modal {
    background-color: white;
  }
  .strong-password {
    display: none;
  }
  body {
    background-color: white;
  }
}
</style>


