import { config } from './config'

export default {

  list: () => {
    return `${config}/flights`.get('flights')
  },

  confirm: (flights) => {
    return `${config}/flights-lists`.post('flights')
  },

  refresh: (flights) => {
    return `${config}/flights`.post('flights')
  }
}
