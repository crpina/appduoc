import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrgenerado',
  templateUrl: './qrgenerado.page.html',
  styleUrls: ['./qrgenerado.page.scss'],
})
export class QrgeneradoPage implements OnInit {

  content_visibility = '';
  
  ramoid: any;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

  ionViewDidEnter(){

    this.ramoid = this.activedRoute.snapshot.paramMap.get('ramoid')!;
    console.log("entre:" + this.ramoid);

  }


}
