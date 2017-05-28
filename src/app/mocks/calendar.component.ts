import {Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarMockComponent),
  multi: true
};

@Component({
  selector: 'p-calendar',
  template: '<input type="text" class="form-control" style="display: none"/>',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CalendarMockComponent implements ControlValueAccessor {
  @Input('locale') locale: any;
  @Input('minDate') minDate: any;
  @Input('maxDate') maxDate: any;
  public onSelect: any;
  private innerValue: any = '';

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
