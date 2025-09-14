import { Component, inject, OnInit } from '@angular/core';
import { Category } from '../../Core/models/category.interface';
import { RouterLink } from '@angular/router';
import { CategoriesService } from '../../Core/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  private readonly categoriesService = inject(CategoriesService);

  categoriesList: Category[] = []

  ngOnInit(): void {
    this.getAllCategoriesData();
  }
  getAllCategoriesData(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.categoriesList = response.data;
      }
    })
  }

}
