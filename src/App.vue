<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Login</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Sociomile</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">
          <i class="material-icons">home</i> Home
        </router-link>
        <router-link class="mdl-navigation__link" to="/about" @click.native="hideMenu">
          <i class="material-icons">portrait</i> Tentang Sociomile
        </router-link>
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">
          <i class="material-icons">chat</i> Notifikasi <span class="new badge red">4</span>
        </router-link>
        <router-link class="mdl-navigation__link" to="/feedback" @click.native="hideMenu">
          <i class="material-icons">receipt</i> Feedback
        </router-link>
        <router-link class="mdl-navigation__link" to="/contact" @click.native="hideMenu">
          <i class="material-icons">help</i> Hubungi Kami
        </router-link>

        <router-link class="mdl-navigation__link" to="/post" @click.native="hideMenu">
          <i class="material-icons">today</i> Post a picture
        </router-link>
        <router-link class="mdl-navigation__link" to="/setting" @click.native="hideMenu">
          <i class="material-icons">settings</i> Setting
        </router-link>
        <router-link class="mdl-navigation__link" to="/logout" @click.native="hideMenu">
          <i class="material-icons">error</i> Logout
        </router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')

export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}
.mdl-layout__title, .mdl-layout__header-row .mdl-layout-title {
  margin: auto;
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}

@media screen and (max-width: 1024px) {
  .mdl-layout__header-row {
    padding: 0 16px 0 16px;
  }
}
.mdl-layout__drawer {
  border: none;
}
.mdl-layout__drawer .mdl-layout-title {
  background-color: rgb(33,150,243);
  color: rgb(255,255,255);
  border-bottom: 3px solid #d4d4d4;
}

.mdl-navigation__link .material-icons {
    vertical-align: middle;
    margin-top: -5px;
    margin-right: 5px;
}

span.badge.new {
    font-weight: 300;
    font-size: 0.8rem;
    color: #fff;
    background-color: #26a69a;
    border-radius: 2px;
}
span.badge {
    min-width: 3rem;
    padding: 0 6px;
    margin-left: 14px;
    text-align: center;
    font-size: 1rem;
    line-height: 22px;
    height: 22px;
    color: #757575;
    float: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>
