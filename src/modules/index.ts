import { type App } from 'vue'

export const autoInstallModules = (app: App<Element>) => {
  Object.values(import.meta.globEager('./*.ts')).forEach(i => i.install?.({ app }))
}
