import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-sponsors-page',
  standalone: true,
  imports: [CarouselComponent,NavigationComponent],
  templateUrl: './sponsors-page.component.html',
  styleUrl: './sponsors-page.component.css',
  providers: [ThemeService],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsPageComponent {
  @ViewChild(CarouselComponent) car?:CarouselComponent;
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  photos:any[]=[];
  numOfSlides:number=4;
  innerWidth:any;

  constructor(private themeService: ThemeService){}
  
  ngOnInit(){
    this.getPhotos();
    this.innerWidth = window.innerWidth;  
    
    if(this.innerWidth>1300){
      this.numOfSlides=4;
    }
    else if(this.innerWidth>900){
      this.numOfSlides=3;
    }
    else if(this.innerWidth>600){
      this.numOfSlides=2;
    }
    else {
      this.numOfSlides=1;
    }

    const themePreference = sessionStorage.getItem('theme');

    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else if(themePreference === 'dday'){
      this.themeService.setDDayTheme();
    }
  }

  getPhotos(){
    for(let i=0;i<20;i++){
    this.photos.push({src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADECAMAAABDV99/AAAAllBMVEX////mHCrkAADlABflABrmGCfmFCTlABXlDiDlABHlABDmFSXlCB397u/+9/j/+/v73N796uvwiI7zm6DwhIr85Ob61df4yMv2t7v3wMPoMT31rrLudXzvfYPpP0r85+jtZm7nIC/zoKXnKjfqSVP60dT3vMDrWWL0qKzqS1Xub3bpOUT0pKnxjpTrUlvwhozxlJnsX2jhQ9epAAANBElEQVR4nO2baWOiyhKGWZpulmZRVMAVggYDavT//7nbVY1KJpk55yQZcz/U82UiItBFLW8VjGEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ/29E2bk8nZr9Nx0uWYyXq/1G/TUt0tVydS42v9kxiQcXMf2m03+CZFIz5krh+e03HC08bF3b9i2LH85rbjMpJbOdpni3Y5R2UnTh7eMkfrfLg5g1nnQcaa9X47m1+OrRRhPX5lxUy/2ry4QvhO06pmk63Ovyt3vmphD11rqaZrSeffXcn2TT+q5punyZwAdWfu1o0VEwx7HXarXZnAXrbLZbtBUDI5iB/7K77xm2FpdjY2f12zJ++NqpP80+kOoWiUbfgY3ZfOloeS2UOc2n2IjH1jqbn3DrKJ3baATur0b9nsmacfPZMM5+BB/js7X80pk/zaj01LUFMsVPu1NtT75ytFYEpika5U9hY40joz7134TnwAUbmKw+4JKLivNKmT2el/Axe7Ga6CsL+TTZXLmA6dYZftq5rsN2//CTP1DU6FBHldSmc6bucDTIrtPGR0eAIImNhQx4DZGXW+rcs1b6Lz9jgYPk6qLkuq9FJ9eU5eePdgQXCIRaupFULgTWzHoafL+X2hH8k3HwHF7jWcd5/HxxpXf6GQus8L7Il74qhZXDzU9X5ujigUNVcGunlQ3/GEcrGe6yaSDq2MV48k1eqTPF4SxfmsIN/B/KA6UP90Te7B+trerTYbBZM3SoER7I18ept7/stVDyozEOvhmYSWI6gaqZqmLK6suV+FNEFxstMIjBaR7+4Qd/JJm7aE48wMrSAuD5vcgIX0/RQigRkm1q7mBycFn7M6IwujA8//rTqx6S1AMLFFZfVbb1R/vmSiR4i2iNiSFg7JJ9xxX8d+ISLcDnQ+k+yl/Hb1RsnKXHxdBGWXqeGVGoAN+JFPhtUkFadbf4Ie467Vh76xc1qA+hPN8bxy8WY7Zvr48/pQiNpcAC5QwuIJxUQohhYsrXTEn9+S2lFeqzYPt1VdduAre+riuoehu0AK+1sfa94p0GH6msBGL/ZIT79JguiumPNQVKkmF5wgLWk5uMi24rratfRhefOyyovH4lUevzwK4CFjiO96o2XKQTSOVF4Rws4Li9Q/VyKHqRHzSHobJW0NuqKJP3OzyK3EIL2Of7ppXl8KqAf/tSnlTS5DyNjYuJVzxVKZ/Xz8aziqBgrlw9V2b01M7RCeSVI/tisrO0XUvr2XhHtHVNh/VCzPqKEP0iie5a5OW2BYq6gyW96E1QcG663cyIZ5caQhsSHu9U6i5VGhMqyEPXs/1OfbPEymJfk38qwWJxaZ2N97TsZvhN/bVu5EtEa46JoLo36o26NIZ9wrPOYbkKWVepxtHWFxDuSc3VD5QFCrWnCxe/S5+eUmW0FLPKvbVYVcpiI9UhfHBm2NdtMP6jU/0ttehzTJjWqbfkrwskw9R4RkG3l4665yqWT8y0M7hlymreDjxZmcIdJNEMPcq969vUOiRPlZV+cOJMHdUxdQJo7R8rBXAhumW7p/7Whli2MURf1jGofXWtgbrWTJgwQIg65f0+tPNP6j6yQQyHVYCVJRlssSxr+5HKxLTp6aHA5KNM8SiuYXD3w6MHUTGxTjE0NqkxOoFvY2VYWGKu9muU1Www2ahyhgGkv1HWGarAKF98nOkhEbi6XJyt7xpSfobUQyfwbrLlGcqDvzeWVldEJS+ONug2cYTv4uOr8vBXCOEtuPqSvV3vQbcZ5b85MZYhgVr46cM4eRSbXpjfqsEIJnuY4J5qi7uuhcHN13fRkisL6BDeqRXzl/vBphyngsG/SWwh7Ctw6Xvr+F3L+Qx9LnRvwXpxYRGoYsIFM9vDC0S3fRfuqqO71jyIITFIYxf3XRj8lqW8GvaHLTDSFpC3aU4OcdHnKOWrqZE4b75HNWO6Jfx58IbVT2UKVATurb5vdrO3gjfcFde0kMG+Agx76C0Qzn6mJhx7E1zPHs2Du9eHZqelz7DsgfJxXBgDjAKnz6LjNXhNWGM1kP0qi8ZkbDvoe0eTmglXrzdWxVQbNtUWmLW1ZE2Ul21bPjQ1xn0mKK8bUnuQGltrZuxgg7wXzD0kPA9DuFSu7IHT7y30mjE6QV8iN43ncuGJe6bYO0z6jOkZ+QHyiaPsM9YWmAjX4Z7/UktXsoeOC/K+HFwzQTiH+fFa65qFpZqf1h06iZH5WEDxt6J3+kyPuxOmiytOxTPuKj29z7ZWv56o9B27nEYTNBcUU5MpZbxE/R2u1bHsUz6G0boYzhf/Pjp/Bevr5wUoAKZ9NeFdbGygPvDr6FslBvAavPXT2tEBkvhYH40WJQFDxV+otUiYgud9ozlSTZUNx53imiEJO/MobHCONJ2rZgnm9mDVYP6oxSOhiXEgbo9tIPBN3bmNOpCsC3ATdq3aU90GQ58UX6R2+mmtR6yJd1dYCeppMEymTQCL1IacQs8B35tskczdwrhaQCWASFnV9B87NCps3R1cn+iEcA0Yoka4RcEGpcu8PkuYdujrEqJ9LPR6p11/n3FPU0I3FHe8z/YqmPCxHAhqGw2dQWSAwzjzs1jDlyMYmaH3H+1hWnoMY7zsu7iZiWt5SDqdpl7wwYLO8bPaLCHnQ2uM/aA8GrOun4aFQpcWMB82gHopKxGDOaGqCJQLRxVdMz2gsVqctsF4QYDlpkqEOfLBo9MG24ObnxvP6Mx8u5i4/fyigzUz7CFzm+2WECjucrbUO7ZH9yru9+KmCULIdR46QdTBBmg8g8qGEhjVKlc0cBTu619CkZUoJSAxiQerJMz/Kg5uyrAvEIFgfn8pUL5VhtpFu8aqE2Md4EJ9r9KaknnXGo476nIKhTXQ0mIH6W6sjhp04Qn+3vtTtRF+2iuGg/oQ4BDmGXJh9+CHSFNckMNvkn6mTWByeU2QY13phPStJlQ31dFFdLXCUsLdqxae6o5bhNB6qsP62omWLDQKX5fdzdqazOqlMT1xUF/6d5hEbbgHESQQ+6MZ898kwWwYdLcNepjv2N0tK08D3UozB6MF7zVX1e0Vhyrz235aG2NWyZjJ2QXTRyJWOiww1sOlL+S6E/yuvrBTx2JpnO1hs/YodFrig5ldVgnmmcdBp5fVnpSeu9QZcW/Ztv+SQY8oBFvd98MkobPKRLKuH0AtvQT76aDTijv318vz1kFNgBtAH3BUYqA4tA6PHhkL2gRvytAmHS9Gb3YK96vV/pams3O6w+XM0v0wd+tU4OMoTWd62NlaGTtIk9eZXGtPVRfiXAUUDh5NG7+EXIjaugge+UCxN8E3eB8KCpVVItA+11FxVJsbzP5XPyvgqxzbLHSqEMJf34GFDy16BOXk10evfxWt6u/y+PNMUWY6kFWym8S/qIK5Y9eeGOwEvQUIUK6tDjFiojVC0OE4Z7j4o/eH/3uMat0nfn16nfBbNrxF8tkqtWa8tl0tNInYINlYSrFUuDiJgDDAX58/fO74F9HSyPvn4W0cJtkiHa9Wq8l5sXtvsim2T2/8aeEr+YwBIvUjhBQfJUD1NzneeTCGLogHLI0z6Ko+etzwN9nrUnb6406bLF2qPt4T8MqklEyIqnn6Rcb2ucC5J/MFgyUVohfU0C3gs4VXea0HOGzG2JnBGJGtVBB5l0c/V9U3wvR/63xJvtpWtu1yLYl6HNd22rdPBra/+FPKPEj0OJSyYeuT32GQoy4Cl59oRb3s+0+n2ihF8T1vN/wnnrAmOPKjBnW6WM6FpfB932PuGyMoK7B2eLmTfl6i3SAsfW0NbL75ZZS0ln6bCkuio2TCxKq0KIkz7MB5E6Ve9ROvlzT60u30jR6Jk0VrWhbryuP+ebeb7Z7TskJVN0DKQQHXQtPkdT4Kk6OSV2jU+IS/cYXn9e9u6AkF386t1UWnUOnr985U5wFd+ujhb5pFJ33toj5mG3hLZLNbjE/S8rvlfvbGK+Oi0Q+glfxV2LZ0rYEj6Hc0TMfzmG97L/3tbPrl2dt+z6jq3zpt+9gx5TrVO8n51IgXi/3DXzKIVlK/Fc18WdW146mbv13lH15HDg9TXX45ZLus2E+ayqpvGSHe2r13BMw8X5Oanqhysbzd2xN2IWIV60GbI06jTOAfjcoVuyzNf+Bts13JPelyzqWtmuDT+Pn3b7skHbeb+zx9lJf3YIiWkDZV+1yP7xGdVJK7Xjeous++5LYJumCn/mLsGBkbx+WMn8FKsyIvfuSFu00+LpvTZXlezP4hIyf2L/8/IVnenwYm5/bSnos3h0jadbl4E95FezpqG2XlaYzeVpxe+k2xssBv/q/G/w3P7zxk9r3jzujnXrgiCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIL4hf8BxQjZ799J7c0AAAAASUVORK5CYII=",description:'Coca cola is cool and healthy and not addictive'});
  }

}
}
