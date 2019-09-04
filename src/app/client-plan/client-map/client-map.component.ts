import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRestaurantTable, RestaurantTableTypeEnum} from '../../interfaces/restaurant-table.interface';
import Konva from 'konva';
import {TouchHelperService} from '../../_services/touch-helper/touch-helper.service';

@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.sass']
})
export class ClientMapComponent implements OnInit {
  @Output() preview = new EventEmitter<IRestaurantTable>();
  @Input() tables: IRestaurantTable[];

  stage: Konva.Stage;
  mapLayer: Konva.Layer;
  tablesLayer: Konva.Layer;
  scale = 1;
  mapScale;
  lastDist = 0;

  constructor(private elRef: ElementRef,
              private touchS: TouchHelperService) {
  }

  ngOnInit() {
    const _self = this;
    this.stage = new Konva.Stage({
      draggable: true,
      dragBoundFunc: function(pos) {
        let x: number;
        let y: number;
        if (_self.scale > 1) {
          [x, y] = _self.countPosition(pos);
        } else {
          [x, y] = [this.absolutePosition().x, this.absolutePosition().y];
        }

        console.log(x, y);
        return {x, y};
      },
      scale: {
        x: this.scale,
        y: this.scale
      },
      width: window.innerWidth,
      height: window.innerHeight,
      container: 'table-map'
    });

    this.mapLayer = new Konva.Layer();

    this.stage.add(this.mapLayer);

    this.tablesLayer = new Konva.Layer();
    this.stage.add(this.tablesLayer);

    const image = new Image();
    image.src = './assets/resto.jpg';

    image.onload = () => {
      const scale = Math.min(this.stage.width() / image.width, this.stage.height() / image.height);
      this.mapScale = scale;
      // console.log((this.stage.width() - image.width * scale) / 2);
      // console.log((this.stage.height() - image.height * scale) / 2);
      this.stage.width(image.width * scale);
      this.stage.height(image.height * scale);

      const imageLayer = new Konva.Image({
        image,
        x: (this.stage.width() - image.width * scale) / 2,
        y: (this.stage.height() - image.height * scale) / 2,
        width: image.width * scale,
        height: image.height * scale
      });

      this.mapLayer.add(imageLayer);
      this.mapLayer.draw();
      this.drawTables();
    };

    this.stage.getContent().addEventListener('touchmove', (e: TouchEvent) => {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      // console.log(e.touches);

      if (touch1 && touch2) {
        const dist = this.touchS.getDistance(
          {
            x: touch1.clientX,
            y: touch1.clientY
          },
          {
            x: touch2.clientX,
            y: touch2.clientY
          }
        );

        if (!this.lastDist) {
          this.lastDist = dist;
        }

        this.scale = (this.stage.scaleX() * dist) / this.lastDist;
        this.scale = this.scale < 1 ? 1 : this.scale > 4 ? 4 : this.scale;
        this.stage.scale({
          x: this.scale,
          y: this.scale
        });
        this.stage.draw();
        this.lastDist = dist;
      }
    }, false);

    this.stage.getContent().addEventListener(
      'touchend',
      () => {
        this.lastDist = 0;
      },
      false
    );

    this.tablesLayer.on('click tap', (e) => {
      this.preview.emit(this.tables.find(table => table.id.toString() === e.target.name()));
    });
  }

  countPosition(pos: { x: number, y: number }) {
    let y: number;
    let x: number;

    if (pos.x > 0) {
      x = 0;
    } else if (Math.abs(pos.x) > (this.stage.width() * this.scale) - this.stage.width()) {
      x = -((this.stage.width() * this.scale) - this.stage.width());
    } else {
      x = pos.x;
    }

    if (pos.y > 0) {
      y = 0;
    } else if (Math.abs(pos.y) > (this.stage.height() * this.scale) - this.stage.height()) {
      y = -((this.stage.height() * this.scale) - this.stage.height());
    } else {
      y = pos.y;
    }

    return [x, y];
  }

  drawTables() {
    this.tables.forEach((table: IRestaurantTable) => {
      console.log(table);
      let _table;
      if (table.type === RestaurantTableTypeEnum.SQUARE || table.type === RestaurantTableTypeEnum.POLYGON) {
        _table = new Konva.Rect({
          x: table.position.x * this.mapScale,
          y: table.position.y * this.mapScale,
          width: table.position.width * this.mapScale,
          height: table.position.height * this.mapScale,
          strokeWidth: 1,
          stroke: '#000',
          fill: 'rgba(0,0,0,0.2)',
          name: table.id.toString(),
          rotation: table.position.rotate
        });
      } else if (table.type === RestaurantTableTypeEnum.ROUND) {
        _table = new Konva.Circle({
          x: table.position.x * this.mapScale,
          y: table.position.y * this.mapScale,
          // width: table.position.width,
          // height: table.position.height,
          strokeWidth: 1,
          stroke: '#000',
          fill: 'rgba(0,0,0,0.2)',
          name: table.id.toString(),
          radius: table.position.width / 2 * this.mapScale
        });
      }

      if (!!_table) {
        this.tablesLayer.add(_table);
        this.tablesLayer.draw();
      }

    });
  }
}
