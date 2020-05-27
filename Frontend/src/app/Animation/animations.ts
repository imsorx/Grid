import { trigger, style, animate, transition, query, animateChild, group, state, stagger } from '@angular/animations';

export const routeAnimations = trigger(
  'entry', [
  transition('loginpage => signuppage', group([
    query(':enter', [
      style({
        opacity: '0',
        transform: 'translateX(100%)'
      }),
      animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: '1', transform: 'translateX(0px)' }))
    ]),
    query(':leave', [
      style({
        position: 'absolute',
        top: '0'
      }),
      animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: '0', transform: 'translateX(-100%)' }))
    ]),
    query('.reginfo', [
      style({
        position: 'absolute',
        bottom: '0',
        opacity: '0'
      })
    ])
  ])),
  transition('signuppage => loginpage', group([
    query(':enter', [
      style({
        opacity: '0',
        transform: 'translateX(-100%)'
      }),
      animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: '1', transform: 'translateX(0)' }))
    ]),
    query(':leave', [
      style({
        position: 'absolute',
        top: '0'
      }),
      animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ opacity: '0', transform: 'translateX(100%)' }))
    ]),
    query('.reginfo', [
      style({
        position: 'absolute',
        bottom: '0',
        opacity: '0'
      })
    ])
  ]))
]
);

export const flyin = trigger('flyin', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: '0', transform: 'translateY(-100%)' }),
        stagger(50, [animate('200ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: '1', transform: 'translateY(0px)' }))])
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({ opacity: '1', transform: 'translateY(0px)' }),
        stagger(10, [animate('100ms cubic-bezier(0.215, 0.61, 0.355, 1)', style({ opacity: '0', transform: 'translateY(-100%)' }))])
      ],
      { optional: true }
    )
  ]),
]);
