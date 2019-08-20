import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnChanges,
  OnInit,
  ViewChild
} from '@angular/core';
import {TablesMapService} from '../../_services/tables-map.service';
import Konva from 'konva';
import {TransformerConfig} from 'konva/types/shapes/Transformer';

@Component({
  selector: 'app-canvas-map',
  templateUrl: './canvas-map.component.html',
  styleUrls: ['./canvas-map.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasMapComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('canvas', { static: false }) canvas: HTMLCanvasElement;
  fill = 'rgba(0,0,0, 0.2)';
  stroke = '#000';
  selectedTable;
  stage;
  image;
  imageLayer;

  @HostListener('document:keydown', ['$event'])
  onKeypress(e: KeyboardEvent) {
    if (this.selectedTable && (e.keyCode === 8 || e.keyCode === 46)) {
      this.tablesMapS.deleteTable(this.selectedTable);
      delete this.selectedTable;
    }
  }

  constructor(private tablesMapS: TablesMapService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addCircle();
    this.addTransformer();
  }

  addCircle() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.stage = new Konva.Stage({
      container: 'container',
      width,
      height
    });

    this.imageLayer = new Konva.Layer();
    this.stage.add(this.imageLayer);

    const layer = new Konva.Layer();
    layer.zIndex(2);
    this.stage.add(layer);

    const roundTableButton = new Konva.Circle({
      x: 50,
      y: 50,
      radius: 30,
      fill: this.fill,
      strokeWidth: 1,
      stroke: this.stroke,
      name: 'roundTableButton'
    });
    layer.add(roundTableButton);

    const polygonTableButton = new Konva.Rect({
      x: 100,
      y: 20,
      width: 100,
      height: 60,
      strokeWidth: 1,
      fill: this.fill,
      stroke: this.stroke,
      name: 'polygonTableButton'
    });
    layer.add(polygonTableButton);

    const squareTableButton = new Konva.Rect({
      x: 220,
      y: 20,
      width: 60,
      height: 60,
      strokeWidth: 1,
      fill: this.fill,
      stroke: this.stroke,
      name: 'squareTableButton'
    });
    layer.add(squareTableButton);

    layer.draw();

    this.stage.on('click tap', (e) => {
      // if click on empty area - remove all transformers
      if (e.target.hasName('squareTableButton')) {
        this.addTable(layer, 'square');
      } else if (e.target.hasName('polygonTableButton')) {
        this.addTable(layer, 'polygon');
      } else if (e.target.hasName('roundTableButton')) {
        this.addTable(layer, 'round');
      }

      if (e.target === this.stage) {
        delete this.selectedTable;
        this.stage.find('Transformer').destroy();
        layer.draw();
        return;
      }
      // do nothing if clicked NOT on our rectangles
      if (!e.target.hasName('rect')) {
        return;
      }
      // remove old transformers
      // TODO: we can skip it if current rect is already selected
      this.stage.find('Transformer').destroy();

      // create new transformer
      this.selectedTable = e.target;

      const trConf: TransformerConfig = {
        borderStrokeWidth: 0,
      };

      const tr = new Konva.Transformer(trConf);
      layer.add(tr);
      tr.attachTo(e.target);
      layer.draw();
    });
  }

  addTable(layer, type: 'square' | 'round' | 'polygon') {
    this.tablesMapS.addTable(layer, type, {});
  }

  addTransformer() {
    // const tr = new Konva.Transformer();

  }

  selectPlan(event: { target: HTMLInputElement }) {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      this.image = new Image();

      this.image.onload = (a) => {
        const scale = Math.min((this.stage.width() / this.image.width), (this.stage.height() / this.image.height));
        this.imageLayer.children.destroy();
        const image = new Konva.Image({
          x: this.stage.width() <= this.image.width * scale ? 0 : Math.abs((this.stage.width() - this.image.width * scale)) / 2,
          y: this.stage.height() <= this.image.height * scale ? 0 : Math.abs((this.stage.height() - this.image.height * scale)) / 2,
          image: this.image,
          width: this.image.width * scale,
          height: this.image.height * scale
        });

        this.imageLayer.add(image);
        this.imageLayer.draw();
      };

      this.image.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  updateTransformer() {

  }

  ngOnChanges(changes) {
    console.log('changes', changes);
  }

}
