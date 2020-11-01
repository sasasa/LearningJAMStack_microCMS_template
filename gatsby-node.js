// gatsby-node.js
// 「5. 3. 3 インフォメーション 詳細 ページ（ 動的 ページ） の 作成」 

const path = require("path")
exports.createPages = ({ graphql, actions }) => { 
  const { createPage } = actions
  return graphql(`{ 
    allMicrocmsInformation { 
      edges { 
        node { 
          id 
        } 
      } 
    } 
  }`).
  then( result => { 
    if (result.errors) { 
      throw result.errors 
    }
    result.data.allMicrocmsInformation.edges.forEach( edge => { 
      createPage({
        path: `/information/${edge.node.id}`,
        component: path.resolve(`./src/templates/info-post.js`),
        context: { id: edge.node.id }
      }) 
    })
  })
}
