import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Address {
  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  state: string;
}
