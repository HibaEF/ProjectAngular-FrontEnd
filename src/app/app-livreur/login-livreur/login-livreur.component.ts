import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from 'src/app/core/model/livreur';
import { LivreurService } from 'src/app/core/services/livreur.service';

@Component({
  selector: 'app-login-livreur',
  templateUrl: './login-livreur.component.html',
  styleUrls: ['./login-livreur.component.css']
})
export class LoginLivreurComponent implements OnInit {
  lvr:any
  livreur:Livreur

  constructor(private livreurService: LivreurService,private router: Router) { }
  ngOnInit(): void {
    this.livreur=  new Livreur();

  }
  
  connect(livreur:Livreur)
  {
    this.router.navigate(['/list-livraison/'+19])
    this.livreur=this.livreurService.currentLivreur
    localStorage.setItem('adresse', livreur.adresseLiv);
    localStorage.setItem('mdp',livreur.mdpLiv);
    let email=localStorage.getItem('adresse')
    this.livreurService.getByEmail(livreur.adresseLiv).subscribe(
      (data:Livreur)=>
      {
             this.lvr=data
             console.log(data)
      }
    )
  }
}
