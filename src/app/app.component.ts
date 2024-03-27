import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fet-t-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Travel_Project';
}
