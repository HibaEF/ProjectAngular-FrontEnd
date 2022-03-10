import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Livraison } from 'src/app/core/model/livraison';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {
  @Input() livraison: Livraison;
  @Output() pdfGenerator = new EventEmitter<Livraison>();
  constructor() { }

  ngOnInit(): void {
      
  }

  pdfEvent()
  {
      this.pdfGenerator.emit(this.livraison);
  }

}
