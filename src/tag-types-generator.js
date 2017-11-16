var {join} = require('path');


exports.factoryInterfacePattern = /interface ReactDOM {\s*\/\/ HTML([^\/]+)/;


exports.generateTagTypesSource = function (factoryInterfaceMembers) {
    var factoryDeclarationPattern = /^"?(\w+)"?: (\w+)Factory<(\w+)>$/;
    return (
        factoryInterfaceMembers
            .map(decl => {
                var declarationParts = factoryDeclarationPattern.exec(decl);
                if (! declarationParts) {
                    throw new Error(`Failed to match factory declaration:\n    ${decl}`);
                }
                return {
                    tag: declarationParts[1],
                    factoryType: declarationParts[2],
                    elemType: declarationParts[3]
                };
            })
            .map(({tag, factoryType, elemType}) =>
                `export type Tag${tag.toUpperCase()}<M> = ${factoryType}MarkupFactory<${elemType}, M>;`
            )
            .join('\n')
    );
};
