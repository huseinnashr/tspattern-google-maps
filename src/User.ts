import faker from "faker";
import { Mappable } from "./Mappable";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  icon: string = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
