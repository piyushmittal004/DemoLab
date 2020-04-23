import { Component, OnInit } from '@angular/core';
import { CellData } from '../CellData';
import { RackServiceService } from '../rack-service.service';
import { RackSample } from '../rack-sample';

@Component({
  selector: 'app-rack-enter',
  templateUrl: './rack-enter.component.html',
  styleUrls: ['./rack-enter.component.css']
})
export class RackEnterComponent implements OnInit {

  constructor(private cell:CellData,private service:RackServiceService) {
    this.select_box=null;
    this.select_can=null;
    this.select_cell=null;
    this.select_rack=null;
    this.vails=false;
    this.search=false;
   }
  select_can;
  select_rack;
  select_box;
   select_cell=new Array();
  vails:boolean;
  search:boolean;
  sample;
  ngOnInit() {
  }

  onSubmit()
  {
    this.cell.canid=this.select_can;
    this.cell.canid=this.select_rack;
    this.cell.boxid=this.select_box;
    this.cell.cellid=this.select_cell;
    this.cell.sampleno=this.sample;
    this.service.sendRackData(this.cell).subscribe();
    alert("You have entered "+"Canister "+this.select_can+" Cells "+ this.select_cell +" Sample No "+this.sample);
    this.select_box=null;
    this.select_can=null;
    
    this.select_cell=null;
    this.select_rack=null;
  }

  onSearch()
  {
    this.service.searchRack(this.sample).subscribe(response => this.fetchData(response));
    alert('OK!!');
  }

  fetchData(response:RackSample[])
  {
     console.log(response);
     alert(response);
  }

}
