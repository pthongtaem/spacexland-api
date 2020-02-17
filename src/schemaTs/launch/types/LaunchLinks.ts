import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class LaunchLinks {
  @Field({ nullable: true })
  article_link: string;

  @Field(() => [String], { nullable: true })
  flickr_images: [string];

  @Field({ nullable: true })
  mission_patch_small: string;

  @Field({ nullable: true })
  mission_patch: string;

  @Field({ nullable: true })
  presskit: string;

  @Field({ nullable: true })
  reddit_campaign: string;

  @Field({ nullable: true })
  reddit_launch: string;

  @Field({ nullable: true })
  reddit_media: string;

  @Field({ nullable: true })
  reddit_recovery: string;

  @Field({ nullable: true })
  video_link: string;

  @Field({ nullable: true })
  wikipedia: string;
}
