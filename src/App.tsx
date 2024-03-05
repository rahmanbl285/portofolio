import { Hero } from "./component/hero"
import { About } from "./component/about"
import { Navbar } from "./component/navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
