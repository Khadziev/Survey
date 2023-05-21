import Navbar from "./components/navbar/Navbar"
import MainRouter from "./components/routeConfig/MainRouter"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
    return (
        <>
            <Navbar />
            <div className="flex flex-blog items-left  min-h-screen py-2 ">
                <Sidebar />
                <MainRouter />
            </div>
        </>
    )
}

export default App
