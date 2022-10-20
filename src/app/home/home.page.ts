import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private res;
  constructor(
    private weatherAPI: WeatherService,private router:Router
  ) {}
  
  ngOnInit(): void
  {
    this.getWeatherData();
  }
  getWeatherData()
  {
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res);
    });
  }
  btnClicked()
  {
    console.log('btn clicked');
      let d = {
      'hero': 'ironman',
      'villan':'thanos'
    }
   
    this.router.navigateByUrl('home2')
  }
  doRefresh(event)
  {
    console.log('Ion-Refresh running...');
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res);
      console.log('done reloading weather data');
      event.target.complete();
    });
  }
}
