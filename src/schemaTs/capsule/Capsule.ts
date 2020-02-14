import { ObjectType, Field, ID, Int, Root, Ctx } from 'type-graphql';
import { CapsuleMission } from './CapsuleMission';
import { Dragon } from '../dragon/Dragon';
import { MyContext } from '../../types/MyContext';

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

  capsule_id?: string;

  @Field(() => Dragon, { nullable: true })
  async dragon(
    @Root() parent: Capsule,
    @Ctx() context?: MyContext,
  ): Promise<string | null> {
    const [data] = await context.db
      .collection('dragon')
      .find({ id: parent.capsule_id })
      .limit(1)
      .toArray();
    return data;
  }
}
