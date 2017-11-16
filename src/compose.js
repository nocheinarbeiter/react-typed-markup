var {join} = require('path');
var {readFileSync, writeFileSync} = require('fs');


var tagTypesGenerator = require('./tag-types-generator');
var sources = {
    factoryFunctionSource: 'factory-function.ts',
    tagTypesPrologSource: 'tag-types-prolog.ts',
    reactTypingsSource: '../node_modules/@types/react/index.d.ts'
};
var result = composeFactory(read(sources), tagTypesGenerator);
write('../index.ts', result);


function composeFactory(sources, tagTypesGenerator) {
    var {factoryFunctionSource, tagTypesPrologSource, reactTypingsSource} = sources;
    var interfaceMembers = getFactoryInterfaceMembers(reactTypingsSource, tagTypesGenerator.factoryInterfacePattern);
    var tagTypesSource = tagTypesGenerator.generateTagTypesSource(interfaceMembers);
    return [
        factoryFunctionSource,
        tagTypesPrologSource,
        tagTypesSource,
    ];
}

function getFactoryInterfaceMembers(reactTypingsSource, factoryInterfacePattern) {
    var factoryInterfaceSource = factoryInterfacePattern.exec(reactTypingsSource);
    if (! factoryInterfaceSource) {
        throw new Error('Failed to match factory interface source');
    }
    return factoryInterfaceSource[1].split(';').map(s => s.trim()).filter(s => s.length);
}

function read(sources) {
    var result = {};
    for (var key of Object.keys(sources)) {
        result[key] = readFileSync(join(__dirname, sources[key]), 'utf8');
    }
    return result;
}

function write(dest, parts) {
    writeFileSync(
        join(__dirname, dest),
        parts.map(part => part + '\n').join('\n')
    );
}
