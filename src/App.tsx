import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './styles/app.css'
import Canvas from './components/Canvas'
import Toolbar from './components/Toolbar'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Toolbar />
        <Canvas />
      </div>
    </DndProvider>
  )
}

export default App
