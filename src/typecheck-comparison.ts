interface Foo { }

interface Bar {
    bar?: { baz?: string };
}

// case 1: type intersection

var var1: Foo & Bar = {
    bar: { baz: 'x', unknown: 'nobody cares' } // no error for unknown property here
}

// case 2: interface extension

interface FooAndBar extends Foo, Bar { }

var var2: FooAndBar = {
    bar: { baz: 'x', unknown: 'catched' } // error reported
}
