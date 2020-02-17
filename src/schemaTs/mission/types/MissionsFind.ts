import { Field, ID, InputType } from 'type-graphql';

@InputType()
export class MissionsFind {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  manufacturer: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  payload_id: string;
}
