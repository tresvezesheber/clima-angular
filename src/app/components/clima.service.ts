import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Clima} from "./clima";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private readonly API = 'https://api.hgbrasil.com/weather?key=????e&woeid=457583&format=json-cors'
  //private readonly API = 'https://api.hgbrasil.com/weather?key=????e&woeid=440202&format=json-cors'

  constructor(private http: HttpClient) { }

  carrega(): Observable<Clima> {
    return this.http.get<Clima>(this.API)
  }
}
