import { Inter } from 'next/font/google'
import '../styles/app.scss'
import Header from './header'
import { ContextProvider } from '@/components/Client'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TODO APP',
  description: ' This is a mongoose todo app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  )
}
