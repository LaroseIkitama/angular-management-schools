import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appStyledButton]'
})
export class StyledButtonDirective {
  @Input() width = '100%';

  @HostBinding('style.background-color') backgroundColor = 'orange';
  @HostBinding('style.width') get getWidth() { return this.width; }
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.padding') padding = '10px 20px';
  @HostBinding('style.border') border = 'none';
  @HostBinding('style.border-radius') borderRadius = '5px';
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.font-size') fontSize = '1.2em';
  @HostBinding('style.transition') transition = 'background-color 0.3s ease';

  @HostBinding('class.button') true: any;

}
