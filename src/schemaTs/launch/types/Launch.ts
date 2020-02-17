import { ObjectType, Field, Root, Ctx } from 'type-graphql';
import { LaunchSite } from './LaunchSite';
import { LaunchLinks } from './LaunchLinks';
import { LaunchRocket } from './LaunchRocket';
import { LaunchTelemetry } from './LaunchTelemetry';
import { Ship } from '../../ship/types/Ship';
import { MyContext } from '../../../types/MyContext';
import { collection, parseShips } from '../../ship/utils';

@ObjectType()
export class Launch {
  @Field({ nullable: true })
  details: string;

  @Field({ nullable: true })
  id: string;

  @Field(() => Boolean, { nullable: true })
  is_tentative: boolean;

  @Field({ nullable: true })
  launch_date_local: Date;

  @Field({ nullable: true })
  launch_date_unix: Date;

  @Field({ nullable: true })
  launch_date_utc: Date;

  @Field(() => LaunchSite, { nullable: true })
  launch_site: LaunchSite;

  @Field(() => Boolean, { nullable: true })
  launch_success: boolean;

  @Field({ nullable: true })
  launch_year: string;

  @Field(() => LaunchLinks, { nullable: true })
  links: LaunchLinks;

  @Field(() => [String], { nullable: 'itemsAndList' })
  mission_id: string[];

  @Field({ nullable: true })
  mission_name: string;

  @Field(() => LaunchRocket, { nullable: true })
  rocket: LaunchRocket;

  @Field({ nullable: true })
  static_fire_date_unix: Date;

  @Field({ nullable: true })
  static_fire_date_utc: Date;

  @Field(() => LaunchTelemetry, { nullable: true })
  telemetry: LaunchTelemetry;

  @Field({ nullable: true })
  tentative_max_precision: string;

  @Field(() => Boolean, { nullable: true })
  upcoming: boolean;

  @Field(() => [String], { nullable: 'itemsAndList' })
  shipsRaw?: string[];

  @Field(() => [Ship], { nullable: 'itemsAndList' })
  async ships(
    @Root() parent: Launch,
    @Ctx() context?: MyContext,
  ): Promise<Ship[] | null> {
    const result = await Promise.all(
      parent.shipsRaw.map(async id => {
        const [data] = await context.db
          .collection(collection)
          .find({ ship_id: id })
          .limit(1)
          .map(parseShips)
          .toArray();
        return data;
      }),
    );

    return result;
  }
}
