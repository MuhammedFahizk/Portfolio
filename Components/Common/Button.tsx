import React from 'react'
import { Div } from './Div'

export const Button = ({ children, className }: { children: React.ReactNode ,className?: string}) => {
  return (
    <Div className={` ${className} btn `}>{
      children
    }</Div>
  )
}
