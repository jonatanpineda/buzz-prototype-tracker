import { BUZZ_API } from '../constants/urls'

const connectBus = code =>
  fetch(`${BUZZ_API}/code/${code}`)
    .then(response => response.json())

const sendBusLocation = (busId, lat, lon) =>
  fetch(`${BUZZ_API}/${busId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lat,
      lon
    })
  })
  .then(response => response.json())
    

export {
  connectBus,
  sendBusLocation
}
