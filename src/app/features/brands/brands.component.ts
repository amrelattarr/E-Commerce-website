import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from './services/brand.service';
import { Brand } from './models/brand.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-brands',
  imports: [FormsModule, SearchPipe, NgxPaginationModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  private readonly brandService = inject(BrandService);

  brandsList:Brand[] = [];
  singleBrand: Brand | null = null;
  text:string = '';
  pageSize!: number;
  p!: number;
  total!: number;

  ngOnInit(): void {
    this.getAllBrands();
  }


  getAllBrands(pageNumber:number = 1):void {
    this.brandService.getBrands(pageNumber).subscribe({
      next: (response) => {
        this.brandsList = response.data;
        this.pageSize = response.metadata.limit;
        this.p= response.metadata.currentPage;
        this.total = response.results;
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
