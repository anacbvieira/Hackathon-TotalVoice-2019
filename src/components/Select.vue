<template>
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
</template>

<script>

import gate from '../assets/gate'
import flight from '../assets/flight'
import Autocomplete from '../components/Autocomplete'

export default {
  name: 'Select',
  data () {
    return {
      gate: [],
      flight: [],
      selectedFlight: Object
    }
  },
  components: {
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
.lista {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.selecao {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  margin: 10px;
  position: relative;
}
</style>
