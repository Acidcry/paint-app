import { makeAutoObservable } from 'mobx'

class CanvasState {
  canvas: null | HTMLCanvasElement = null
  constructor() {
    makeAutoObservable(this)
  }

  setCanvas(canvas: null | HTMLCanvasElement) {
    this.canvas = canvas
  }
}

const canvasState = new CanvasState()
export default canvasState
