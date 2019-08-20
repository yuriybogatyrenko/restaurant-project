import {Component} from '@angular/core';
import {IRestaurantTable} from '../interfaces/restaurant-table.interface';

@Component({
  selector: 'app-restaurant-plan',
  templateUrl: './restaurant-plan.component.html',
  styleUrls: ['./restaurant-plan.component.sass']
})
export class RestaurantPlanComponent {

  image = new Image();

  onSelectTable(table: IRestaurantTable) {
    console.log(table);
  }

  selectPlan(event: { target: HTMLInputElement }) {
    /*const reader = new FileReader();
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
    reader.readAsDataURL(event.target.files[0]);*/
  }

}
