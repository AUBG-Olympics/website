import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild,Input } from '@angular/core';
import 'keen-slider/keen-slider.min.css'
import KeenSlider, { KeenSliderInstance } from "keen-slider"


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css',"../../../node_modules/keen-slider/keen-slider.min.css"]
})
export class CarouselComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;
  @Input() images:any=[{}];
  currentSlide: number = 1
  slider: KeenSliderInstance|null = null

  ngAfterViewInit() {
    console.log(this.images);
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: 8,
        spacing:20,
      },
      range:{
        align:true
      },
      mode:'snap',
      loop:true,
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
          }, 3000)
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
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
