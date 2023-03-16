import { useEffect, useState } from "react";
import "./tree.css";
// const treeData = [
//     {
//         id : '1',
//         text : 'xdbcjhsdvjcsdf',
//         diamond: false,
//         children:[
//             {
//                 id:'2',
//                 text:'dvdfjvbfd',
//                 diamond: false,
//                 children:[
//                     {
//                         id:'3',
//                         text:'jkvbdfhv',
//                         diamond: false,
//                         children:[
//                             {
//                                 id:'4',
//                                 text:'dbvhd',
//                                 diamond: false,
//                             }
//                         ]
//                     },
//                     {
//                         id:'5',
//                         text:'grgrgrefg',
//                         diamond: false,
//                         children:[
//                             {
//                                 id:'4',
//                                 text:'dbvhd',
//                                 diamond: false,
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]
const convertToTree = (dataget) => {
  const data = { ...dataget };
  const tree = {};
  Object.values(data).forEach((node) => {
    if (node.reference === "admin" || node.reference === "Sadhana ajit pande") {
      tree[node.id] = node;
      tree[node.id].children = {};
    } else {
      const parentNode = data[node.reference];
      if (!parentNode.children) {
        parentNode.children = {};
      }
      parentNode.children[node.id] = node;
      parentNode.children[node.id].children = {};
    }
  });
  return tree;
};
const Tree = (props) => {
  const [treeconvert, settreedata] = useState([]);
  useEffect(()=>{
    settreedata([
        {
          id: "0",
          username: "Sadhana ajit pande",
          reference: Object.keys(convertToTree(props.propsdata.userlist)).map(
            (key) => convertToTree(props.propsdata.userlist)[key]
          ),
        },
      ]);
  },[])
  const treeRendering = (treeData) => {
    console.log(treeData)
    return (
      <>
        <ul>
          {treeData?.map((item) => (
            // console.log(item)
            <li className={item.username + item.id}>
              <div><h3>{item.username}</h3>
              </div>
              {(item.reference) && Array.isArray(item.reference)  
                ? treeRendering(item.reference)
                : ""}
            </li>
          )
          )}
        </ul>
      </>
    );
  };

  return <div className="tree">{treeRendering(treeconvert)}</div>;
};

export default Tree;
