import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-hire-livreur',
  templateUrl: './hire-livreur.component.html',
  styleUrls: ['./hire-livreur.component.css']
})
export class HireLivreurComponent implements OnInit {
  livreur: Livreur[];
  lvr: Livreur;
  status:boolean;
  constructor(private livreurService : LivreurService,private router: Router) { }

  ngOnInit(): void {
    this.status=this.livreurService.status;
    this.lvr =  new Livreur();

  }
   save()
   {
     this.lvr.status=false
     this.livreurService.addListLivreurService(this.lvr).subscribe(
      ()=>this.router.navigate(['/espaceLivreur'])
    )
   }
}
