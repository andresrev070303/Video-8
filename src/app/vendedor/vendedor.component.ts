import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendedorService } from '../services/vendedor.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule, ],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.scss'
})
export class VendedorComponent implements OnInit{
  
  constructor (private vendedor:VendedorService, private router:Router) {}
  showLogin=false;
  ngOnInit(): void {
  }
  
  signUp(data:SignUp):void{
    console.warn(data);
    this.vendedor.userSignUp(data).subscribe((result) =>{
      if (result){
        this.router.navigate(['vendedor-inicio'])
      }
    })
  }

}
