import 'reflect-metadata';
import { buildSchema } from 'type-graphql'
import path from 'path';
import { ApolloServer } from 'apollo-server'
import { UserResolver } from './src/resolvers/user-resolver';

async function main() {
    const schema = await buildSchema({
        //Resolvers são semelhantes aos controllers no REST
        resolvers: [
            UserResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({schema})

    const { url } = await server.listen()

    console.log(`Server running on ${url}`)
}

main();