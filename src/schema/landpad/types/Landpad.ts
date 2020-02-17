import { ObjectType, Field, ID } from 'type-graphql';
import { Location } from '../../global/Location';

@ObjectType()
export class Landpad {
  @Field({ nullable: true })
  attempted_landings: string;

  @Field({ nullable: true })
  details: string;

  @Field({ nullable: true })
  full_name: string;

  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  landing_type: string;

  @Field(() => Location, { nullable: true })
  location: Location;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  successful_landings: string;

  @Field({ nullable: true })
  wikipedia: string;
}
