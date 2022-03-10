import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Livraison } from 'src/app/core/model/livraison';
import { LivraisonService } from 'src/app/core/services/livraison.service';

@Component({
  selector: 'app-main-livraison',
  templateUrl: './main-livraison.component.html',
  styleUrls: ['./main-livraison.component.css'],
  providers: [DatePipe]
})
export class MainLivraisonComponent implements OnInit {

  Livraison: any = [];
  http: any;
  livraison: Livraison;
  currentLivraison: Livraison
  constructor(private livraisonService: LivraisonService, private router: Router, private activated: ActivatedRoute, private datePipe: DatePipe) { }

  date: any;

  ngOnInit(): void {
    this.activated.paramMap.subscribe(
      (params) => {
        let id = params.get('id');
        console.log(id)
        this.Livraison = this.livraisonService.getLivraisonServiceById(id);
        console.log("okk" + this.Livraison)

        this.livraisonService.getLivraisonServiceById(id).subscribe(
          (data: Livraison) => {
            this.livraison = data
            this.date = this.datePipe.transform(this.livraison.dateLivraisonDate, 'd,MMM yyyy');
          }
        )

      }
    )


  }

  //Get list of livraisons
  loadLivraisons() {
    return this.livraisonService.getListLivraisonService().subscribe((data: {}) => {
      this.Livraison = data
    })
  }


  pdfMaker() {
    let data: any = document.getElementById('livraisonpdf');
    html2canvas(data).then(canvas => {
      var imgData = canvas.toDataURL('image/png');
      var doc = new jsPDF('l', 'mm', 'a4');
      let imgHeight = canvas.height * 250 / canvas.width
      doc.addImage(imgData, 'PNG', 0, 10, 290, imgHeight)
      doc.save("livraison.pdf")

    });
  }

}
