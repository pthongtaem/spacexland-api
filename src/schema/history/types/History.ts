import { ObjectType, Field, ID, Root, Ctx } from 'type-graphql';
import { Link } from '../../global/Link';
import { Launch } from '../../launch/types/Launch';
import { MyContext } from '../../../types/MyContext';
import { collection, parseLaunch } from '../../launch/utils';

@ObjectType()
export class History {
  @Field({ nullable: true })
  details: string;

  @Field({ nullable: true })
  event_date_unix: Date;

  @Field({ nullable: true })
  event_date_utc: Date;

  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => Link, { nullable: true })
  links: Link;

  @Field({ nullable: true })
  title: string;

  flight_number?: string;

  @Field(() => Launch, { nullable: true })
  async flight(
    @Root() parent: History,
    @Ctx() context?: MyContext,
  ): Promise<Launch | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ flight_number: parent.flight_number })
      .limit(1)
      .map(parseLaunch)
      .toArray();
    return data;
  }
}
