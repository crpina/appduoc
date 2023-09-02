import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: any;


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
    this.usuario = this.activatedRoute.snapshot.paramMap.get("User") 
  }

}
