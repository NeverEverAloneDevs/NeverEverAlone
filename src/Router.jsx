import App from "./App";
import { createBrowserRouter, Outlet} from "react-router-dom";
import DomesticViolence from "./components/DomesticViolence";
import About from "./components/About";
import Contact from "./components/Contact";
import DonateNow from "./components/DonateNow";
import Home from "./pages/Home";

const router = createBrowserRouter ([
       
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/domestic-violence",
                element: <DomesticViolence />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/donate-now",
                element: <DonateNow/>
            },

        ]);
export default router;