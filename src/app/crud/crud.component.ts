import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { CrudService } from '../services/crud.service';
import { emplyeemodel } from './cuud_interface';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent implements OnInit {

  formvalue!: FormGroup;
  //add data
  employeemodelobj: emplyeemodel = new emplyeemodel();
  //tabale show for use
  emploeedata !: any;
  showadd!: boolean;
  showupdate!: boolean;

  constructor(private formbuilder: FormBuilder, private crud: CrudService) { }
  //Reacctive Form
  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      Email: [],

    })

    this.getAllemplyee();
  }
  // add data function
  postEmploeDetails() {
    this.employeemodelobj.firstName = this.formvalue.value.firstName;
    this.employeemodelobj.lastName = this.formvalue.value.lastName;
    this.employeemodelobj.email = this.formvalue.value.Email;

    this.crud.postemploye(this.employeemodelobj).subscribe(res => {
      console.log(res);
      alert("Emplyee added successfully");
      // click submiit button form close atomatically
      let ref = document.getElementById('cancel');
      ref?.click();
      //form all text box value clear karnsathi use
      this.formvalue.reset();
      //table immediatll reflicate for use
      this.getAllemplyee();
    },
      err => {
        alert("Emplyee Not added")
      })
  };

  //tabale data show method
  getAllemplyee() {
    this.crud.getemploye().subscribe(res => {
      console.log(res)
      this.emploeedata = res;
    })
  }


  //delete methd
  deleteemploee(data: any) {
    this.crud.deleteEmploye(data.id).subscribe(res => {
      alert("Emploee Deleted");
      this.getAllemplyee();
    }
    )
  }

  //click edit button tabale fill data
  onEdit(data: any) {
    this.showadd=false;
    this.showupdate=true;
    this.employeemodelobj.id = data.id;
    this.formvalue.controls['firstName'].setValue(data.firstName);
    this.formvalue.controls['lastName'].setValue(data.lastName);
    this.formvalue.controls['Email'].setValue(data.email);
  }
  //update Data
  updateEmploeDetails() {
    this.employeemodelobj.firstName = this.formvalue.value.firstName;
    this.employeemodelobj.lastName = this.formvalue.value.lastName;
    this.employeemodelobj.email = this.formvalue.value.Email;
    this.crud.updateemploye(this.employeemodelobj, this.employeemodelobj.id)
      .subscribe(res => {
        alert("update sucefully")
        // click submiit button form close atomatically
        let ref = document.getElementById('cancel');
        ref?.click();
        //form all text box value clear karnsathi use
        this.formvalue.reset();
        //table immediatll reflicate for use
        this.getAllemplyee();
      },
        err => {
          alert("record not updated")
        })
  }
   
  //only click addbuttn show add button same also edit

  clickaddemployee(){
    this.formvalue.reset();
    this.showadd=true;
    this.showupdate=false;
  }
}
