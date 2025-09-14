import { Component, inject, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);

  cartDetails:Cart= {
    _id: '',
    cartOwner: '',
    products: [],
    createdAt: '',
    updatedAt: '',
    __v: 0,
    totalCartPrice: 0
  } 

  ngOnInit(): void {
    this.getLoggedUserData();
  }

  getLoggedUserData():void{
    this.cartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.cartDetails = res.data;
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }

  removeItem(id:string):void{
    this.cartService.removeSpecificCartItem(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.cartDetails = res.data;
        this.cartService.countNumber.set(res.numOfCartItems);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  updateCount(id:string, count:number):void{
    this.cartService.updateCartCount(id, count).subscribe({
      next:(res)=>{
        console.log(res)
        this.cartDetails = res.data;
        this.cartService.countNumber.set(res.numOfCartItems);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  clearCart():void{
    this.cartService.clearUserCart().subscribe({
      next:(res)=>{
        console.log(res)
        this.getLoggedUserData();
        this.cartService.countNumber.set(0);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
