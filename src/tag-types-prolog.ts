import {
    ReactNode, ReactChild,
    DOMElement, DOMAttributes, HTMLAttributes, ChangeTargetHTMLAttributes, ClassAttributes
} from 'react';


// original ReactFragment type defined as "{} | Array<...>" in @types/react
// using "{}" makes not possible for type checker to distinguish regular Props object form ReactChild object
// so the first argument in markup factory function (see DOMMarkupFactory below) can not be optional
// to walkaround this we introduce StrictReactFragment type
export type StrictReactFragment = Array<ReactChild | any[] | boolean>;
export type StrictReactNode = ReactChild | StrictReactFragment | boolean | null | undefined;

// another walkaround about extending props with mods:
// original declaration for this in @types/react DOMFactory looks like "props?: ClassAttributes<T> & P"
// if we extends that declaration as "props?: ClassAttributes<T> & P & {mods?: M}"
// type validation for mods suddenly does not works
// but if we make equivalent extension using interfaces, it's ok
export interface MarkupProps<E extends HTMLElement, M> extends ClassAttributes<E>, HTMLAttributes<E> {
    mods?: M;
}
export interface ChangeTargetMarkupProps<E extends HTMLElement, M> extends ClassAttributes<E>, ChangeTargetHTMLAttributes<E> {
    mods?: M;
}

// custom versions of DOMFactory, HTMLFactory and ChangeTargetHTMLFactory with mods support
export interface DOMMarkupFactory<P, A extends DOMAttributes<E>, E extends Element> {
    (child?: StrictReactNode, ...children: ReactNode[]): DOMElement<A, E>;
    (props?: P, ...children: ReactNode[]): DOMElement<A, E>;
}
export type HTMLMarkupFactory<T extends HTMLElement, M> = DOMMarkupFactory<MarkupProps<T, M>, HTMLAttributes<T>, T>;
export type ChangeTargetHTMLMarkupFactory<T extends HTMLElement, M> = DOMMarkupFactory<ChangeTargetMarkupProps<T, M>, ChangeTargetHTMLAttributes<T>, T>;
