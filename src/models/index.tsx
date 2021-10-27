import { CSSProperties, FC } from 'react'

export interface BaseProps {
  styles?: CSSProperties
  isHidden?: boolean
  isFullWidth?: boolean
  ref?: any
  className?: string
}

export interface Theme {
  fonts: {
    main: string
    backup: string
  }
  colors: {
    primary: string
    secondary: string
  },
  zIndex: {
    low: number
    medium: number
    high: number
  }
  breakpoints: {
    s: string
    m: string
    l: string
  }
}

export interface ThemeProps { theme: Theme }

export type SectionTitle = 'work' | 'world' | 'about'

export interface Route {
  url: string,
  content: FC
}
