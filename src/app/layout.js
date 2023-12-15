import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
  title: 'Telegram Private File Storage',
  description: 'Telegram Private File Storage Bot is a Telegram bot that provides a unique and convenient way to share messages with others while maintaining user privacy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
