import { Route } from './models'
import Home from './pages/Home'
import Components from './pages/Components'

export const urls = {
  root: '/',
}


export const routes: Route[] = [
  { url: urls.root, content: Home },
  { url: '/library', content: Components },
]
