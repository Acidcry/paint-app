import { observer } from 'mobx-react-lite'
import React, { useEffect, useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'
import DraggableImage from './DraggableImage'

const Canvas: React.FC = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [images, setImages] = useState<{ imageUrl: string; alt: string }[]>([])

  const [, drop] = useDrop({
    accept: 'IMAGE',
    drop: (item: { imageUrl: string; alt: string }) => {
      setImages((prevImages) => [...prevImages, item])
    },
  })

  useEffect(() => {
    if (canvasRef.current) {
      canvasState.setCanvas(canvasRef.current)
      toolState.setTool(new Brush(canvasRef.current))
    }
  }, [])

  return (
    <div className="canvas" ref={drop}>
      <canvas className="canvas" ref={canvasRef} width={1300} height={750} />
      {images.map((image, index) => (
        <DraggableImage
          key={index}
          imageUrl={image.imageUrl}
          alt={image.alt}
          canvas={canvasRef.current}
        />
      ))}
    </div>
  )
})

export default Canvas
