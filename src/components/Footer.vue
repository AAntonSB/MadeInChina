<template>
        <footer>
      <div class>
        <div class="row">
          <div class="col l4">
            <h5 class="white-text">
              <router-link :to="{path: '/omoss'}">Om oss</router-link></h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Kontakta oss</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Jobba hos oss</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Vår historia</a>
              </li>
            </ul>
          </div>
          <div class="col l4">
            <h5 class="white-text">Sociala medier</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Facebook</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Instagram</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="col l4">
            <h5 class="white-text">Medlem</h5>
            <ul>
              <li>
                <router-link to="/login"><a class="grey-text text-lighten-3" href="#!">Logga in</a></router-link>
              </li>
              <li>
                <router-link to="/register"><a class="grey-text text-lighten-3" href="#!">Bli medlem</a></router-link>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Förmåner</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">© 2018 Copyright Text</div>
      </div>
    </footer>
</template>