import { gql } from "@apollo/client";

export const WHITELISTS = gql`
  query getWhitelist {
    whitelists(orderBy: createdAt_DESC) {
      id
      name
      type
      dateEnd
      minAmount
      maxAmount
      asset
      url
    }
  }
`;

export const GET_WHITELISTS_WITH_NAME = gql`
  query getWhitelistsWithNameName($whitelistName: String!) {
    whitelists(where: { name_contains: $whitelistName }) {
      id
      name
      type
      dateEnd
      minAmount
      maxAmount
      asset
      url
    }
  }
`;

export const ENDING_SOONEST = gql`
  query endingSoonest {
    whitelists(orderBy: dateEnd_ASC) {
      id
      name
      type
      dateEnd
      minAmount
      maxAmount
      asset
      url
    }
  }
`;

export const ENDING_LATEST = gql`
  query endingFirst {
    whitelists(orderBy: dateEnd_DESC) {
      id
      name
      type
      dateEnd
      minAmount
      maxAmount
      asset
      url
    }
  }
`;

export const SORT_BY_NEWER = gql`
  query sortByNewer {
    whitelists(orderBy: createdAt_ASC) {
      id
      name
      type
      dateEnd
      minAmount
      maxAmount
      asset
      url
    }
  }
`;

export const SORT_BY_TYPE = gql`
  query sortByType($types: [Types!]) {
    whitelists(where: { type_contains_all: $types }) {
      id
      name
      dateEnd
      minAmount
      maxAmount
      asset
      url
      type
    }
  }
`;
