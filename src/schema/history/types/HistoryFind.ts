import { InputType, Field, Int, ID } from 'type-graphql';

@InputType()
export class HistoryFind {
  @Field({ nullable: true })
  end: Date;
  @Field(() => Int, { nullable: true })
  flight_number: number;

  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  start: Date;
}
