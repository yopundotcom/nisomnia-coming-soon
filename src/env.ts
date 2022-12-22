interface EnvProps {
  [key: string]: any
}

const env: EnvProps = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API: process.env.NEXT_PUBLIC_API || "http://localhost:8000",
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || "localhost",
  ADSENDE_CLIENT_ID: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE,
  SITE_COLOR: process.env.NEXT_PUBLIC_SITE_COLOR,
  SITE_LANGUAGE: process.env.NEXT_PUBLIC_SITE_LANGUAGE,
  TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME,
  FACEBOOK_USERNAME: process.env.NEXT_PUBLIC_FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME,
  LINKEDIN_USERNAME: process.env.NEXT_PUBLIC_LINKEDIN_USERNAME,
  FACEBOOK_ID: process.env.NEXT_PUBLIC_FACEBOOK_ID,
  LOGO_URL: process.env.NEXT_PUBLIC_LOGO_URL,
  LOGO_WIDTH: process.env.NEXT_PUBLIC_LOGO_WIDTH,
  LOGO_HEIGHT: process.env.NEXT_PUBLIC_LOGO_HEIGHT,
  ABOUT: process.env.NEXT_PUBLIC_ABOUT,
}

export default env