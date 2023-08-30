import { gql } from '@apollo/client';
import { USER_ATTRIBUTES } from '../fragments/userAttributes';

export const GET_CHATS = gql`{
    chats {
        id
        users {
            id
            ...userAttributes
        }
        lastMessage {
            text
        }
    }
}
${USER_ATTRIBUTES}
`;
