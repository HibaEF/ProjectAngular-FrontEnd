import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivraisonService } from 'src/app/core/services/livraison.service';
import { LivreurService } from 'src/app/core/services/livreur.service';
import { Cell, Img, PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { __await } from 'tslib';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-list-livraison',
  templateUrl: './list-livraison.component.html',
  styleUrls: ['./list-livraison.component.css']
})
export class ListLivraisonComponent implements OnInit {
  constructor(private livraisonService: LivraisonService,private livreurService: LivreurService,private router: Router,private activated:ActivatedRoute) { }
  livreur:Livreur;

   Livraison: any= [];

  ngOnInit(): void {
    this.loadLivraison()
    this.livreur=this.livreurService.currentLivreur;
    console.log(this.livreur)
  }
    loadLivraison()
    {
      this.activated.paramMap.subscribe(
        (params)=> {
          let id = params.get('id');
      
          this.livreurService.getListLivraisonById(id).subscribe(
        (data:any[])=> this.Livraison= data
      )
          }
      )

    }
  deliver(id:number)
  {
    console.log(this.livreur)
    this.livraisonService.deliverLivraison(id).subscribe();
    this.ngOnInit()

  }

 generatePDF(){
    let data:any = document.getElementById('livraisonpdf');
    html2canvas(data).then(canvas => {
        var imgData = canvas.toDataURL('image/png');
        var doc =new jsPDF('l','mm','a4');
        let imgHeight=canvas.height*250/canvas.width
        doc.addImage(imgData,'PNG',0,10,290,imgHeight)
        doc.save("livraison.pdf")
      
      });
}
}
