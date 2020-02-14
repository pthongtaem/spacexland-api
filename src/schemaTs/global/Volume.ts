import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Volume {
  @Field(() => Int, { nullable: true })
  cubic_feet?: number;

  @Field(() => Int, { nullable: true })
  cubic_meters?: number
}
