import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { IconInitService } from './services/icon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottomBarComponent],
  host: {
    class: 'h-screen flex flex-col',
  },
  template: `
    <div class="">
      <router-outlet />
    </div>
    <bottom-bar class="fixed bottom-0 z-100" />
  `,
})
export class App {
  protected readonly title = signal('am-app');
  readonly iconService = inject(IconInitService);
}
