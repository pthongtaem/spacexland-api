import { ObjectType, Field, Int, ID } from 'type-graphql';
import { CapsuleMission } from '../../capsule/types/CapsuleMission';

@ObjectType()
export class Core {
  @Field(() => Int, { nullable: true })
  asds_attempts?: number;

  @Field(() => Int, { nullable: true })
  asds_landings?: number;

  @Field(() => Int, { nullable: true })
  block?: number;

  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => [CapsuleMission], { nullable: 'itemsAndList' })
  missions?: CapsuleMission[];

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
