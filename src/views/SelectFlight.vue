<template>
  <div>
    <Header></Header>
    <div class="lista-voo">
      <div class="selecao">
        <div>
          <h2>Selecione o voo: </h2>
        </div>
        <div>
          <Autocomplete :items="flight"
            filterby="codigo"
            title="Selecione o voo..."
            @selected="flightSelected"/>
        </div>
      </div>
      <div class="informacao-voo">
        <div class="card">
          <h4>Informações do voo</h4>
        </div>

        <div class="card">
          <div class="row">
            <div class="col-md">Local de Partida:</div>
            <div class="col-md"> {{selectedFlight.arrival}} </div>
          </div>
          <div class="row">
            <div class="col-md">Data/Hora: </div>
            <div class="col-md">{{selectedFlight.arrival_datetime}} </div>
          </div>
        </div>

        <div class="icon">
          <img alt="plane" src="../assets/airplane.png" width="24" height="24" />
        </div>

        <div class="card">
          <div class="row">
            <div class="col-md">Local de Chegada:</div>
            <div class="col-md">{{selectedFlight.departure}}</div>
          </div>
          <div class="row">
            <div class="col-md">Data/Hora:</div>
            <div class="col-md">{{selectedFlight.departure_datetime}}</div>
          </div>
        </div>
      </div>
      <div class="selecao">
        <div>
          <h2>Informe o portão:</h2>
        </div>
        <div>
          <Autocomplete :items="gate"
            filterby="name"
            title="Selecione o portão..."
            @selected="gateSelected"/>
        </div>
    </div>
    <div class="confirmacao">
      <div>
        <button class="btn-confirm" v-on:click="meuclick()">
          Confirmar voo</button>
      </div>
      <div>
        <router-link to="alterflight">
          <button class="btn-alter">Alterar voo</button></router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import swal from 'sweetalert'
import gate from '../assets/gate'
import flight from '../assets/flight'
import Autocomplete from '../components/Autocomplete'

export default {
  name: 'selectflight',
  data () {
    return {
      gate: [],
      flight: [],
      selectedFlight: Object
    }
  },
  components: {
    Header,
    Autocomplete
  },
  methods: {
    meuclick () {
      swal('Ação finalizada', 'Confirmação enviada', 'success')
    },
    gateSelected (gate) {
      console.log(`Gate Selected:\nid: ${gate.id}\nname: ${gate.name}`)
    },
    flightSelected (flight) {
      this.selectedFlight = flight
      console.log(`Flight Selected:\narrival: ${flight.arrival}\ndeparture: ${flight.departure}\narrival_datetime: ${flight.arrival_datetime}\ndeparture_datetime: ${flight.departure_datetime}\ncodigo: ${flight.codigo}`)
    }
  },
  mounted () {
    this.gate = gate
    this.flight = flight
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
  width: 500px;
  height: 300px;
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
