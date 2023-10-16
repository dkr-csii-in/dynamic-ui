import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DataService, FormSettings } from 'src/app/services/data.service';

@Component({
  selector: 'app-apply-service',
  templateUrl: './apply-service.component.html',
  styleUrls: ['./apply-service.component.css']
})
export class ApplyServiceComponent implements OnInit {
  private previousUrl?: string = undefined;
  private currentUrl?: string = undefined;

  settings?: FormSettings;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = (f, c) => false;
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  async ngOnInit() {
    const serviceType = this.activeRoute.snapshot.paramMap.get('service-type');
    if (!serviceType) {
      if (this.previousUrl) {
        this.router.navigate([this.previousUrl]);
      } else {
        this.router.navigate(['/sec']);
      }
    }
    if (serviceType) {
      const settings = await firstValueFrom(this.dataService.getServiceSetting(serviceType));
      this.settings = settings;
    }

  }

}
