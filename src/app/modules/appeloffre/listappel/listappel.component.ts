import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppeloffreService } from 'src/app/core/services/appeloffre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appeloffre } from 'src/app/core/Model/appeloffre';
import { error } from 'console';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DevisFournisseur } from 'src/app/core/Model/devis-fournisseur';

@Component({
  selector: 'app-listappel',
  templateUrl: './listappel.component.html',
  styleUrls: ['./listappel.component.scss']
})
export class ListappelComponent implements OnInit {
  ListAppeloffre:Appeloffre[];
 idAppeloffre:any;
  appeloffre:Appeloffre ;
  devisFournisseur:DevisFournisseur;
  newdevis = { } as any ;
  iddemandeachat:any;
  etat:number;
  constructor(private appeloffreservice:AppeloffreService , private router:Router , private http:HttpClient) { }

  ngOnInit(): void {

    this.appeloffreservice.getAllAppelOffre().subscribe(
      data => {this.ListAppeloffre = data;console.log(data)},
      error => {  alert("error de recuperation liste appel d'offre")}
    );
//this.Accept() ;
  }
  Creerdevis(idappel:number){
    console.log(this.newdevis)
    this.appeloffreservice.addAndassignAppelAndUserToDevis(this.newdevis,idappel)
    this.router.navigate(['devisfournisseur'])
  }
  getAppelOffreByEtat(etat:number){
    this.router.navigate(['/getbyetat',etat]);

  }

  updateAppelOffre(idAppeloffre:number){
    this.router.navigate(['/appeloffres/Appeloffre/update',idAppeloffre] );
  }

  exportPDF(idAppel: number) {
            console.log('PDF called')

    this.appeloffreservice.exportPDF(idAppel).subscribe(
     (data: Blob) => {const blob = new Blob([data], { type: 'application/pdf' });
     const url = URL.createObjectURL(blob);
     const link = document.createElement('a');
     link.href = url;
     link.download = 'export.pdf';
     link.click();
     URL.revokeObjectURL(url);
   }, error => {
     console.log(error);
   });



  }



}
