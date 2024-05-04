import {gql} from '@apollo/client';

export const QUERY_ARTICLES = gql`
    query articles {
        articles {
            _id
            category
            title
            url
            urlToImg
          }
    }
`