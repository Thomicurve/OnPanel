import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext';
import { useCookies } from 'react-cookie';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { AdminData } from '../services/Admin';
import Navbar from '@components/AdminLogged/Navbar';
import EmployeesTable from '@components/AdminLogged/EmployeesTable';
import TaskToDoCardContainer from '../components/AdminLogged/TasksToDoCardContainer';


function Home() {
    const [cookies, setCookie, removeCookie] = useCookies(['userID']);
    const { setToken, token } = useContext(UserContext);
    const [adminData, setAdminData] = useState({});
    const [employees, setEmployees] = useState([]);

    const handleAdminData = async () => {
        const result = await AdminData( token );
        setAdminData(result.adminData);
        setEmployees(result.employees)
    }

    useEffect(() => {
        handleAdminData();
    }, []);

    const handleLogout = () => {
        console.log('Exiting...👨‍💻');

        setTimeout(() => {
            removeCookie('userID');
            setToken('');
        }, 3000)

    }

    return (
        <>
            <Navbar />
            <header className='w-100 px-5 py-4'>
                <h5 className='text-end'>Welcome {adminData.name}</h5>
            </header>
            <MDBRow className='w-100 text-center px-5'>
                <MDBCol md={3} >
                    <TaskToDoCardContainer/>
                </MDBCol>
                <MDBCol md={7}>
                    column 2
                </MDBCol>
                <MDBCol md={2}>
                    column 3
                </MDBCol>
            </MDBRow>
            <div>
                {
                    employees.map(employee => (
                        <div key={employee._id}>
                            <h5>{employee.employee_email}</h5>
                            <h6>{employee.employee_name}</h6>
                        </div>
                    ))
                }
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Home
