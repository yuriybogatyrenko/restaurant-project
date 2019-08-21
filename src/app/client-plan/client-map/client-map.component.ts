import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {IRestaurantTable} from '../../interfaces/restaurant-table.interface';
import Konva from 'konva';
import {TouchHelperService} from '../../_services/touch-helper/touch-helper.service';

@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.sass']
})
export class ClientMapComponent implements OnInit {
  @Output() preview = new EventEmitter<IRestaurantTable>();

  stage: Konva.Stage;
  layer: Konva.Layer;
  scale = 4;

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

    this.layer = new Konva.Layer();

    this.stage.add(this.layer);
    const image = new Image();
    image.src = './assets/resto.jpg';

    image.onload = () => {
      const scale = Math.min(this.stage.width() / image.width, this.stage.height() / image.height);
      const imageLayer = new Konva.Image({
        image,
        x: 0,
        y: 0,
        width: image.width * scale,
        height: image.height * scale
      });

      this.stage.width(image.width * scale);
      this.stage.height(image.height * scale);

      this.layer.add(imageLayer);
      this.layer.draw();
    };

    let lastDist;
    this.stage.getContent().addEventListener('touchmove', (e: TouchEvent) => {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];

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

        if (!lastDist) {
          lastDist = dist;
        }

        this.scale = (this.stage.scaleX() * dist) / lastDist;

        this.stage.scaleX(this.scale);
        this.stage.scaleY(this.scale);
        this.stage.draw();
        lastDist = dist;
      }
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
}
