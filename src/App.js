import { RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,} from 'react-router-dom'
import Error from "./Pages/Error"
import Home from "./Pages/Home"
import Employee from "./Pages/Employee";
import EmployeeList from "./Pages/EmployeeList";
import RouteLayout from "./Pages/RouteLayout";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouteLayout />} errorElement={<Error/>}>
            <Route exact index  element={<Home />}/>
            <Route path="/employee" element={<Employee/>}/>
            <Route path="/employeeList" element={<EmployeeList/>}/>
        </Route>
    ));



function App() {
    return <RouterProvider router={router}/>
}

export default App;
