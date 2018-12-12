import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeviewdataService {
  
  public tree: any[] = [
    {
      text: 'POC Project', items: [
        {
          text: 'Furniture', items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' }
          ]
        },
        {
          text: 'Decor', items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' }
          ]
        }
      ]
    }

  ];

  constructor() { }
}
