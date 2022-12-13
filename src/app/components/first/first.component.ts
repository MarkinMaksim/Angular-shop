import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from '../enums/category-enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: number = 0;
  category: CategoryEnum[] = [];
  isAvailable: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
