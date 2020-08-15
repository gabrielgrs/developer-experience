import React from 'react'
import ReactDOM from 'react-dom'
// import SWUpdater from './src/components/SWUpdater'

function onServiceWorkerUpdateReady() {
  const root = document.createElement('div')
  document.body.appendChild(root)
  ReactDOM.render(<SWUpdater />, root)
}

export { onServiceWorkerUpdateReady }
