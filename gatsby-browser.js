import React from 'react'
import ReactDOM from 'react-dom'
// import SWUpdater from './src/components/SWUpdater'

function onServiceWorkerUpdateReady() {
  console.log('Your application need to be refreshed')
  // const root = document.createElement('div')
  // document.body.appendChild(root)
  // ReactDOM.render(<SWUpdater />, root)
}

export { onServiceWorkerUpdateReady }
