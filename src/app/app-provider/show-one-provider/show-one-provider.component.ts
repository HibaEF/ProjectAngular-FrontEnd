import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/core/services/provider.service';
import { Provider } from 'src/app/core/model/provider';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-show-one-provider',
  templateUrl: './show-one-provider.component.html',
  styleUrls: ['./show-one-provider.component.css']
})
export class ShowOneProviderComponent implements OnInit {

  constructor(private providerService:ProviderService, private router: Router, private activated:ActivatedRoute) { }
  provider:Provider;
  ngOnInit(): void {


    this.provider=this.providerService.CurrentProvider;
    this.activated.paramMap.subscribe(
      (params)=> {
        let id = params.get('id');
        this.providerService.getProviderServiceById(id).subscribe(
          (data) => this.provider = data
        )
      }
    )
  }

  fixProvider(){
    this.router.navigate(['/listProvider']);
  }

}
