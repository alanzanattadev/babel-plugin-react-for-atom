export default function ({types}) {
  return {
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value == 'react' || path.node.source.value == "react-dom") {
          path.node.source.value = "react-for-atom";
          path.node.specifiers[0].type = 'ImportSpecifier';
          path.node.specifiers[0].imported = path.node.specifiers[0].local;
        }
      },
    }
  };
}
