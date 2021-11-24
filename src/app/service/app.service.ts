import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly TDX_API_DOMAIN:string = "https://ptx.transportdata.tw/MOTC";
  private readonly GET_CITY_ROUTE_API:string = "/v2/Bus/Route/City";
  private readonly GET_STOP_OF_ROUTE_API:string = "/v2/Bus/StopOfRoute/City";
  private readonly GET_ESTIMATED_TIME_OF_ARRIVAL_STREAM_API:string = "/v2/Bus/EstimatedTimeOfArrival/Streaming/City";
  private readonly GET_ESTIMATED_TIME_OF_ARRIVAL_API:string = "/v2/Bus/EstimatedTimeOfArrival/City";

  constructor(private $http: HttpClient) { }

  public getCityRouteData(city:string, keyword:string){
    let url = `${this.TDX_API_DOMAIN}${this.GET_CITY_ROUTE_API}/${city}/${keyword}`;
    return this.$http.get(url);
  }

  public getRouteStopData(city:string, routeUID:string){
    let url = `${this.TDX_API_DOMAIN}${this.GET_STOP_OF_ROUTE_API}/${city}?$filter=RouteUID eq '${routeUID}'`;
    return this.$http.get(url);
  }

  public getRouteEstimatedTimeStreamData(city:string, routeUID:string){
    let url = `${this.TDX_API_DOMAIN}${this.GET_ESTIMATED_TIME_OF_ARRIVAL_STREAM_API}/${city}?$filter=RouteUID eq '${routeUID}'&$format=JSON`;
    return this.$http.get(url);
  }

  public getRouteEstimatedTimeData(city:string, routeUID:string){
    let url = `${this.TDX_API_DOMAIN}${this.GET_ESTIMATED_TIME_OF_ARRIVAL_API}/${city}/?$filter=RouteUID eq '${routeUID}'&$format=JSON`;
    return this.$http.get(url);
  }
}
