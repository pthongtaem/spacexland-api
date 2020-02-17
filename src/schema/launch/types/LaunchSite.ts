import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class LaunchSite {
  @Field({ nullable: true })
  site_id: string;

  @Field({ nullable: true })
  site_name_long: string;

  @Field({ nullable: true })
  site_name: string;
}
