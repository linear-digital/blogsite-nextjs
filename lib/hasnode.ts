import { request, gql } from "graphql-request";

const HASHNODE_API = "https://gql.hashnode.com";

export async function getPosts(limit?: number) {
  const query = gql`
    query Publication {
      publication(host: "morshedulmunna.hashnode.dev") {
        posts(first: ${limit ? limit : 10}) {
          edges {
            node {
              id
              title
              slug
              brief
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `;

  const data: any = await request(HASHNODE_API, query);
  return data.publication.posts.edges.map((edge: any) => edge.node);
}

export const fetchHashnodeBlogs = async () => {
  const query = {
    query: `query {
        publication(host: "morshedulmunna.hashnode.dev") {
          posts(first: 10) {
            edges {
              node {
                id
                title
                slug
                subtitle
                brief
                coverImage {
                  url
                }
                tags { id name slug }
                publishedAt
                author { id name username profilePicture }
                canonicalUrl
                series { id name }
                views
                seo { title description }
              }
            }
          }
        }
      }`,
  };

  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
      cache: "no-cache",
    });

    const data = await response.json();
    return data.data.publication.posts.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export async function getPostBySlug(slug: string) {
  const query = gql`
      query Publication {
        publication(host: "morshedulmunna.hashnode.dev") {
          post(slug: "${slug}") {
            id
            title
            slug
            content {
              markdown
              html
            }
            subtitle
            brief
            coverImage {
              url
            }
            tags { id name slug }
            publishedAt
            author { id name username profilePicture }
            canonicalUrl
            series { id name }
            views
            seo { title description }
          }
        }
      }
    `;

  const data: any = await request(HASHNODE_API, query);
  return data.publication.post;
}
