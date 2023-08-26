export default class Tool {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
  }

  set lineWidth(width: number) {
    this.ctx.lineWidth = width
  }

  set fillColor(color: string) {
    this.ctx.fillStyle = color
  }

  set strokeColor(color: string) {
    this.ctx.strokeStyle = color
  }

  destroyEvent() {
    this.canvas.onmouseup = null
    this.canvas.onmousedown = null
    this.canvas.onmousemove = null
  }
}
