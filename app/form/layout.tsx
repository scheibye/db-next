import { Header } from '@/components/layout/Header'

export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header noNavigation={true} />
      <main>{children}</main>
    </>
  )
}
