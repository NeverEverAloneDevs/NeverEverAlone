import { createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import {CausesOfDV,Contact,TypesOfDV, NavBarContent, SolutionsOfDV,DownloadApp,Founder, Teams, MissionVision,DonateNow} from "./components/";

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
                    },
                    {
                        path:"download",
                        element:<DownloadApp/>
                    }
                ]
            },
            { path: '*', element: <Navigate to="/" /> },
    
        ]);
export default router;