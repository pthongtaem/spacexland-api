import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { Capsule } from './types/Capsule';
import { CapsulesFind } from './types/CapsulesFind';
import { MyContext } from '../../types/MyContext';

const collection = 'capsule';
const parseCapsules = (capsule: any) => ({
  ...capsule,
  id: capsule.capsule_serial,
});

@Resolver()
export class CapsuleResolver {
  @Query(() => [Capsule], { nullable: true })
  async capsules(
    @Arg('find', { nullable: true }) find?: CapsulesFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<[Capsule] | null> {
    let null_dates = [];
    if (!find || (find && !find.original_launch)) {
      null_dates = await context.db
        .collection(collection)
        .find({
          original_launch: null,
          ...context.find({ query: { ...find }, collection }),
        })
        .sort(context.sort({ query: { order, sort }, collection }))
        .skip(context.offset({ offset }))
        .limit(context.limit({ limit }))
        .map(parseCapsules)
        .toArray();
    }
    const not_null_dates = await context.db
      .collection(collection)
      .find({
        original_launch: { $ne: null },
        ...context.find({ query: { ...find }, collection }),
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCapsules)
      .toArray();

    let data = null;
    if (context.order({ order }) === -1) {
      data = null_dates.concat(not_null_dates);
    } else {
      data = not_null_dates.concat(null_dates);
    }

    if (limit) {
      return data.slice(0, limit);
    }

    return data;
  }

  @Query(() => [Capsule], { nullable: true })
  async capsulesPast(
    @Arg('find', { nullable: true }) find?: CapsulesFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<[Capsule] | null> {
    const data = await context.db
      .collection(collection)
      .find({
        original_launch: { $ne: null },
        ...context.find({ query: { ...find }, collection }),
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCapsules)
      .toArray();
    return data;
  }

  @Query(() => [Capsule], { nullable: true })
  async capsulesUpcoming(
    @Arg('find', { nullable: true }) find?: CapsulesFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<[Capsule] | null> {
    const data = await context.db
      .collection(collection)
      .find({
        original_launch: null,
        ...context.find({ query: { ...find }, collection }),
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCapsules)
      .toArray();
    return data;
  }

  @Query(() => Capsule, { nullable: true })
  async capsule(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Capsule | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ capsule_serial: id })
      .limit(1)
      .map(parseCapsules)
      .toArray();
    return data;
  }
}
