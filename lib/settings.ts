import { groq } from 'next-sanity'
import { sanityClient } from './sanity.client'

export type NavItem = {
  label: string
  href: string
}

export type Settings = {
  siteTitle?: string
  logoText?: string
  phone?: string
  email?: string
  address?: string
  navigation?: NavItem[]
  footerLinks?: NavItem[]
}

const settingsQuery = groq`
  *[_type == "settings"][0]{
    siteTitle,
    logoText,
    phone,
    email,
    address,
    navigation[]->{label, href},
    footerLinks[]->{label, href}
  }
`

export async function getSettings(): Promise<Settings | null> {
  return sanityClient.fetch(settingsQuery)
}
