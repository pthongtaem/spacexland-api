import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { PayloadsFind } from './types/PayloadsFind';
import { Payload } from './types/Payload';
import { parsePayloads, collection, parsePayload } from './utils';

@Resolver()
export class PayloadResolver {
  @Query(() => [Payload], { nullable: 'itemsAndList' })
  async payloads(
    @Arg('find', () => PayloadsFind, { nullable: true }) find: PayloadsFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<Payload[] | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .project({
        _id: 0,
        'rocket.second_stage.payloads': 1,
        flight_number: 1,
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();

    return parsePayloads(data, { ...find });
  }

  @Query(() => Payload, { nullable: true })
  async payload(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Payload[] | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ 'rocket.second_stage.payloads.payload_id': id })
      .project({
        _id: 0,
        'rocket.second_stage.payloads': 1,
        flight_number: 1,
      })
      .limit(1)
      .toArray();

    return parsePayload(data, {});
  }
}
