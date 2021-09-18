import gql from "graphql-tag";

const AUTOS_QUERY = gql`
  query Autos {
    autos {
      id
      title
      slug
      description
      specs
      image {
        url
      }
      price
    }
  }
`;

export default AUTOS_QUERY;
