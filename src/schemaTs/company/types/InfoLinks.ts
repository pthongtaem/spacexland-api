import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class InfoLinks {
  @Field({ nullable: true })
  elon_twitter?: string;

  @Field({ nullable: true })
  flickr?: string;

  @Field({ nullable: true })
  twitter?: string;

  @Field({ nullable: true })
  website?: string;
}
