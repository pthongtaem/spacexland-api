import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class LaunchRocketFairings {
  @Field(() => Boolean, { nullable: true })
  recovered: boolean;

  @Field(() => Boolean, { nullable: true })
  recovery_attempt: boolean;

  @Field(() => Boolean, { nullable: true })
  reused: boolean;

  @Field({ nullable: true })
  ship: string;
}
