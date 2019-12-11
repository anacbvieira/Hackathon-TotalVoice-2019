<template>
  <div>
    <Header></Header>
    <div class="lista-voo">
      <div class="lista">
      <div class="selecao">
        <div>
          Selecione o voo:
        </div>
        <div>
          <Autocomplete :items="flight"
            filterby="codigo"
            title="Selecione o voo..."
            @selected="flightSelected"/>
        </div>
      </div>
      <div class="selecao">
        <div>
          Informe o portão:
        </div>
        <div>
          <Autocomplete :items="gate"
            filterby="name"
            title="Selecione o portão..."
            @selected="gateSelected"/>
        </div>
      </div>
    </div>
      <div class="alter-voo">
        <div class="cards">
          <div class="row">
            <div class="col-md">Local de Partida:</div>
            <div class="col-md">{{selectedFlight.arrival}}</div>
          </div>
          <div class="row">
            <div class="col-md">Data/Hora:</div>
            <div class="col-md">{{selectedFlight.arrival_datetime}} </div>
          </div>
          <div class="row">
            <div class="col-md">Alterar Data/Hora para:</div>
            <datetime type="datetime" v-model="datetime_departure" place></datetime>
          </div>
        </div>

        <div class="icon">
          <img alt="plane" src="../assets/airplane.png" width="24" height="24" />
        </div>

        <div class="cards">
          <div class="row">
            <div class="col-md">Local de Chegada:</div>
            <div class="col-md">{{selectedFlight.departure}}</div>
          </div>
          <div class="row">
            <div class="col-md">Data/Hora:</div>
            <div class="col-md">{{selectedFlight.departure_datetime}} </div>
          </div>
          <div class="row">
            <div class="col-md">Alterar Data/Hora para:</div>
            <datetime type="datetime" v-model="datetime_departure" place></datetime>
          </div>
        </div>
      </div>
    <div class="confirmacao">
      <Confirm></Confirm>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { Datetime } from 'vue-datetime'
import Vue from 'vue'
import Confirm from '../components/Confirm'
import gate from '../assets/gate'
import flight from '../assets/flight'
import Autocomplete from '../components/Autocomplete'

Vue.component('datetime', Datetime)

export default {
  name: 'alterflight',
  data: function () {
    return {
      gate: [],
      flight: [],
      selectedFlight: Object
    }
  },
  components: {
    Header,
    Confirm,
    Autocomplete
  },
  methods: {
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
  background: #E5E5E5;
  color: #3e3e3e;
  font-size: 16px;
}
.alter-voo {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 500px;
  height: 324px;
  margin-bottom: 12px;
}
.cards{
  margin-top: -10px;
  margin-bottom: -10px;
}
</style>
