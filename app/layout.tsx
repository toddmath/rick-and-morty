import './globals.css'
import Nav from "./nav"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth' data-theme='light'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='subpixel-antialiased m-0 p-0 w-full min-h-full font-sans text-base-content bg-base-100 relative'>
        <Nav />
        {children}
        <footer className='footer'></footer>
      </body>
    </html>
  )
}
