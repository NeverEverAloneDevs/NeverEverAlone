import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import {About,CareHub,CausesOfDV,Contact,DomesticViolence,TypesOfDV,WhatWeDo,NavBarContent, SolutionsOfDV} from "./components/";
import DonateNow from "./components/DonateNow";
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
                        path: "whatwedo",
                        element: <WhatWeDo />
                    },
                    {
                        path: "carehub",
                        element: <CareHub />
                    },
                    {
                        path: "contact",
                        element: <Contact />
                    },
                    {
                        path: "donate-now",
                        element: <DonateNow/>
                    },
                    {
                        path:"types",
                        element:<TypesOfDV/>
                    },
                    {
                        path:"causes",
                        element:<CausesOfDV/>
                    },
                    {
                        path:"solutions",
                        element:<SolutionsOfDV/>
                    }
                ]
            },
            

        ]);
export default router;