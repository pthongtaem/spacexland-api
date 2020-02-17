import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class LaunchTelemetry {
  @Field({ nullable: true })
  flight_club: string;
}
