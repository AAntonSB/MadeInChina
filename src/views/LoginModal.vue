<template>
    <div>
        <!-- . och skriv classens namn -->
      <div class="bg-modal">
          <div class="modal-content">
         <div class="row"> 
              <i class="material-icons large">account_circle</i>
             
              <h4>Logga in</h4>
              <form action="">
                  <div class="inputfields">
                  <input type="email" placeholder="E-post">
                  <input type="password" placeholder="Lösenord">
                  </div>
                  
                  <br>
               <a class="waves-effect waves-light btn submit-button" type="submit">Logga in</a>
               <br>
               <br>
              </form>
              
                 <div class="forgotpassword">
                      <router-link to="">Har du glömt ditt lösenord?</router-link>   
                  </div> 
                  <span>Behöver du ett ett konto? <router-link to="/register">Registrera dig här</router-link>.</span> 
                  
                  <span class="col s12 terms-of-service"><router-link to="/">Terms</router-link> | <router-link to="/">Privacy </router-link> | <router-link to="/">Security</router-link></span>      
          </div>
          </div> 
          </div>
    </div>
</template>

<style scoped>
.bg-modal{
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
   background-color: rgba(0,0,0,0.7);
   z-index: 10;

}
.modal-content{
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
}
.terms-of-service{
    margin-top: 5%;
}
.inputfields{
    max-width: 100%;
    text-align: center;
    justify-content: center;
    align-content: center;
    
}
.submit-button{
    border: 0;
background-image: linear-gradient(
    45deg,
    #845ec2,
    #d65db1,
    #ff9671,
    #ffc72f,
    #f9f871
  );
  background-size: 200%;
  animation: bg-animation 120s infinite alternate;
  

}
@keyframes bg-animation{
    0%{
        background-postion: left;
    }
    100%{
        background-position: right;
    }
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


