import { gql } from '@apollo/client';
import { USER_ATTRIBUTES } from '../fragments/userAttributes';
import { useQuery } from '@apollo/client';

export const GET_USERS = gql`
    query usersSearch($page: Int, $limit: Int, $test: String!){
        usersSearch(page: $page, limit: $limit, text: $text) {
            users {
                id
                ...userAttributes
            }
        }
    }
    ${USER_ATTRIBUTES}
`;

export const getUsersSearchConfig = (text) => ({ variables: { page: 0, limit: 5, text }, skip: text.length < 3 });
export const useUserSearchQuery = (text) => useQuery(GET_USERS, getUsersSearchConfig(text));
