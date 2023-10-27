import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Whatweserve from "./components/Whatweserve";
import Howwedo from "./components/Howwedo";
import Howwehelp from "./components/Howwehelp";
import Team from "./components/Team";
const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/what-we-serve",
                element: <Whatweserve />
            },
            {
                path: "/how-we-do",
                element: <Howwedo />
            },
            {
                path: "/how-we-help",
                element: <Howwehelp />
            },
            {
                path: "/team",
                element: <Team />
            },

        ]
    }
]);
export default router;