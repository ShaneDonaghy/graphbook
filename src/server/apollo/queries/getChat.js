import { gql } from '@apollo/client';
import { USER_ATTRIBUTES } from '../fragments/userAttributes';
import { CORE_MESSAGE } from '../fragments/coreMessage';

export const GET_CHAT = gql`
query chat($chatId: Int!) {
    chat(chatId: $chatId) {
        id
        users {
            id
            ...userAttributes
        }
        messages {
            ...coreMessage
        }
    }
}
${USER_ATTRIBUTES}
${CORE_MESSAGE}
`;