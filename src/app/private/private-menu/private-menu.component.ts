import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MenuService, ServiceTypes } from 'src/app/services/menu.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.css']
})
export class PrivateMenuComponent implements OnInit {
  services: ServiceTypes[] = [];
  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  async ngOnInit() {
    const services = await firstValueFrom(this.menuService.getServices());
    this.services = services;
  }

  navigeteTo(serviceType: string) {
    this.router.navigate(['/sec/apply-service', serviceType]);
  }

}
