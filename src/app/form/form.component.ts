import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../services/form-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data = {
    Fname: '',
    Lname: '',
    DOB: '',
    Gender: '',
    DetailsOfSiblings: '',
    Fname1: '',
    Lname1: '',
    FathersQualification: '',
    PhoneNumber: '',
    Email: '',
    FathersOccupation: '',
    Fname2: '',
    Lname2: '',
    MothersQualification: '',
    PhoneNumber1: '',
    Email1: '',
    MothersOccupation: '',
    Address: '',
    AddressLine2: '',
    City: '',
    Region: '',
    PostalZipCode: '',
    Country: '',
    PaymentDetails: '',
  };
  constructor(
    private formService: FormServiceService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

  }
  async handleForm() {
    try {
      const result = await this.formService.createUsers(this.data);
      this.router.navigate(['/table']);
    }
    catch (error) {
      console.error(error);
    }
  }




}
