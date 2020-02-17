import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { MissionsFind } from './types/MissionsFind';
import { Mission } from './types/Mission';
import { MissionResult } from './types/MissionResult';

const collection = 'mission';
const parseMissions = (mission: any) => ({
  ...mission,
  id: mission.mission_id,
  name: mission.mission_name,
});

@Resolver()
export class MissionResolver {
  @Query(() => [Mission], { nullable: 'itemsAndList' })
  async missions(
    @Arg('find', () => MissionsFind, { nullable: true }) find: MissionsFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<Mission[] | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseMissions)
      .toArray();
    return data;
  }

  @Query(() => MissionResult, { nullable: true })
  async missionsResult(
    @Arg('find', () => MissionsFind, { nullable: true }) find: MissionsFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<MissionResult | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseMissions)
      .toArray();
    const { length: totalCount } = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .toArray();
    return { data, result: { totalCount } };
  }

  @Query(() => Mission, { nullable: true })
  async mission(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Mission | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ mission_id: id })
      .limit(1)
      .map(parseMissions)
      .toArray();
    return data;
  }
}
