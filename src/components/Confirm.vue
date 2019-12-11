<template>
  <div class="btn">
    <div>
    <button class="btn-confirm" v-on:click="meuclick()">Finalizar</button>
  </div>
  <div>
    <router-link to="options"><button class="btn-back">Voltar</button></router-link>
  </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Confirm',
  methods: {
    // Fazer a integração com o back end e enviar a mensagem de confirmação do voo
    // sendMensage () {

    // },
    meuclick () {
      swal('Ação finalizada', 'Confirmação enviada', 'success')
    }
  }
}
</script>

<style>
.btn{
  display: flex;
  align-items: center;
  margin: 10px;
}
.btn-confirm {
  width: 166px;
  height: 33px;
  color: white;
  border: none;
  margin: 14px;
  background: #72ce97;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
.btn-back {
  width: 166px;
  height: 33px;
  color: white;
  border: none;
  margin: 14px;
  background: linear-gradient(252.4deg, #01a1ff 4.29%, #017aff 89.82%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
</style>
