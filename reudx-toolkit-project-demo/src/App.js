import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ListEmployeeComponent />
    },
    {
      path: "/employees",
      element: <ListEmployeeComponent />
    },
    {
      path: "/add-employee",
      element: <CreateEmployeeComponent />
    },
    {
      path: "/update-employee/:id",
      element: <UpdateEmployeeComponent />
    },
    {
      path: "/view-employee/:id",
      element: <ViewEmployeeComponent />
    }
  ])


  return (
    <div className="App">
      <HeaderComponent/>
        <RouterProvider router={router}/>
      <FooterComponent/>
    </div>
  );



}

export default App;
