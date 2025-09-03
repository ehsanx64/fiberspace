import { BrowserRouter, Routes, Route } from 'react-router'
// @ts-ignore
import '@fontsource-variable/nunito';

import { AppContext, appDefaults } from '@/contexts/App';
import { Navbar } from '@/components/Navbar';

// Import the pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';

import './App.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <AppContext value={appDefaults}>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>                    
                </AppContext>
            </BrowserRouter>

        </>
    )
}

export default App
