import React from 'react'
import ReactDOM from 'react-dom'
import SWUpdater from './src/components/SWUpdate'

function onServiceWorkerUpdateReady() {
  const root = document.createElement('div')
  document.body.appendChild(root)

  ReactDOM.render(<SWUpdater />, root)
}

export { onServiceWorkerUpdateReady }
