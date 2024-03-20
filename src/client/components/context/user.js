import React from 'react';
import { ApolloConsumer } from '@apollo/client';

export const UserConsumer = ({ children }) => {
    return (
        <ApolloConsumer>
            {client => {
                // use client.readQuery to get the logged in user
                const user = {
                    username: "Test User",
                    avatar: "uploads/avatar2.png"
                };
                return React.Children.map(children, function (child) {
                    return React.cloneElement(child, { user });
                });
            }}
        </ApolloConsumer>
    )
}
