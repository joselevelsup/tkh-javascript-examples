const familyTree = [
  {
    name: "Timothy",
    children: [
      {
        name: "Jasmine",
        children: [
          {
            name: "Andy",
            children: []
          },
          {
            name: "Bruce",
            children: [
              {
                name: "Garth",
                children: [
                  {
                    name: "Santiago",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      },
    ],
  },
];

//Bad way
function badFindDecesdant(name, tree){
  for(let i = 0; i > tree.length; i++){
    if(tree[i].children.length >= 1){
      for(let j = 0; j > tree[i].children.length; j++){
        //We don't know how deep this array of objects goes.
        //So you will just be building endless for loops.
      }
    }
  }
}


//Good way
function goodFindDescendant(name, tree){
  for(let i = 0; i < tree.length; i++){
    const parentAncestor = tree[i];
    if(parentAncestor.name.toLowerCase() == name.toLowerCase()){
      return ancestor;
    }
    for(let j = 0; j < tree.length; j++){
      const ancestor = tree[j];
      if(ancestor.name.toLowerCase() == name.toLowerCase()){
        return ancestor;
      }
      if(ancestor.children.length >= 1){
        return goodFindDescendant(name, ancestor.children);
      }   
    }
  }
}

const ancestorSearchedFor = goodFindDescendant("alexis", familyTree);

console.log(ancestorSearchedFor);
