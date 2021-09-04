/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NOTIFY_API: string
    readonly NOTIFY_TOKEN: string
    readonly STORE_URL: string
  }
}
