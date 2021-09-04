import { doPostNotify } from './doPostNotify'

declare const global: {
  [x: string]: unknown
}

global.doPostNotify = doPostNotify
