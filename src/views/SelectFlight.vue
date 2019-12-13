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
          <input type="text"
          autocomplete="off"
          v-model="flight.code"
          @input="FilterFlight"
          class="enterdata"
          @focus="modal = true"/>
          <div v-if="FilteredFlight && modal">
            <ul class="filterdata">
              <li v-for="FilterFlight in FilteredFlight "
                :key="FilterFlight.code"
                @click="SetFlight(FilterFlight)"
                class="listdata">
                {{ FilterFlight.code }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div class="informacao-voo">
        <div class="cards">
          <div class="row">
            <div >Local de Partida:</div>
            <div >{{flight.origin}} </div>
          </div>
          <div class="row">
            <div >Data/Hora: </div>
            <div><span type="date">{{flight.arrival_date}}</span> </div>
          </div>
        </div>

        <div class="icon">
          <img alt="plane" src="../assets/airplane.png" width="24" height="24" />
        </div>

        <div class="cards">
          <div class="row">
            <div >Local de Chegada:</div>
            <div >{{flight.destiny}}</div>
          </div>
          <div class="row">
            <div >Data/Hora:</div>
            <div > </div>
          </div>
        </div>
        <div class="icon"></div>
        <div class="cards">
          <div class="row">
            <div>Portão de embarque:</div>
            <div>{{flight.port}}</div>
          </div>
        </div>
      </div>
    <div class="confirmacao">
      <Confirm @click="SendMensage(flight)"></Confirm>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Confirm from '../components/Confirm'
import swal from 'sweetalert'

export default {
  name: 'alter',
  data () {
    return {
      gate: '',
      flight: '',
      info: Array,
      FilteredFlight: [],
      FilteredGate: [],
      modal: false
    }
  },
  components: {
    Header,
    Confirm
  },
  methods: {
    GetItems () {
      this.$http.get(`${this.$config.server}/flights`)
        .then(response => {
          this.info = response.data
        })
        .catch(ex => console.log(ex))
    },
    FilterFlight () {
      this.FilteredFlight = this.info.filter(dado =>
        dado.code.toLowerCase().startsWith(this.flight.toLowerCase())
      )
    },
    SetFlight (flight) {
      this.flight = flight
      this.modal = false
      console.log(flight)
    },
    SetGate (gate) {
      this.gate = gate
    },
    SendMensage (flight) {
      debugger
      this.$http.post(`${this.$config.server}/flights-lists/${flight.id}`, this.flight)
        .then(resp => {
          swal('Ação finalizada', 'Confirmação enviada', 'success')
          this.flight = {}
        })
        .catch(ex => {
          console.log(ex)
          return alert('Ocorreu um erro tente novamente')
        })
    }
  },
  mounted () {
    this.GetItems()
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
.lista-voo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #3e3e3e;
}
.informacao-voo {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 630px;
  height: 321px;
  margin: 12px;
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
  width: 619px;
  height: 1px;
  left: 298px;
  top: 789px;
}
.confirmacao {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: flex-end;
  margin: 7px;
  padding: none;
  height: 50px;
}
.enterdata{
  height: 26px;
  border-radius: 5px;
  font-size: 18px;
  cursor: text;
  width: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: #3e3e3e;
  margin-inline-start: 3px;
}
.listdata{
  list-style-type: none;
  text-align:center;
  font-size: 16px;
  cursor: pointer;
  border: black;
  border-color: #3e3e3e
}
.filterdata{
  height: 26px;
  border-radius: 5px;
  font-size: 18px;
  cursor: text;
  width: 148px;
  color: #3e3e3e;
  margin: 2px;
  padding: 2px;
}
.inputgate{
  margin-inline-start: 3px;
  height: 26px;
  border-radius: 5px;
  font-size: 18px;
  cursor: text;
  width: 148px;
}
.cards{
  margin: 30px;
}
</style>
