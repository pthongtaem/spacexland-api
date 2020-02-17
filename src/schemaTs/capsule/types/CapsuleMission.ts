import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class CapsuleMission {
  @Field({ nullable: true })
  flight?: number;

  @Field({ nullable: true })
  name?: string;
}
