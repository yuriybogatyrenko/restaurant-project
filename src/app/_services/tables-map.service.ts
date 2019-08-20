import {Injectable} from '@angular/core';
import Konva from 'konva';

@Injectable({
  providedIn: 'root'
})
export class TablesMapService {

  constructor() {
  }

  deleteTable(table) {
    const layer = table.parent;
    table.destroy();
    layer.find('Transformer').destroy();
    layer.draw();
  }

  addTable(layer, type, options?) {
    let table;
    const OPTIONS = {
      fill: 'rgba(0,0,0,0.2)',
      stroke: '#000',
      ...options
    };

    if (type === 'square' || type === 'polygon') {
      const width = type === 'square' ? 90 : 150;
      const height = 90;
      table = new Konva.Rect({
        x: 250,
        y: 100,
        width,
        height,
        strokeWidth: 1,
        fill: 'rgba(0,0,0,0.2)',
        stroke: '#000',
        name: 'rect',
        draggable: true,
        strokeScaleEnabled: false,
        ...OPTIONS
      });
    } else if (type === 'round') {
      table = new Konva.Circle({
        x: 250,
        y: 100,
        radius: 75,
        strokeWidth: 1,
        name: 'rect',
        draggable: true,
        strokeScaleEnabled: false,
        ...OPTIONS
      });
    }


    layer.add(table);
    layer.draw();
  }
}
