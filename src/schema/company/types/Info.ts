import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Address } from '../../global/Address';
import { InfoLinks } from './InfoLinks';

@ObjectType()
export class Info {
  @Field({ nullable: true })
  ceo?: string;

  @Field({ nullable: true })
  coo?: string;

  @Field({ nullable: true })
  cto_propulsion?: string;

  @Field({ nullable: true })
  cto?: string;

  @Field(() => Int, { nullable: true })
  employees?: number;

  @Field(() => Int, { nullable: true })
  founded?: number;

  @Field({ nullable: true })
  founder?: string;

  @Field(() => Address, { nullable: true })
  headquarters?: Address;

  @Field(() => Int, { nullable: true })
  launch_sites?: number;

  @Field(() => InfoLinks, { nullable: true })
  links?: InfoLinks;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field(() => Int, { nullable: true })
  test_sites?: number;

  @Field(() => Float, { nullable: true })
  valuation?: number;

  @Field(() => Int, { nullable: true })
  vehicles?: number;
}
