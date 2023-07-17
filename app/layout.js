import "../styles/app.scss"
import Header from "./header"
import { ContextProvider } from "@/components/Client"



export const metadata = {
  title: 'Todo App',
  description: 'Todo app for  Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
