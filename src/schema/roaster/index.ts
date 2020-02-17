import { Resolver, Query, Ctx } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { Roadster } from './types/Roadster';

const collection = 'info';

@Resolver()
export class RoadsterResolver {
  @Query(() => Roadster, { nullable: true })
  async roadster(@Ctx() context?: MyContext): Promise<Roadster | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ name: "Elon Musk's Tesla Roadster" })
      .toArray();
    return data;
  }
}
