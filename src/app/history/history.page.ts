import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  shifts = [];

  constructor(private dataServ: DataService) { }

  getShifts(){
    this.shifts = this.dataServ.getShifts()
  }

  ngOnInit() {
    this.getShifts()
  }

}
