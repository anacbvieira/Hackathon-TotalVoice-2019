<template>
  <div id="login">
    <div id="logo">
      <img alt="Aircom logo" src="../assets/aircom-vertical-branco 1.png" width="207px" height="164px">
    </div>
    <div>
     <h1>Login</h1>
    </div>
    <div class="usuario">
      <input type="email" name="usuario" class="form-control" placeholder="Usuário">
      <br/>
      <br/>
      <input type="password" name="password" class="form-control" placeholder="Senha">
    </div>

    <div >
      <button class="btn-login">Entrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {}
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
