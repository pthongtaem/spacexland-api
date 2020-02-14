import { ObjectType, Field, ID } from 'type-graphql';
import { Link } from '../global/Link';

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
}
