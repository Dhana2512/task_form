import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../services/form-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  users: any = [];
  constructor(
    private formService: FormServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retriveformuserlist();


  }

  //retrive the user list
  async retriveformuserlist() {
    try {
      const result = await this.formService.retriveUsers();
      this.users = result;
      console.log(result)
    }
    catch (error) {
      console.error(error);
    }
  }

  //delete the user list
  async delete(id) {
    try {
      const result = await this.formService.deleteUserList(id);
      this.users = result;
      console.log(result)
    }
    catch (error) {
      console.error(error);
    }
  }

  //update the user list

  async update(user) {
    this.router.navigate(['/form'])
  }

}
