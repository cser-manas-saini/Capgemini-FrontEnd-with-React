import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Service from '../pages/Service'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import Header from '../component/Header'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import HeroComponent from '../pages/HeroComponent'
import Kitchen from '../RoutingInnerChild/Kitchen'

const RoutingComponent = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <NavBar/>
                <Routes>

                    <Route path='/' element={<HomePage />}>
                        <Route index element = {<HeroComponent/>}/>
                        <Route path='kitchen' element={<Kitchen/>} />
                    </Route>
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Service />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default RoutingComponent