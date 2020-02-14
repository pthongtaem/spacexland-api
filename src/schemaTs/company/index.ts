import { Resolver, Query, Ctx } from 'type-graphql';
import { Info } from './Info';
import { MyContext } from '../../types/MyContext';

const collection = 'info';

@Resolver()
export class CompanyResolver {
  @Query(() => Info, { nullable: true })
  async company(@Ctx() context?: MyContext): Promise<Info | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ name: 'SpaceX' })
      .toArray();
    return data;
  }
}
