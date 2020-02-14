import { ObjectType, Field, ID, Int } from 'type-graphql';
import { CapsuleMission } from './CapsuleMission';

@ObjectType()
export class Capsule {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  landings?: number;

  @Field(() => [CapsuleMission], { nullable: 'itemsAndList' })
  missions?: CapsuleMission[];

  @Field({ nullable: true })
  original_launch?: Date;

  @Field(() => Int, { nullable: true })
  reuse_count?: number;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  type?: string;
}
