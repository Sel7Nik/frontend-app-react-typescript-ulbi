import React, { FC, ReactChild, useState } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width?: string
  height?: string
  variant: CardVariant
  onClick: (num: number) => void
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {

  const [state, setState] = useState(0)

  return (

    <div onClick={() => onClick(state)} style={{
      width, height,
      border: variant === CardVariant.outlined
        ? '1px solid teal' : 'none',
      background: variant === CardVariant.primary
        ? 'teal' : 'none'
    }} >
      {children}
    </div>
  )
}

export default Card
