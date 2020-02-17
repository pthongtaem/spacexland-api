import { buildSchema } from 'type-graphql';
import { CapsuleResolver } from './capsule';
import { CompanyResolver } from './company';
import { CoreResolver } from './core';
import { DragonResolver } from './dragon';
import { GraphQLSchema } from 'graphql';
import { HistortyResolver } from './history';
import { LandPadResolver } from './landpad';
import { PayloadResolver } from './payload';
import { MissionResolver } from './mission';
import { RocketResolver } from './rocket';
import { LaunchResolver } from './launch';
import { LaunchPadResolver } from './launchpad';
import { RoadsterResolver } from './roaster';
import { ShipResolver } from './ship';

export default async (): Promise<GraphQLSchema> => {
  const schema = await buildSchema({
    resolvers: [
      CapsuleResolver,
      CompanyResolver,
      CoreResolver,
      DragonResolver,
      HistortyResolver,
      LandPadResolver,
      PayloadResolver,
      MissionResolver,
      RocketResolver,
      LaunchResolver,
      LaunchPadResolver,
      RoadsterResolver,
      ShipResolver,
    ],
  });

  return schema;
};
