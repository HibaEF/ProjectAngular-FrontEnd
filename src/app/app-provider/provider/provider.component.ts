import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { Provider } from 'src/app/core/model/provider';


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  @Input()provider : Provider;
  @Output() deleteNotif =new EventEmitter<Provider>();
  constructor() { }

  ngOnInit(): void {
  }
delete(){
  this.deleteNotif.emit(this.provider);
}
}
