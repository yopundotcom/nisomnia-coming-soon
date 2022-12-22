import Head from "next/head"
import NextLink from "next/link"
import { useRouter } from "next/router"

import env from "@/env"

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{env.SITE_TITLE}</title>
        <meta name="description" content={env.ABOUT} />
        <meta property="og:title" content={env.SITE_TITLE} />
        <meta property="og:title" content={env.SITE_TITLE} />
        <meta property="og:description" content={env.ABOUT} />
        <link
          rel="canonical"
          href={`https://${env.DOMAIN}${router.pathname}`}
        />
      </Head>
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="container">
          <div className="p-5 md:p-20 mx-2">
            <div className="text-center">
              <NextLink
                href="/"
                className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                Nisomnia
              </NextLink>
              <h3 className="text-xl md:text-3xl mt-10">Coming Soon</h3>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
              <div className="m-3">
                <NextLink
                  href="https://www.facebook.com/nisomniacom"
                  target="_blank"
                  title="Nisomnia On Facebook"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Facebook</span>
                </NextLink>
              </div>
              <div className="m-3">
                <a
                  href="https://twitter.com/nisomniacom"
                  target="_blank"
                  title="Nisomnia On Twitter"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Twitter</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  href="https://instagram.com/nisomniacom/"
                  target="_blank"
                  title="Nisomnia On Instagram"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-sky-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Instagram</span>
                </a>
              </div>
              <div className="m-3">
                <a
                  href="https://pinterest.com/nisomniacom/"
                  target="_blank"
                  title="Nisomnia On Pinterest"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mx-auto">Pinterest</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
