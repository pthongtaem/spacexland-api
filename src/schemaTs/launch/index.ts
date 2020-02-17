import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { Launch } from './types/Launch';
import { LaunchFind } from './types/LaunchFind';
import { collection, parseLaunch } from './utils';
import { LaunchesPastResult } from './types/LaunchesPastResult';

@Resolver()
export class LaunchResolver {
  @Query(() => [Launch], { nullable: 'itemsAndList' })
  async launches(
    @Arg('find', () => LaunchFind, { nullable: true }) find: LaunchFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<Launch[] | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();
    return data;
  }

  @Query(() => [Launch], { nullable: 'itemsAndList' })
  async launchesPast(
    @Arg('find', () => LaunchFind, { nullable: true }) find: LaunchFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<Launch[] | null> {
    const data = await context.db
      .collection(collection)
      .find({
        upcoming: false,
        ...context.find({ query: { ...find }, collection }),
      })
      .sort({
        ...context.sort({ query: { order, sort }, collection }),
        flight_number: -1,
      })
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  }

  @Query(() => LaunchesPastResult, { nullable: true })
  async launchesPastResult(
    @Arg('find', () => LaunchFind, { nullable: true }) find: LaunchFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<LaunchesPastResult | null> {
    const data: [Launch] = await context.db
      .collection(collection)
      .find({
        upcoming: false,
        ...context.find({ query: { ...find }, collection }),
      })
      .sort({
        ...context.sort({ query: { order, sort }, collection }),
        flight_number: -1,
      })
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    const { length: totalCount }: [Launch] = await context.db
      .collection(collection)
      .find({
        upcoming: false,
        ...context.find({ query: { ...find }, collection }),
      })
      .toArray();

    return { data, result: { totalCount } };
  }

  @Query(() => [Launch], { nullable: 'itemsAndList' })
  async launchesUpcoming(
    @Arg('find', () => LaunchFind, { nullable: true }) find: LaunchFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<Launch[] | null> {
    const data = await context.db
      .collection(collection)
      .find({
        upcoming: true,
        ...context.find({ query: { ...find }, collection }),
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunch)
      .toArray();

    return data;
  }

  @Query(() => Launch, { nullable: true })
  async launch(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Launch | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ flight_number: parseInt(id) })
      .map(parseLaunch)
      .toArray();

    return data;
  }

  @Query(() => Launch, { nullable: true })
  async launchLatest(
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<Launch | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ upcoming: false })
      .sort({ flight_number: -1 })
      .skip(context.offset({ offset }))
      .limit(1)
      .map(parseLaunch)
      .toArray();

    return data;
  }
  @Query(() => Launch, { nullable: true })
  async launchNext(
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<Launch | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ upcoming: true })
      .sort({ flight_number: 1 })
      .skip(context.offset({ offset }))
      .limit(1)
      .map(parseLaunch)
      .toArray();

    return data;
  }
}
