import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`mutation SignupMutation($username: String!, $email: String!, $password: String!) {
    createUser(
        username: $username,
        email: $email,
        password: $password
    ) {
        id
        username
        email
    }
}`

export const LOGIN_MUTATION = gql`mutation LoginMutation($email: String!, $password: String!) {
    loginUser(
        email: $email,
        password: $password
    )
}`

export const ALL_USERS_QUERY = gql`query AllUsersQuery{
    allUsers {
        id
        username
        email
    }
}`

export const USER_QUERY = gql`query UseQuery($id: Int!) {
    User(id: $id) {
        id
        username
        email
        posts {
            id
        }
    }
}`