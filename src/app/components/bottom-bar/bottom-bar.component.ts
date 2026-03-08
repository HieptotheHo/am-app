import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { filter, map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'bottom-bar',
  host: { class: 'w-screen flex justify-between border-gray-300 border-t bg-white px-2 z-100' },
  template: `
    @for(menu of menus; track menu.title) {
    <a [routerLink]="menu.url" class="hover:bg-gray-200 rounded-lg px-2">
      <div class="flex flex-col justify-center items-center size-15 relative">
        @if(currentPath().includes(menu.url)) { } @else {
        <mat-icon [svgIcon]="menu.icon" style="color: #808080" />

        }
        <p class="text-xs">{{ menu.title }}</p>
        @if(currentPath().includes(menu.url)) {
        <div class="absolute bottom-0 w-4/7 h-1 rounded-full bg-black"></div>
        }
      </div>
    </a>
    }
  `,
  styles: `
  .solid svg {
    color: '#f00'
  }
  `,
  imports: [RouterLink, MatIcon],
})
export class BottomBarComponent {
  readonly menus = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home',
    },
    {
      title: 'Expect',
      url: 'expect',
      icon: 'message-heart-circle',
    },
    {
      title: 'Wishlist',
      url: 'wishlist',
      icon: 'list',
    },
    {
      title: 'Rules',
      url: 'rules',
      icon: 'alert-triangle',
    },
  ];
  readonly router = inject(Router);
  readonly currentPath$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map((e) => e.urlAfterRedirects)
  );
  readonly currentPath = toSignal(this.currentPath$, { initialValue: '' });

  constructor() {
    effect(() => {
      console.log(this.currentPath());
    });
  }
}
