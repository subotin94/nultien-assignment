import { OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

/**
 * @note
 * Common interface for handling subscriptions without stacking unnecessary code.
 * Asigning `Subscription` class properties is forcing to unsubscribe from each property separately.
 *
 * The second way i found before i found `SubSink` was using `takeUntil` `rxjs` operator function.
 * It was also stacking unnecessary code by having to pipe each subscription before the actual `subscribe` method.
 * But the thing i loved using this way was that i just had to fire and complete that subject in `ngOnDestroy` hook.
 *
 * But when i found `SubSink`, i started using it instantly :D
 *
 * Also, not all components with subscriptions have to implement `OnInit`, but they have to implement `OnDestroy`.
 */
export interface SubComponent extends Partial<OnInit>, OnDestroy {
  readonly subs: SubSink;
}
