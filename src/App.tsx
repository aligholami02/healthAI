import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import News from './components/News';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Webinars from './components/Webinars';
import WorkShops from './components/WorkShops';
import Relationship from './components/Relationship';
import MoreInformation from './components/MoreInformation';
import Layout from "./Layout";
import Content from "./components/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Content />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="news" element={<News />} />
                        <Route path="contact-us" element={<ContactUs />} />
                        <Route path="webinars" element={<Webinars />} />
                        <Route path="work-shops" element={<WorkShops />} />
                        <Route path="relationship" element={<Relationship />} />
                        <Route path="more-information" element={<MoreInformation />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App