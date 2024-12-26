import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'crud';
    displayedColumns: string[] = ['id', 'firstName', 'LastName', 'email', 'gender', 'companyName', 'package', 'action'];
    dataSource!: any;
    employeeData: any

    constructor(private _dailog: MatDialog, private apiService: EmployeeService) { }

    addEmployeeEdit() {
        const dailog_ref = this._dailog.open(EmpAddEditComponent);
        dailog_ref.afterClosed().subscribe({
            next: (val: any) => {
                if (val) {
                    this.getEmployeeList();
                }
            }
        })
    }

    getEmployeeList() {
        this.apiService.getEmployeeData().subscribe({
            next: (empData: any) => {
                this.employeeData = empData
                this.dataSource = new MatTableDataSource(this.employeeData)
                console.log(empData)
            },
            error: (err: any) => {
                console.log(err)
            }
        })
    }

    deleteTable(tableId: any) {
        console.log(tableId, "asd")
        this.apiService.deleteEmployeeId(tableId).subscribe({
            next: (data: any) => {
                console.log(data, "deleteData");
                this.getEmployeeList();
            },
            error: (err: any) => {
                console.log(err, "err")
            }
        })
    }

    editClicked(data: any) {
        this._dailog.open(EmpAddEditComponent, {
            data: data
        });
    }

    ngOnInit() {
        this.getEmployeeList()
    }
}
