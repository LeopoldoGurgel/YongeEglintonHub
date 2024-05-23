import {gql} from '@apollo/client';

export const QUERY_ARTICLES = gql`
    query articles {
        articles {
            _id
            category
            title
            url
            urlToImg
            createdAt
          }
    }
`

export const QUERY_BREAKING = gql`
    query breaking {
        breaking {
            _id
            category
            title
            url
            urlToImg
            createdAt
          }
    }
`

export const QUERY_SPORTS = gql`
    query sports {
        sports {
            _id
            category
            title
            url
            urlToImg
            createdAt
          }
    }
`

export const QUERY_ENTERT = gql`
    query entertainment {
        entertainment {
            _id
            category
            title
            url
            urlToImg
            createdAt
          }
    }
`