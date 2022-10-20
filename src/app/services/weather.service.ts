import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  )
  { }
  getWeatherData(): Observable<any>
  {
    let lat = -37.840935;
    let lon = 144.946457;
    let apiId = 'a1a05fdf813f4c15e5a87f9ea29e6eba';
    let queryString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&units=metric&lon=${lon}&exclude=minutely,hourly,alert&appid=${apiId}`;
    return this.http.get(queryString);
  }
}
