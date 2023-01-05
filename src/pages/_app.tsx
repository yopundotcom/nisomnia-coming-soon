import { AppProps } from "next/app"
// import { ThemeProvider } from "next-themes"
import { Inter } from "@next/font/google"
import install from "@twind/with-next/app"

import styleConfig from "@/utils/style"

const inter = Inter({ subsets: ["latin"] })

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider attribute="class" storageKey="theme" enableSystem> */}
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}

export default install(styleConfig, App)
