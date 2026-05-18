import localFont from 'next/font/local'
import { Caveat } from 'next/font/google'

export const Handwritten = Caveat({ subsets: ['latin'], weight: ['400', '600'] })

export const ClashDisplay = localFont({
  src: './ClashDisplay/ClashDisplay-Variable.woff2',
  weight: "100 900",
})

export const Satoshi = localFont({
  src: './Satoshi/Satoshi-Variable.woff2',
  weight: "100 900",
})

export const GeneralSans = localFont({
  src: './GeneralSans/GeneralSans-Variable.woff2',
  weight: "100 900",
})