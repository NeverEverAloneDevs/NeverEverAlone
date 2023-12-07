import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import DomesticViolence from "./components/DomesticViolence";
import About from "./components/About";
import Contact from "./components/Contact";
import DonateNow from "./components/DonateNow";
const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
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

        ]
    }
]);
export default router;