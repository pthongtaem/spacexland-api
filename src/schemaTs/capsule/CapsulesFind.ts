import { InputType, Field, ID, Int } from 'type-graphql';

@InputType()
export class CapsulesFind {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  landings?: number;

  @Field({ nullable: true })
  mission?: string;

  @Field({ nullable: true })
  original_launch?: Date;

  @Field(() => Int, { nullable: true })
  reuse_count?: number;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  type?: string;
}
