import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import {WhoWeAre,CareHub,CausesOfDV,Contact,DomesticViolence,TypesOfDV, WhatWeDo, NavBarContent, SolutionsOfDV,DownloadApp,Founder, Teams, MissionVision,DonateNow} from "./components/";

const router = createBrowserRouter ([
       
            {
                path: "/",
                element: <Home />,
                children:[
                    {
                        path: "/",
                        element: <NavBarContent />
                    },
                    // {
                    //     path: "domestic-violence",
                    //     element: <DomesticViolence />
                    // },
                    // {
                    //     path: "whoweare",
                    //     element: <WhoWeAre />
                    // },
                    // {
                    //     path: "whatwedo",
                    //     element: <WhatWeDo />
                    // },
                    // {
                    //     path: "carehub",
                    //     element: <CareHub />
                    // },
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
                    },
                    {
                        path:"founder",
                        element:<Founder/>
                    },
                    {
                        path:"mission-vision",
                        element:<MissionVision/>
                    },
                    {
                        path:"Teams",
                        element:<Teams/>
                    },
                    {
                        path:"download",
                        element:<DownloadApp/>
                    }
                ]
            },
            

        ]);
export default router;