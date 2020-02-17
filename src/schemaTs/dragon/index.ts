import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { Dragon } from './types/Dragon';
import { collection } from './utils'

@Resolver()
export class DragonResolver {
  @Query(() => [Dragon], { nullable: true })
  async dragons(
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<[Dragon] | null> {
    const data = await context.db
      .collection(collection)
      .find({})
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  }

  @Query(() => Dragon, { nullable: true })
  async dragon(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Dragon | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .toArray();
    return data;
  }
}
