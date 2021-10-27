import { Theme } from '../models'

const theme: Theme = {
  fonts: {
    main: '',
    backup: 'Times New Roman'
  }, 
  colors: {
    primary: '#000',
    secondary: '#fff'
  },
  zIndex: {
    low: 0,
    medium: 100,
    high: 1000
  },
  breakpoints: {
    s: '(max-width: 650px)',
    m: '(max-width: 1080px)',
    l: '(max-width: 1300px)',
  },
}

export default theme
