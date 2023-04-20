/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');
const fetch = require('cross-fetch');

const { GET_PROS }= require('./src/graphql/query/prosNode');

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;

//   const client = new ApolloClient({
//     link: new HttpLink({
//       // uri: 'http://localhost:4000/graphql',
//       uri: 'https://api.alli.io/graphql',
//       fetch,
//     }),
//     cache: new InMemoryCache(),
//   })

//   try {
//     const { data } = await client.query({ query: GET_PROS });
//     console.log('data', data);

//     data.pros.forEach((pro) => {
//       createPage({
//         path: `/therapists/${pro.fullName.split(' ').join('_')}`,
//         component: require.resolve('./src/pages/therapists/therapist.js'),
//         context: {
//           data: pro,
//         },
//       });
//     });
//   } catch (error) {
//     console.error('Error fetching pros:', error);
//   }
// }
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  try {
    const { data } = await graphql(`
      {
        alliApi {
          pros {
            id
            firstName
            lastName
            tel
            fullName
            pronoun
            type
            gender
            role
            bio
            couple
            trauma
            img
            zoom
            isAccepting
            education {
              school
              degree
              title
            }
            modalities {
              id
              name
            }
            specializations {
              id
              name
            }
          }
        }
      }
    `);

    const modality = await graphql(`
      {
        alliApi {
          modalities {
            id
            name
          }
        }
      }
    `);

    const specialization = await graphql(`
      {
        alliApi {
          specializations {
            id
            name
          }
        }
      }
    `);


    console.log('data', data);

    createPage({
      path: `/therapists`,
      component: require.resolve('./src/pages/therapists/all.js'),
      context: {
        pros: data.alliApi.pros,
        modalities: modality.data.alliApi.modalities,
        specializations: specialization.data.alliApi.specializations,
      },
    });

    data.alliApi.pros.forEach((pro) => {
      createPage({
        path: `/therapists/${pro.fullName.split(' ').join('_')}`,
        component: require.resolve('./src/pages/therapists/therapist.js'),
        context: {
          data: pro,
        },
      });
    });
  } catch (error) {
    console.error('Error fetching pros:', error);
  }
};

