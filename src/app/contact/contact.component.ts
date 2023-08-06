import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faPhone, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  form!: FormGroup;
  submitted = false;
  
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faPhone = faPhone;
  faMap = faLocationDot;
  faMail = faEnvelope;
  constructor(private formBuilder: FormBuilder, private dataService: DataService,public translate: TranslateService ) {
    translate.addLangs(['fr','en', 'ar']);
    translate.setDefaultLang('fr');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }


  contact() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      objet: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.contact();
  }
  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.dataService.contact(this.form.value)
        .subscribe((response) => {
            console.log(response);
            this.contact();
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

}
