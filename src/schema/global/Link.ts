import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Link {
  @Field({ nullable: true })
  article?: string;

  @Field({ nullable: true })
  reddit?: string;

  @Field({ nullable: true })
  wikipedia?: string;
}
