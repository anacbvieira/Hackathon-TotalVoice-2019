<template>
  <div>
    <Header></Header>
    <div class="lista-voo">
      <div class="selecao">
        <div>
          <h2>Selecione o voo:</h2>
        </div>
        <div>
          <select class="localiza" name="select-voo">
            <option value>Selecione</option>
            <option v-for="codigo in codigos" v-bind:key="codigo">{{codigo}}</option>
          </select>
        </div>
      </div>
      <div class="informacao-voo">
        <div class="card">
          <h4>Informações do voo</h4>
        </div>

        <div class="card">
          <div class="row">
            <div class="col-md">Local de Partida:</div>
            <div class="col-md">partida.local</div>
          </div>
          <div class="row">
            <div class="col-md">Data/Hora:</div>
            <div class="col-md">partida.datetime</div>
          </div>
        </div>

        <div class="icon">
          <img alt="plane" src="../assets/airplane.png" width="24" height="24" />
        </div>

        <div class="card">
          <div class="row">
            <div class="col-md">Local de Chegada:</div>
            <div class="col-md">local_chegada.nome</div>
          </div>
          <div class="row">
            <div class="col-md">Data/Hora:</div>
            <div class="col-md">chegada.datetime</div>
          </div>
        </div>
      </div>
      <div class="selecao">
        <div>
          <h2>Informe o portão:</h2>
        </div>
        <div>
          <select class="localiza" name="select-gate">
            <option value>Selecione</option>
            <option v-for="codigo in codigos" v-bind:key="codigo">{{codigo}}</option>
          </select>
        </div>
    </div>
    <div class="confirmacao">
      <div>
        <button class="btn-confirm" v-on:click="meuclick()">
          Confirmar voo</button>
      </div>
      <div>
        <a href="altervoo">
          <button class="btn-alter">Alterar voo</button>
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import swal from 'sweetalert'

export default {
  name: 'header',
  components: {
    Header
  },
  methods: {
    meuclick () {
      swal('Ação finalizada', 'Confirmação enviada', 'success')
    }
  }
}
</script>

<style>
.lista-voo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.selecao {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.localiza {
  width: 166px;
  height: 33px;
  color: white;
  border: none;
  margin: 14px;
  background: #0079ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
.informacao-voo {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 534px;
  height: 350px;
  left: 245px;
  top: 568px;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  color: #3e3e3e;
  margin: 30px;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(
    91.02deg,
    rgba(1, 161, 255, 0.14) 0.01%,
    #017aff 101.95%
  );
  width: 500px;
  height: 1px;
  left: 298px;
  top: 789px;
}
.confirmacao {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: flex-end;
  margin: none;
  padding: none;
  height: 100px;
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
.btn-alter {
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
