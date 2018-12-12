import { Component, OnInit } from '@angular/core';
import { TreeviewdataService } from '../../../services/global/treeviewdata.service';

@Component({
  selector: 'app-toolbarwf',
  templateUrl: './toolbarwf.component.html',
  styleUrls: ['./toolbarwf.component.css']
})
export class ToolbarwfComponent implements OnInit {

  constructor(public treedata: TreeviewdataService) { }

  ngOnInit() {
  }
  edit() {

    let arr: any;
    arr = this.treedata.tree[0].items.splice(0, 1);
    console.log(this.treedata.tree[0].items);
    console.log(arr, 'const array');
    setTimeout(() => {
      this.treedata.tree[0].items.push(arr[0]);
      console.log(this.treedata.tree[0].items);
    }, 3000);

  }

  NewItem() {
    console.log(this.treedata.tree[0].items);
    const arr = { text: 'Test', items: [
      { text: 'Tables & Chairs' },
      { text: 'Sofas' },
      { text: 'Occasional Furniture' }
    ] };
    this.treedata.tree[0].items.push(arr);

  }




}
