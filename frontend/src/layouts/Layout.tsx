import Header from "@/components/Header"

type Props = {
  children : React.ReactNode
}

const Layout = ({children}: Props) => {
    <div className="flex flex-col min-h-screen">
        <Header/>
    </div>
}

export default Layout;