import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeService from '../service/EmployeeService';
import { withRouter } from 'react-router-dom';




class ListEmployeeComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        console.log(props);

    }
    componentDidMount() {
        EmployeeService.getAllEmployee().then(response => {
            this.setState({ employees: response.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }
    updateEmployee(id) {
        this.props.history.push('/update-employee/'+id);
        console.log('/update-employee/'+id);
    }
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id);
        window.location.reload(false);

        this.props.history.push('/employees');
    }

    viewEmployee() {
        console.log(this.props);
        this.props.history.push('/view-employee');
    }



    render() {
        return (
            <div>
                <h2 className="text-center">Employee List </h2>
                <button type="button" className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                <div className='row'>
                                    <br/>
                                    </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee FirstName</th>
                                <th>Employee LastName</th>
                                <th>Employee Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employees =>
                                        <tr key={employees.id}>
                                            <td>{employees.firstName}</td>
                                            <td>{employees.lastName}</td>
                                            <td>{employees.emailId}</td>
                                            <td> <button type="button" className="btn btn-info" onClick={()=>{this.updateEmployee(employees.id)}}>Update</button></td>
                                            <td> <button type="button" className="btn btn-danger" onClick={()=>{this.deleteEmployee(employees.id)}}>Delete</button></td>
                                            <td> <button type="button" className="btn btn-warning" onClick={()=>{this.viewEmployee(employees.id)}}>View</button></td>
                                        </tr>

                                )
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
