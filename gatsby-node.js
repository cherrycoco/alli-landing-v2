/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  try {
    const { data } = await graphql(`
      {
        alliApi {
          availablePros {
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
            isAvailable
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
            stateIds
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

    createPage({
      path: `/therapists`,
      component: require.resolve('./src/pages/therapists/all.js'),
      context: {
        pros: data.alliApi.availablePros.filter(pro => pro.isAvailable),
        modalities: modality.data.alliApi.modalities,
        specializations: specialization.data.alliApi.specializations,
      },
    })

    data.alliApi.availablePros.forEach((pro) => {
      createPage({
        path: `/therapists/${pro.fullName.split(' ').join('_')}`,
        component: require.resolve('./src/pages/therapists/therapist.js'),
        context: {
          data: pro,
        },
      })
    });
  } catch (error) {
    console.error('Error fetching pros:', error);
  }
}