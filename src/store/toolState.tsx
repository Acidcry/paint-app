import { makeAutoObservable } from 'mobx'
import Tool from '../tools/Tool'

class ToolState {
  tool: Tool | null = null
  constructor() {
    makeAutoObservable(this)
  }

  setTool(tool: Tool | null) {
    this.tool = tool
  }

  setLineWidth(width: number) {
    if (this.tool) {
      this.tool.lineWidth = width
    }
  }

  setStrokeColor(color: string) {
    if (this.tool) {
      this.tool.strokeColor = color
    }
  }

  setFillColor(color: string) {
    if (this.tool) {
      this.tool.fillColor = color
    }
  }
}

const toolState = new ToolState()
export default toolState
