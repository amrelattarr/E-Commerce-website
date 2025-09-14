import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from './services/brand.service';
import { Brand } from './models/brand.interface';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  private readonly brandService = inject(BrandService);

  brandsList:Brand[] = [];
  singleBrand: Brand | null = null; // modal state

  ngOnInit(): void {
    this.getAllBrands();
  }


  getAllBrands():void {
    this.brandService.getBrands().subscribe({
      next: (response) => {
        this.brandsList = response.data;
      }
    });
  }

  getSpecificBrandData(id:string):void {
    this.brandService.getSpecificBrand(id).subscribe({
      next: (response) => {
        this.singleBrand = response.data;
      }
    });
  }

  closeModal(): void {
    this.singleBrand = null;
  }

}
