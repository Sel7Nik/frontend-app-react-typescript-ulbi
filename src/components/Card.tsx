import React, { ReactChild } from 'react'

interface CardProps {
  width?: string
  height?: string
  children?: ReactChild
}

const Card = ({ width, height, children }: CardProps) => {
  return (
    <div style={{ width, height, border: '1px solid teal' }}>
      {children}
    </div>
  )
}

export default Card
