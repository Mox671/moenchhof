import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetService {
  private API = 'https://api.openweathermap.org/data/2.5/weather?';
  constructor(public http: HttpClient) { }

  getWeatherDetails(isGeoLocation: boolean, location: string, APIKEY: string) : Observable <any> {
    if(isGeoLocation){
      return this.http.get(`${this.API}${location}&units=imperial&appid=${APIKEY}`);
    }else{
      return this.http.get(`${this.API}q=${location}&units=imperial&appid=${APIKEY}`);
    }
  }
}
