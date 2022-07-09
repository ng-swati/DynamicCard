import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars = [
    {
      id:1,
      name:"Honda Civic",
      price:250000,
      color:"black",
      image:"assets/coding.svg",
      bgColor:false
    },
    {
      id:2,
      name:"Scorpion",
      price:500000,
      color:"Red",
      image:"assets/coding.svg",
      bgColor:true
    },
   
  ]
 
  cardWidth1 = "15"
	cardFontSize = "15px"
	cardBorder ="2px solid black"
	cardTextStyle = { 
					   "font-family":"Lucida Grande",
					   "color":"red"
						}
}
