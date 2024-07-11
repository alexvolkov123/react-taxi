import { PropsWithChildren } from 'react'
import { SiteHeader } from './header/header'
import './layout.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='layout'>
      <SiteHeader />
      <div className='layout__body'>{children}</div>
    </div>
  )
}
