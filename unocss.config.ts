import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['bg-full', 'bg-no-repeat bgs-p-100_100'],
    ['absolute-center', 'absolute top-50% left-50% translate-y--1/2 translate-x--1/2'],
    ['main-left-line', 'before:content-none before:absolute before:w-8px before:top-22px before:bottom-20px before:left-8px before:bg-no-repeat before:bgs-p-100_100'],
    ['main-right-line', 'after:content-none after:absolute after:w-8px after:top-22px after:bottom-20px after:right-8px after:bg-no-repeat after:bgs-p-100_100'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
  rules: [
    [/^col-([\s\S]+)$/, ([, d]) => ({ color: `#${d}` })],
    [/^pointer-(\w+)$/, ([, d]) => ({ 'pointer-events': `${d}` })],
    [/^bgs-(\w+)$/, ([, d]) => ({ 'background-size': `${d.split('_')[0]} ${d.split('_')[1]}` })],
    [/^bgs-p-(\w+)$/, ([, d]) => ({ 'background-size': `${d.split('_')[0]}% ${d.split('_')[1]}%` })],
  ],
})
