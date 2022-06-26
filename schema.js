ubuntu@ip-172-31-4-219:~/graphbook/src/server/services/graphql$ cat schema.js
const typeDefinitions = `
  type User {
    id: Int
    avatar: String
    username: String
  }
  type Post {
    id: Int
    text: String
    user: User
  }
  type PostFeed {
    posts: [Post]
  }
  type Message {
    id: Int
    text: String
    chat: Chat
    user: User
  }
  type Chat {
    id: Int
    messages: [Message]
    users: [User]
    lastMessage: Message
  }
  type RootQuery {
    posts: [Post]
    chats: [Chat]
    chat(chatId: Int): Chat
    postsFeed(page: Int, limit: Int): PostFeed
    usersSearch(page: Int, limit: Int, text: String!): UsersSearch
  }
  input PostInput {
    text: String!
  }
  input ChatInput {
    users: [Int]
  }
  input MessageInput {
    text: String!
    chatId: Int!
  }
  type Response {
    success: Boolean
  }
  type UsersSearch {
    users: [User]
  }
  type Auth {
    token: String
  }



type RootMutation {
    addPost (
      post: PostInput!
    ): Post
    addChat (
      chat: ChatInput!
    ): Chat
    addMessage (
      message: MessageInput!
    ): Message
    deletePost (
      postId: Int!
    ): Response
login (
      email: String!
      password: String!
    ): Auth



}
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default [typeDefinitions];
