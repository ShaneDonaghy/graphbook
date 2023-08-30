import { gql } from '@apollo/client';

export const CORE_MESSAGE = gql`
fragment coreMessage on Message {
    id
    text
    user {
        id
    }
}
`;
