import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@nglibs/meta';

@Component({
  selector: 'app-vicc-detail',
  templateUrl: './vicc-detail.component.html',
  styleUrls: ['./vicc-detail.component.css']
})
export class ViccDetailComponent implements OnInit {
  joke: any;
  title: string;

  constructor(private route: ActivatedRoute, private dataServiceService: DataServiceService, private readonly meta: MetaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataServiceService.getJoke(params.id).subscribe(joke => {
        this.joke = joke.data;
        console.log(this.joke[0].cim);
        this.meta.setTitle(this.joke[0].cim);
        this.meta.setTag('og:locale', 'hu-HU');
        this.meta.setTag('og:type', 'article');
        this.meta.setTag('description', this.joke[0].tartalom);
        this.meta.setTag('og:description', this.joke[0].tartalom);
        this.meta.setTag('twitter:card', 'summary');
        this.meta.setTag('twitter:site', '@flickr');
        this.meta.setTag('twitter:title', this.joke[0].cim);
        this.meta.setTag('twitter:description', this.joke[0].tartalom);
        this.meta.setTag('twitter:image', 'https://viccek.herokuapp.com/assets/banana.png');
      });
    });



  }

}
