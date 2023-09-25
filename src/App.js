import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feeds from './Components/Feeds'
import Header from './Components/Header'
import Searchresult from './Components/Searchresult'
import Videodetail from './Components/Videodetail'
import ContextState from './Context/ContextState'

export default function App() {
    return (
        <>
            <ContextState>
                <BrowserRouter>
                    <div className='flex flex-col h-full'>
                        <Header />
                        <Routes>
                            <Route  path='/' exact element={<Feeds/>} />
                            <Route path='/searchResult/:searchQuery' element={<Searchresult/>} />
                            <Route path='/video/:id' element={<Videodetail/>} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ContextState>
        </>
    )
}
