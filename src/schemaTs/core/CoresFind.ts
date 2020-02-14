import { InputType, Field, ID, Int } from 'type-graphql';

@InputType()
export class CoresFind {
  @Field(() => Int, { nullable: true })
  asds_attempts?: number;

  @Field(() => Int, { nullable: true })
  asds_landings?: number;

  @Field(() => Int, { nullable: true })
  block?: number;

  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  missions?: string;

  @Field({ nullable: true })
  original_launch?: Date;

  @Field(() => Int, { nullable: true })
  reuse_count?: number;

  @Field(() => Int, { nullable: true })
  rtls_attempts?: number;

  @Field(() => Int, { nullable: true })
  rtls_landings?: number;

  @Field({ nullable: true })
  status?: string;

  @Field(() => Boolean, { nullable: true })
  water_landing?: boolean;
}
