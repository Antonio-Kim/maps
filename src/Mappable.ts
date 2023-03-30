// Instructions to every other class
// on how they can be an argument to 'addMarker'

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}
