import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'app-emp-add-edit',
    templateUrl: './emp-add-edit.component.html',
    styleUrls: ['./emp-add-edit.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class EmpAddEditComponent {
    employeeform !: FormGroup;
    // @Inject(MAT_DIALOG_DATA) data: any
    constructor(private fb: FormBuilder, private apiService: EmployeeService, private dailogRef: MatDialogRef<EmpAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.employeeform = this.fb.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            dob: [''],
            gender: [''],
            company: [''],
            experience: [''],
        })
    }

    onFromSubmit(e: any) {
        if (this.employeeform.valid) {
            if (this.data) {
                this.apiService.editEmployeeData(this.data?.id, this.employeeform.value).subscribe({
                    next: (val: any) => {
                        this.dailogRef.close(true)
                    }
                })
            } else {
                console.log(this.employeeform, "dwsad");
                this.apiService.addEmployee(this.employeeform.value).subscribe({
                    next: (val: any) => {
                        alert('Employee added Successfully')
                        this.dailogRef.close(val)
                    }, error: (err: any) => {
                        console.log(err)
                    }
                })
            }
        }
    }

    saveEmployeeList() {
        this.dailogRef.close(true)
    }

    ngOnInit(): void {
        console.log("called,", this.data);

        this.employeeform.patchValue({
            firstName: this.data?.firstName,
            lastName: this.data?.lastName,
            email: this.data?.email,

        });

    }
}
