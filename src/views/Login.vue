<template>
  <div id="login">
    <div id="logo">
      <img alt="Aircom logo" src="../assets/aircom-vertical-branco 1.png" width="207px" height="164px">
    </div>
    <div>
     <h1>Login</h1>
    </div>
    <div class="usuario">
      <input type="email" name="email" class="form-control" placeholder="E-mail" v-model="email">
      <br/>
      <br/>
      <input type="password" name="password" class="form-control" placeholder="Senha" v-model="password">
    </div>
    <div v-if=PassWrong>
      <label >User or password is invalid </label>
    </div>

    <div >
      <button
      class="btn-login"
      v-on:click="Login()">Entrar</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      // email: 'josephdsbr@gmail.com',
      // password: '123456',
      email: '',
      password: '',
      PassWrong: false
    }
  },
  methods: {
    Login () {
      if (!this.password || !this.email) {
        this.PassWrong = true
        return null
      }
      this.$http.post(`${this.$config.server}/sessions`, { 'email': this.email, 'password': this.password })
        .then((user) => {
          debugger
          if (user.data.token) {
            localStorage.setItem('user', JSON.stringify(user.data))
            localStorage.setItem('token', user.data.accessToken)
            this.$http.defaults.headers.common['Authorization'] = 'Bearer' + user.data.token
            this.$router.push({ name: 'selectflight' })
          }
        })
        .catch((ex) => {
          debugger
          this.PassWrong = true
          console.log(ex)
        })

      // const {email,password} = user;
      // e isso aqui ? Sei lá, foi um jeito de juntar os dois e pegar o token...não? hauha tipo aqui:
      // let user = {this.email, this.password};
      // let resp = this.getToken(this.user);
      // return resp
    }
  }
}
</script>

<style>
body{
  background: linear-gradient(40.29deg, #0079FF 4.68%, #00A9FF 97.61%);
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
}
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.btn-login{
width: 166px;
height: 33px;
color: white;
border: none;
margin: 14px;
background: #3E3E3E;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
border-radius: 8px;
}

.form-control{
width: 294px;
height: 32px;
left: 197px;
top: 616px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
border-radius: 8px;
}
</style>
