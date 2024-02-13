import { createBrowserRouter} from "react-router-dom";
import DomesticViolence from "./components/DomesticViolence";
import About from "./components/About";
import Contact from "./components/Contact";
import DonateNow from "./components/DonateNow";
import Home from "./pages/Home";
import NavBarContent from "./components/NavBarContent";

const router = createBrowserRouter ([
       
            {
                path: "/",
                element: <Home />,
                children:[
                    {
                        path: "/",
                        element: <NavBarContent />
                    },
                    {
                        path: "domestic-violence",
                        element: <DomesticViolence />
                    },
                    {
                        path: "about",
                        element: <About />
                    },
                    {
                        path: "contact",
                        element: <Contact />
                    },
                    {
                        path: "donate-now",
                        element: <DonateNow/>
                    },
                ]
            },
            

        ]);
export default router;