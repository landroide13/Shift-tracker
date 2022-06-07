import { Injectable } from '@angular/core';
import { Shift } from '../models/shift';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Shifts: Shift[] = [
    {id: 1, date: '13-10-2022', hours: 7}
  ];

  constructor() { }


  getShifts(){
    return [...this.Shifts]
  }

  addShift(date: string, hours: number){
    this.Shifts.push({
      id: this.Shifts.length + 1,
      date,
      hours
    })
    console.log(this.Shifts);
  }

  removeShift(id){
    this.Shifts = this.Shifts.filter(sh => {
      return sh.id !== id
    })
    console.log('Removed !!')
  }


}
