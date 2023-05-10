import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-creatoffre',
  templateUrl: './creatoffre.component.html',
  styleUrls: ['./creatoffre.component.scss']
})
export class CreatoffreComponent implements OnInit {

  constructor(private appeloffreservice:AppeloffreService , private router:Router) { }

  ngOnInit(): void {
  }

}
