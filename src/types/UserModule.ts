import { type App } from 'vue'
interface CommonCtx {
  app: App<Element>
}

export type UserModule = (ctx: CommonCtx) => void
