// This file will not re-render if the user visit a page that also uses its components.
import { Footer } from './footer'
import { Header } from './header'

type Props = {
  children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MarketingLayout
