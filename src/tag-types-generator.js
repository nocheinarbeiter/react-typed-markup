var {join} = require('path');


exports.factoryInterfacePattern = /interface ReactHTML {([^}]+)/;


exports.generateTagTypesSource = function (factoryInterfaceMembers) {
    var factoryDeclarationPattern = /^"?(\w+)"?: DetailedHTMLFactory<(\w+)<(\w+)>, (\w+)>$/;
    var processedAttrTypes = [];
    var modPropsInterfaceDeclarations = [];
    var factoryTypeDeclarations = [];
    factoryInterfaceMembers
        .map(decl => {
            var declarationParts = factoryDeclarationPattern.exec(decl);
            if (! declarationParts) {
                throw new Error(`Failed to match factory declaration:\n    ${decl}`);
            }
            var tag = declarationParts[1];
            var attrType = declarationParts[2];
            var elemType = declarationParts[3];
            if (declarationParts[4] !== elemType) {
                if (tag === 'head') {
                    // skip just one exception for <head> // todo: report issue
                } else {
                    throw new Error(`Unexpected type for factory ${tag}`);
                }
            }
            return {tag, attrType, elemType};
        })
        .forEach(({tag, elemType, attrType}) => {
            var modPropsInterfaceName = attrType.replace('Attributes', 'ModProps')
            if (! processedAttrTypes.includes(attrType)) {
                processedAttrTypes.push(attrType);
                modPropsInterfaceDeclarations.push(
                    `export interface ${modPropsInterfaceName}<T extends HTMLElement, M> extends React.${attrType}<T>, ClassAttributes<T> { mods?: M }`
                );
            }
            factoryTypeDeclarations.push(
                `export type Tag${tag.toUpperCase()}<M> = Factory<${modPropsInterfaceName}<${elemType}, M>, React.${attrType}<${elemType}>, ${elemType}>;`
            );
        })
    ;
    return [].concat(modPropsInterfaceDeclarations, '', factoryTypeDeclarations).join('\n');
};
