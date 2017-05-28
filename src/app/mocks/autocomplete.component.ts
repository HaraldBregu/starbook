import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutoCompleteMockComponent),
  multi: true
};

@Component({
  selector: 'p-autoComplete',
  template: '<input type="text" class="form-control" style="display: none"/>',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AutoCompleteMockComponent implements ControlValueAccessor {
  @Input('suggestions') suggestions: any[];
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
