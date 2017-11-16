import * as React from 'react';
import * as b_ from 'b_';


export function bind(tag: string, block: string, elem: string) {
    return factory.bind(void 0, tag, block, elem);
}

export function factory(tag: string, block: string, elem: string) {
    var i = 3;
    var propsArg = arguments[i];
    var propsPassed =
        !!propsArg &&
        typeof propsArg === 'object' &&
        !Array.isArray(propsArg) &&
        !React.isValidElement(propsArg)
    ;
    var resultProps;
    if (propsPassed) {
        if ('mods' in propsArg) {
            var {mods, ...props}: {mods: any, props: any[]} = propsArg;
            resultProps = {className: b_(block, elem, mods), ...props};
        } else {
            resultProps = {className: b_(block, elem), ...propsArg};
        }
        i++;
    } else {
        resultProps = {className: b_(block, elem)};
    }
    var args = [tag, resultProps];
    while (i < arguments.length) {
        args.push(arguments[i]);
        i++;
    }
    return React.createElement.apply(React, args);
}
