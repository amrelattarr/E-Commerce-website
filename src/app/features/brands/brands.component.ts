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
        console.log(response.data);
        this.brandsList = response.data;
      },
      error: (error) => {
        console.error('Error fetching brands:', error);
      }
    });
  }

  getSpecificBrandData(id:string):void {
    this.brandService.getSpecificBrand(id).subscribe({
      next: (response) => {
        console.log(response.data);
        this.singleBrand = response.data;
      },
      error: (error) => {
        console.error('Error fetching specific brand:', error);
      }
    });
  }

  closeModal(): void {
    this.singleBrand = null;
  }

}
