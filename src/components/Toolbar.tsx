import React, { useState } from 'react'
import '../styles/toolbar.css'
import toolState from '../store/toolState'
import canvasState from '../store/canvasState'
import Brush from '../tools/Brush'
import Eraser from '../tools/Eraser'
import DraggableImage from './DraggableImage'

const Toolbar: React.FC = () => {
  const [images, setImages] = useState<{ imageUrl: string; alt: string }[]>([])

  const setTool = (toolClass: typeof Brush | typeof Eraser) => {
    const canvas = canvasState.canvas
    if (canvas) {
      toolState.setTool(new toolClass(canvas))
    }
  }

  const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (toolState.tool) {
      toolState.setStrokeColor(e.target.value)
      toolState.setFillColor(e.target.value)
    }
  }

  const handleLineWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lineWidth = parseInt(e.target.value, 10)
    if (!isNaN(lineWidth)) {
      toolState.setLineWidth(lineWidth)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)

      setImages((prevImages) => [...prevImages, { imageUrl, alt: file.name }])
    }
  }

  return (
    <div className="toolbar">
      {images.map((image, index) => (
        <DraggableImage
          key={index}
          imageUrl={image.imageUrl}
          alt={image.alt}
          canvas={null}
        />
      ))}
      <button className="btn brush" onClick={() => setTool(Brush)} />
      <input
        className="btn1"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
        onChange={handleLineWidthChange}
      />
      <button className="btn eraser" onClick={() => setTool(Eraser)} />
      <input
        className="btn color"
        type="color"
        onChange={(e) => changeColor(e)}
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  )
}

export default Toolbar
