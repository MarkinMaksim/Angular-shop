import { Component, destroyPlatform, Inject, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/services/config-options.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { GeneratorService } from 'src/app/services/generator';
import { generatedString, GeneratorFactory } from 'src/app/services/generator.factory';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CategoryEnum } from '../enums/category-enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    { provide: ConstantsService, useValue: { App: "TaskManager", Ver: "1.0", API_URL: "http://..." } },
    { provide: ConfigOptionsService },
    { provide: generatedString, useFactory: GeneratorFactory(5), deps:[GeneratorService] },
    { provide: LocalStorageService, useValue: {} }
  ]
})
export class FirstComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: number = 0;
  category: CategoryEnum[] = [];
  isAvailable: boolean = false;

  constructor(
    @Optional() public constantService: ConstantsService,
    @Optional() public configService: ConfigOptionsService,
    @Optional() @Inject(generatedString) public generatorString: string,
    @Optional() public localStorage: LocalStorageService)
    { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
