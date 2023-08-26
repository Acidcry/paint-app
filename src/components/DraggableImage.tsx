import React, { useEffect } from 'react'
import { useDrag } from 'react-dnd'

interface DraggableImageProps {
  imageUrl: string
  alt: string
  canvas: HTMLCanvasElement | null // Accept canvas prop
}

const DraggableImage: React.FC<DraggableImageProps> = ({
  imageUrl,
  alt,
  canvas,
}) => {
  const [, drag] = useDrag({
    type: 'IMAGE',
    item: { imageUrl, alt },
  })

  useEffect(() => {
    if (!canvas) return

    const image = new Image()
    image.src = imageUrl

    const ctx = canvas.getContext('2d')
    image.onload = () => {
      if (ctx) {
        ctx.drawImage(image, 0, 0) // Draw the image on the canvas
      }
    }
  }, [imageUrl, canvas])

  return <img ref={drag} src={imageUrl} alt={alt} />
}

export default DraggableImage
