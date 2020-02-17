import {
  Resolver,
  Query,
  Ctx,
  Arg,
  Int,
  ID,
  ResolverInterface,
  FieldResolver,
  Root,
} from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { LaunchPad } from './types/Launchpad';
import { collection, parseLaunchpad } from './utils';

@Resolver(of => LaunchPad)
export class LaunchPadResolver {
  @Query(() => [LaunchPad], { nullable: 'itemsAndList' })
  async launchpads(
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<LaunchPad[] | null> {
    const data = await context.db
      .collection(collection)
      .find({})
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseLaunchpad)
      .toArray();
    return data;
  }

  @Query(() => LaunchPad, { nullable: true })
  async launchpad(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<LaunchPad | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .map(parseLaunchpad)
      .toArray();
    return data;
  }
}
