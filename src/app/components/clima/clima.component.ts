import {Component, OnInit} from '@angular/core';
import {ClimaService} from "../clima.service";
import {Clima} from "../clima";

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  clima: Clima = {
    results: {
      city: 'default',
      time: 'default',
      condition_code: 0,
      description: 'default',
      currently: 'default',
      temp: 0
    }
  };

  imageCondition = '';
  imageConditionSource = [
    {
      name: "clear-day",
      values: [25, 27, 32, 34, 36, 44]
    },
    {
      name: "drizzle",
      values: [9, 11, 12]
    },
    {
      name: "thunderstorms-rain",
      values: [0, 1, 3, 4, 14, 37, 47]
    },
    {
      name: "cloudy",
      values: [26, , 28, 29, 30]
    }
  ];


  constructor(private service: ClimaService) {
  }

  ngOnInit(): void {
    this.service.carrega().subscribe((clima) => {
      this.clima = clima;
      console.log(clima);
      this.imageCondition = this.defineImageCondition();
    });

  }

  condicaoTempo(): string {
    if (this.clima.results.condition_code = 27) {
      return 'clima--tempo-limpo';
    }
    return 'clima--padrao';
  }

  diaOuNoite(): string {
    if (this.clima.results.currently == 'dia') {
      return 'clima--dia';
    }
    return 'clima--noite';
  }

  defineImageCondition(): string {
    let imageFileName = this.imageConditionSource.find(({values}) => values.find(element => this.clima.results.condition_code == element))?.name;
    return '/assets/imagens/' + imageFileName + '.svg';
  }

}
