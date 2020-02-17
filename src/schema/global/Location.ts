import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType()
export class Location {
  @Field(() => Float, { nullable: true })
  latitude: number;

  @Field(() => Float, { nullable: true })
  longitude: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  region: string;
}
