import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-projer',
  templateUrl: './projer.component.html',
  styleUrls: ['./projer.component.css']
})
export class ProjerComponent {
  faGithub = faGithub;
  
  constructor(public translate: TranslateService ) {
    translate.addLangs(['fr','en', 'ar']);
    translate.setDefaultLang('fr');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
