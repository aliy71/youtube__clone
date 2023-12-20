import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar, Sidebar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube cloning',
  description: '',
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header className='border-b border-white-500'>
            <Navbar />
          </header>
          <main className='flex py-2'>
            <aside className='w-[15%] h-full sticky top-0'>
              <Sidebar />
            </aside>
            <article className='w-[85%]'>
              {children}
            </article>
          </main>
        </Providers>
      </body>
    </html>
  )
}
