import { Component, OnInit } from '@angular/core';
import { faTwitter,  faFacebookF, faInstagram, faYoutube, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  constructor() { }
  year = new Date().getFullYear()


  ngOnInit(): void {}

  
}
