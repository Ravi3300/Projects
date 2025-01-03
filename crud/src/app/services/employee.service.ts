import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) { }

    addEmployee(data: any): Observable<any> {
        return this.http.post('http://localhost:3000/employee', data);
    }

    getEmployeeData(): Observable<any> {
        return this.http.get('http://localhost:3000/employee')
    }

    deleteEmployeeId(id: any): Observable<any> {
        return this.http.delete(`http://localhost:3000/employee/${id}`)
    }

    editEmployeeData(id: any, data: any): Observable<any> {
        return this.http.put(`http://localhost:3000/employee/${id}`, data)
    }

}