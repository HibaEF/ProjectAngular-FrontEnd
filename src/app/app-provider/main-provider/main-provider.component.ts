import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/core/model/provider';
import { ProviderService } from 'src/app/core/services/provider.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-main-provider',
  templateUrl: './main-provider.component.html',
  styleUrls: ['./main-provider.component.css']
})
export class MainProviderComponent implements OnInit {
  listProvider: Provider[];
  p:Provider;

  buttonValue: string;
  inputProvider: Provider;
  searchText:any;

  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit(): void {
    this.providerService.getListProviderService().subscribe(
      (data: Provider[]) => this.listProvider = data
    )


  }

  deletePro(provider:Provider){
    let i =this.listProvider.indexOf(provider);
    this.providerService.deleteProviderService(provider.id).subscribe(
      ()=>this.listProvider.splice(i,1)
    );
  }
}
