import { request, gql } from 'graphql-request';

const graphAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
    const query = gql `
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories{
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const results = await request (graphAPI, query);
    return results.postsConnection.edges
}