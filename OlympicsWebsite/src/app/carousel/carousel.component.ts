import { Component, ElementRef, ViewChild,Input, NgZone,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'keen-slider/keen-slider.min.css';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { take } from 'rxjs';
import {Image} from '../models/image'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css',"../../../node_modules/keen-slider/keen-slider.min.css"],
})

export class CarouselComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;
  @Input()
  photos:Image[]=[];
  @Input()
  numOfslides:number = 1;
  @Input()
  spacing:number = 0;
  @Input()
  hover:boolean = false;
  @Input()
  arrows:boolean=false;
  currentSlide: number = 1;
  slider: KeenSliderInstance|null = null;

  ngOnChanges(changes: any) {
    console.log("changed");
    let s=this.slider;
    setTimeout(function() {
      s?.update();
    }, 1);
}

  constructor(private ngZone: NgZone,private cdRef: ChangeDetectorRef){}
  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
  }

  ngAfterViewInit() {
    console.log(this.photos);
    let options=
    this.ngZone.onStable
    .asObservable()
    .pipe(take(1))
    .subscribe(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        slides: {
          perView:this.numOfslides,
            spacing:this.spacing,
            origin:'center'
          },breakpoints:{
            '(max-width:1200px)':{
              slides:{
                perView:this.numOfslides==1?1:3,            
                spacing:this.spacing,
                origin:'center'},
              },'(max-width:900px)':{
                slides:{
                  perView:this.numOfslides==1?1:2,            
                  spacing:this.spacing,
                  origin:'center'}
                },'(max-width:600px)':{
                  slides:{
                    perView:1,     
                    spacing:this.spacing,
                    origin:'center'}
                  }
                },
                range:{
                  align:true
                },
          mode:'free-snap',
          loop:true,
          drag:this.arrows,
          renderMode:'performance',
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel
            }
        },
        [
          (slider:KeenSliderInstance) => {
            let timeout:any
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 10000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ],
        )  
      });

    }
    
    ngOnDestroy() {
      if (this.slider) this.slider.destroy()
    }
}
