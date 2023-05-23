import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import NavBar from './components/navbar/NavBar'
import './globals.css'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb - Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <RegisterModal />
          <NavBar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
