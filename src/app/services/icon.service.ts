import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const APP_ICONS = [
  { name: 'home', url: 'assets/icons/home.svg' },
  { name: 'message-heart-circle', url: 'assets/icons/message-heart-circle.svg' },
  { name: 'list', url: 'assets/icons/list.svg' },
  { name: 'alert-triangle', url: 'assets/icons/alert-triangle.svg' },
];

@Injectable({ providedIn: 'root' })
export class IconInitService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    APP_ICONS.forEach((icon) => {
      iconRegistry.addSvgIcon(icon.name, sanitizer.bypassSecurityTrustResourceUrl(icon.url));
    });
  }
}
