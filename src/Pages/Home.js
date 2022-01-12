import React from "react"
import Header from "./../Components/Home/Header/Header"
import About from "./../Components/Home/About/About"
import Guide from "./../Components/Home/Guide/Guide"
import Purpose from "./../Components/Home/Purpose/Purpose"
import Plans from "./../Components/Home/Plans/Plans"
import Footer from "./../Components/Home/Footer/Footer"

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Guide />
      <Purpose />
      <Plans />
      <Footer />
    </div>
  )
}

export default Home
