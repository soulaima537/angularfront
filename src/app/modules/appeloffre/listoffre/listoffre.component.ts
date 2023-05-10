import { Offre } from './../../../core/Model/offre';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-listoffre',
  templateUrl: './listoffre.component.html',
  styleUrls: ['./listoffre.component.scss']
})
export class ListoffreComponent implements OnInit {
Listoffre:Offre[];
offre:Offre;
idOffre:any;

  constructor(private appeloffreservice:AppeloffreService , private router:Router, private http: HttpClient) { }

  ngOnInit(): void {

      this.appeloffreservice.getAllOffre().subscribe(
        response=> {this.Listoffre=response;
                    console.log(response)},
              error => {  alert("error de recuperation liste devis fournisseur")}
      )


  }

  updateOffre(idOffre:number)
{
  this.router.navigate(['/offres/offre/update',idOffre]);
}

}
