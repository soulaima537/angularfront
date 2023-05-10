import { DevisFournisseur } from './../../../core/Model/devis-fournisseur';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';

@Component({
  selector: 'app-listdevis',
  templateUrl: './listdevis.component.html',
  styleUrls: ['./listdevis.component.scss']
})
export class ListdevisComponent implements OnInit {
Listdevisfournisseur:DevisFournisseur[];
devisFournisseur:DevisFournisseur;
idDevisfournisseur:any;
  constructor(private appeloffreservice:AppeloffreService , private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.appeloffreservice.getAllDevisFourniseur().subscribe(
      data => {this.devisFournisseur = data;console.log(data)},
      error => {  alert("error de recuperation liste devis fournisseur")}
    );
  }


  updateDevisFourniseur(idDevisfournisseur:Number){

    this.router.navigate(['/devisfournisseurs/devisfournisseur/update',idDevisfournisseur]);
  }
  detail(){
    this.router.navigate(['detaildevis'])
  }
  calcul(){
    this.router.navigate(['calcul'])
  }


  supprimer(idDevisFourniseur:number){
    if (window.confirm('Confirmer la supression'+idDevisFourniseur)){
  this.appeloffreservice.deleteDevisFourniseur(idDevisFourniseur)
  .subscribe(data =>{alert("suppression avec succes"); location.reload();},
   error => {alert('suppression erronée');console.log(error);})
  }
}


}
