


import { Component, ElementRef, OnInit } from '@angular/core';

import { StencilService } from '../../services/servicesRappid/stencil-service';
import { ToolbarService } from '../../services/servicesRappid/toolbar-service';
import { InspectorService } from '../../services/servicesRappid/inspector-service';
import { HaloService } from '../../services/servicesRappid/halo-service';
import { KeyboardService } from '../../services/servicesRappid/keyboard-service';
import RappidService from '../../services/servicesRappid/kitchensink-service';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.css']
})

export class WorkFlowComponent implements OnInit {

  private rappid: any;

  title = 'Rappid App';

  constructor(private element: ElementRef) {

  }

  ngOnInit() {

    this.rappid = new RappidService(
      this.element.nativeElement,
      new StencilService(),
      new ToolbarService(),
      new InspectorService(),
      new HaloService(),
      new KeyboardService()
    );
    this.rappid.startRappid();
  }
}
