import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieServie:SerieService) { }
  series: Array<Serie> =[];
  promedio:number=0;
  
  getSeries(){
    this.serieServie.getSeries().subscribe(series => {
      this.series = series;
      this.promedioTemporadas(series);
      });
  }
  
  promedioTemporadas(series: Serie[]){
    let totalTemporadas:number=0;
    for(let index=0; index<series.length;index++){
        let serie: Serie= series[index];
        totalTemporadas+=serie.seasons;
    }
    this.promedio=totalTemporadas/series.length;

}

  ngOnInit() {
    this.getSeries();
    this.promedioTemporadas(this.series);
  }

}
