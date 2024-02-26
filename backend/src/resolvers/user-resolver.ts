import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import crypto from 'crypto';

/**
 * 
 * GraphQL tem duas definições
 * Query: Realizar busca de dados 
 * Mutation: Criar, Alterar ou deletar dados
 */

@Resolver()
export class UserResolver {
    private data:User[] = [];

    @Query(() => [User])
    async users() {
        return this.data
    }

    @Mutation(() => User)
    async createUsers(@Arg('name') name: string) {
        const user = {
            id: crypto.randomUUID(),
            name
        }

        this.data.push(user)

        return user;
    }
}