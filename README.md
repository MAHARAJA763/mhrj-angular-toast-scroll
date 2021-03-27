# MhrjAngularToastScroll

> npm i mhrj-angular-toast-scroll --save

This package is for toast service in angular

## How to use

import `ToastScrollService` from `mhrj-angular-toast-scroll`

> import {ToastScrollService} from 'mhrj-angular-toast-scroll'

inject `ToastScrollService` in constructor of any component.

Like below :

> constructor( private toast: MhrjToastService ) { }

then call raise function:

> this.toast.raise()

## parameters

The raise() function takes two optional parameters

> 1 message:string Message to be displayed

> 2 data:ToastConfig Toast configuration options

## data parameter options

In data parameter we have following options to pass

> 1 message Message to be displayed

> 2 panelClass Css class to override display properties if given toastType is not applied

> 3 horizontalPosition Horizontal position of toast one of 'top' | 'bottom' defaults to 'top'

> 4 verticalPosition Vertical position of toast one of 'center' | 'left' | 'right' defaults to 'right'

> 5 toastType Type of toast to apply different backgrounds one of 'normal' | 'success' | 'error' | 'warning'

> 6 scrollFrom Define from which direction toast will enter one of 'top' | 'bottom' | 'left' | 'right' defaults to 'top'

> 7 scrollTo Define from which direction toast will exit one of 'top' | 'bottom' | 'left' | 'right' defaults to value of scrollFrom
