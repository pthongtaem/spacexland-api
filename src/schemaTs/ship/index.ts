import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { collection, parseShips } from './utils';
import { Ship } from './types/Ship';
import { ShipsFind } from './types/ShipsFind';
import { ShipsResult } from './types/ShipsResult';

@Resolver()
export class ShipResolver {
  @Query(() => [Ship], { nullable: 'itemsAndList' })
  async ships(
    @Arg('find', () => ShipsFind, { nullable: true }) find: ShipsFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<Ship[] | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseShips)
      .toArray();
    return data;
  }

  @Query(() => ShipsResult, { nullable: true })
  async shipsResult(
    @Arg('find', () => ShipsFind, { nullable: true }) find: ShipsFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<ShipsResult | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseShips)
      .toArray();
    const { length: totalCount } = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .toArray();
    return { data, result: { totalCount } };
  }

  @Query(() => Ship, { nullable: true })
  async ship(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Ship[] | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ ship_id: id })
      .limit(1)
      .map(parseShips)
      .toArray();
    return data;
  }
}
