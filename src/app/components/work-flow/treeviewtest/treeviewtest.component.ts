import { Component, OnInit } from '@angular/core';
import { TreeviewdataService } from '../../../services/global/treeviewdata.service';
import { SelectableSettings } from '@progress/kendo-angular-treeview';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-treeviewtest',
  templateUrl: './treeviewtest.component.html',
  styleUrls: ['./treeviewtest.component.css']
})
export class TreeviewtestComponent implements OnInit {
  public data: any[] = this.treedata.tree;

  public expandedKeys: any[] = [];
  public selectedKeys: any[] = [];

  public selection: SelectableSettings = { mode: 'single' };

  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);

  constructor(public treedata: TreeviewdataService) { }

  ngOnInit() {

  }
  test() {
    console.log(this.selectedKeys);
    console.log(this.treedata.tree[0].items[1].text);
    this.treedata.tree[0].items[1].text = 'Loans' ;
  }

}
