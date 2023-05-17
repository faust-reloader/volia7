import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<header class="w3-display-container">\n' +
  '    <img class="w3-image" src="assets/kokan/kokan500s.jpg" alt="Комбайн для уборки ягод">\n' +
  '    <h1 class="w3-wide w3-display-middle w3-padding-large w3-text-white w3-black w3-opacity">\n' +
  '        <span class="w3-margin-left w3-margin-right"> {{ message }} </span>\n' +
  '    </h1>\n' +
  '</header>',
})

export class HeaderComponent {
  @Input() message: string = '';
}
