declare type toastType = 'normal' | 'success' | 'error' | 'warning';
declare type toastHorizontalPosition = 'center' | 'left' | 'right';
declare type toastVerticalPosition = 'top' | 'bottom';
declare type toastScrollFrom = 'top' | 'bottom' | 'left' | 'right';
declare type toastScrollTo = 'top' | 'bottom' | 'left' | 'right';
export class ToastConfig
{
  message?: string;
  panelClass?: string;
  horizontalPosition?: toastHorizontalPosition;
  verticalPosition?: toastVerticalPosition;
  toastType?: toastType;
  scrollFrom?: toastScrollFrom;
  scrollTo?: toastScrollTo;
}
