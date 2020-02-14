import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export class Address {
  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  state: string;
}
