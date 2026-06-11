import {
  Directive,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appLowSeatWarning]',
  standalone: true
})
export class LowSeatWarningDirective
implements OnInit {

  @Input()
  seats!: number;

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit(): void {

    if (this.seats < 20) {

      this.el.nativeElement.style.color =
        '#dc2626';

      this.el.nativeElement.style.fontWeight =
        '700';

    }

  }

}