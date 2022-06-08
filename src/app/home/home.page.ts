import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  

  shifts = [];

  total = 0;

  shiftForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private dataServ: DataService) {
    this.shiftForm = this.formBuilder.group({
      date: [''],
      hours: ['']
   })
   this.getShifts();
   this.getHours();
  }

  getShifts(){
    this.shifts = this.dataServ.getShifts();
  }

  async addShift(){
    await this.dataServ.addShift(this.shiftForm.value.date, this.shiftForm.value.hours);
    this.getShifts();
    this.getHours();
  }

  async delete(id){
    this.dataServ.removeShift(id)
    this.getShifts();
    this.getHours();
  }

  getHours(){
    this.shifts.forEach(el => {
      this.total += el.hours
      console.log("Get hour " + this.total);
      return this.total
    })
  }

  onSubmit(){ 
    this.addShift();
  }


}
