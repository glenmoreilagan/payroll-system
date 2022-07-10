import Sidebar from './components/SideNav/SideBar'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// EMPLOYEE
import EmployeeIndex from './components/EmployeeComponent/EmployeeIndex';
import AddEditEmployee from './components/EmployeeComponent/AddEditEmployee';

// DEPARTMENT 
import DepartmentIndex from './components/DepartmentComponent/DepartmentIndex';
import AddEditDepartment from './components/DepartmentComponent/AddEditDepartment';

// LEAVETYPE
import LeavetypeIndex from './components/LeavetypeComponent/LeavetypeIndex';

function App() {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <div className="container">
          <Switch>
            {/* EMPLOYEE */}
              <Route exact path="/employees">
                <EmployeeIndex />
              </Route>
              <Route exact path="/employees/:id"> {/** NEW/EDIT **/}
                <AddEditEmployee />
              </Route>
            {/* EMPLOYEE */}

            {/* DEPARTMENT */}
              <Route exact path="/departments">
                <DepartmentIndex />
              </Route>
              <Route exact path="/departments/:id"> {/** NEW/EDIT **/}
                <AddEditDepartment />
              </Route>
            {/* DEPARTMENT */}
            
            {/* LEAVETYPE */}
              <Route exact path="/leavetypes">
                <LeavetypeIndex />
              </Route>
              <Route exact path="/leavetypes/:id"> {/** NEW/EDIT **/}
                {/* <AddEditDepartment /> */}
              </Route>
            {/* LEAVETYPE */}

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
