import { ObjectType, Field, Root, Ctx } from 'type-graphql';
import { Payload } from '../../payload/types/Payload';
import { MyContext } from '../../../types/MyContext';
import { collection, parsePayload } from '../../payload/utils';

@ObjectType()
export class Mission {
  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  id: string;

  @Field(() => [String], { nullable: true })
  manufacturers: string[];

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  twitter: string;

  @Field({ nullable: true })
  website: string;

  @Field({ nullable: true })
  wikipedia: string;

  payload_ids: string[];

  @Field(() => [Payload], { nullable: 'itemsAndList' })
  async payloads(
    @Root() parent: Mission,
    @Ctx() context?: MyContext,
  ): Promise<any[] | null> {
    return parent.payload_ids?.map(async payload_id => {
      const [data] = await context.db
        .collection(collection)
        .find({ 'rocket.second_stage.payloads.payload_id': payload_id })
        .project({
          _id: 1,
          'rocket.second_stage.payloads': 1,
          flight_number: 1,
        })
        .limit(1)
        .toArray();

      return parsePayload(data, {});
    });
  }
}
