export type Maybe<T> = T | null;

export interface CapsulesFind {
  id?: Maybe<string>;

  landings?: Maybe<number>;

  mission?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;
}

export interface CoresFind {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<string>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface HistoryFind {
  end?: Maybe<Date>;

  flight_number?: Maybe<number>;

  id?: Maybe<string>;

  start?: Maybe<Date>;
}

export interface LaunchFind {
  apoapsis_km?: Maybe<number>;

  block?: Maybe<number>;

  cap_serial?: Maybe<string>;

  capsule_reuse?: Maybe<string>;

  core_flight?: Maybe<number>;

  core_reuse?: Maybe<string>;

  core_serial?: Maybe<string>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  end?: Maybe<Date>;

  epoch?: Maybe<Date>;

  fairings_recovered?: Maybe<string>;

  fairings_recovery_attempt?: Maybe<string>;

  fairings_reuse?: Maybe<string>;

  fairings_reused?: Maybe<string>;

  fairings_ship?: Maybe<string>;

  gridfins?: Maybe<string>;

  id?: Maybe<string>;

  inclination_deg?: Maybe<number>;

  land_success?: Maybe<string>;

  landing_intent?: Maybe<string>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;

  launch_date_local?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_success?: Maybe<string>;

  launch_year?: Maybe<string>;

  legs?: Maybe<string>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  mission_id?: Maybe<string>;

  mission_name?: Maybe<string>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<string>;

  rocket_id?: Maybe<string>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  second_stage_block?: Maybe<string>;

  semi_major_axis_km?: Maybe<number>;

  ship?: Maybe<string>;

  side_core1_reuse?: Maybe<string>;

  side_core2_reuse?: Maybe<string>;

  site_id?: Maybe<string>;

  site_name_long?: Maybe<string>;

  site_name?: Maybe<string>;

  start?: Maybe<Date>;

  tbd?: Maybe<string>;

  tentative_max_precision?: Maybe<string>;

  tentative?: Maybe<string>;
}

export interface MissionsFind {
  id?: Maybe<string>;

  manufacturer?: Maybe<string>;

  name?: Maybe<string>;

  payload_id?: Maybe<string>;
}

export interface PayloadsFind {
  apoapsis_km?: Maybe<number>;

  customer?: Maybe<string>;

  eccentricity?: Maybe<number>;

  epoch?: Maybe<Date>;

  inclination_deg?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  manufacturer?: Maybe<string>;

  mean_motion?: Maybe<number>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit?: Maybe<string>;

  payload_id?: Maybe<string>;

  payload_type?: Maybe<string>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  reused?: Maybe<boolean>;

  semi_major_axis_km?: Maybe<number>;
}

export interface ShipsFind {
  id?: Maybe<string>;

  name?: Maybe<string>;

  model?: Maybe<string>;

  type?: Maybe<string>;

  role?: Maybe<string>;

  active?: Maybe<boolean>;

  imo?: Maybe<number>;

  mmsi?: Maybe<number>;

  abs?: Maybe<number>;

  class?: Maybe<number>;

  weight_lbs?: Maybe<number>;

  weight_kg?: Maybe<number>;

  year_built?: Maybe<number>;

  home_port?: Maybe<string>;

  status?: Maybe<string>;

  speed_kn?: Maybe<number>;

  course_deg?: Maybe<number>;

  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  successful_landings?: Maybe<number>;

  attempted_landings?: Maybe<number>;

  mission?: Maybe<string>;
}

export type Date = any;

export type ObjectId = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  capsules?: Maybe<(Maybe<Capsule>)[]>;

  capsulesPast?: Maybe<(Maybe<Capsule>)[]>;

  capsulesUpcoming?: Maybe<(Maybe<Capsule>)[]>;

  capsule?: Maybe<Capsule>;

  company?: Maybe<Info>;

  cores?: Maybe<(Maybe<Core>)[]>;

  coresPast?: Maybe<(Maybe<Core>)[]>;

  coresUpcoming?: Maybe<(Maybe<Core>)[]>;

  core?: Maybe<Core>;

  dragons?: Maybe<(Maybe<Dragon>)[]>;

  dragon?: Maybe<Dragon>;

  histories?: Maybe<(Maybe<History>)[]>;

  historiesResult?: Maybe<HistoriesResult>;

  history?: Maybe<History>;

  landpads?: Maybe<(Maybe<Landpad>)[]>;

  landpad?: Maybe<Landpad>;

  launches?: Maybe<(Maybe<Launch>)[]>;

  launchesPast?: Maybe<(Maybe<Launch>)[]>;

  launchesPastResult?: Maybe<LaunchesPastResult>;

  launchesUpcoming?: Maybe<(Maybe<Launch>)[]>;

  launch?: Maybe<Launch>;

  launchLatest?: Maybe<Launch>;

  launchNext?: Maybe<Launch>;

  launchpads?: Maybe<(Maybe<Launchpad>)[]>;

  launchpad?: Maybe<Launchpad>;

  missions?: Maybe<(Maybe<Mission>)[]>;

  missionsResult?: Maybe<MissionResult>;

  mission?: Maybe<Mission>;

  payloads?: Maybe<(Maybe<Payload>)[]>;

  payload?: Maybe<Payload>;

  roadster?: Maybe<Roadster>;

  rockets?: Maybe<(Maybe<Rocket>)[]>;

  rocketsResult?: Maybe<RocketsResult>;

  rocket?: Maybe<Rocket>;

  ships?: Maybe<(Maybe<Ship>)[]>;

  shipsResult?: Maybe<ShipsResult>;

  ship?: Maybe<Ship>;
}

export interface Capsule {
  id?: Maybe<string>;

  landings?: Maybe<number>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  status?: Maybe<string>;

  type?: Maybe<string>;

  dragon?: Maybe<Dragon>;
}

export interface CapsuleMission {
  flight?: Maybe<number>;

  name?: Maybe<string>;
}

export interface Dragon {
  active?: Maybe<boolean>;

  crew_capacity?: Maybe<number>;

  description?: Maybe<string>;

  diameter?: Maybe<Distance>;

  dry_mass_kg?: Maybe<number>;

  dry_mass_lb?: Maybe<number>;

  first_flight?: Maybe<string>;

  heat_shield?: Maybe<DragonHeatShield>;

  height_w_trunk?: Maybe<Distance>;

  id?: Maybe<string>;

  launch_payload_mass?: Maybe<Mass>;

  launch_payload_vol?: Maybe<Volume>;

  name?: Maybe<string>;

  orbit_duration_yr?: Maybe<number>;

  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;

  return_payload_mass?: Maybe<Mass>;

  return_payload_vol?: Maybe<Volume>;

  sidewall_angle_deg?: Maybe<number>;

  thrusters?: Maybe<(Maybe<DragonThrust>)[]>;

  trunk?: Maybe<DragonTrunk>;

  type?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Distance {
  feet?: Maybe<number>;

  meters?: Maybe<number>;
}

export interface DragonHeatShield {
  dev_partner?: Maybe<string>;

  material?: Maybe<string>;

  size_meters?: Maybe<number>;

  temp_degrees?: Maybe<number>;
}

export interface Mass {
  kg?: Maybe<number>;

  lb?: Maybe<number>;
}

export interface Volume {
  cubic_feet?: Maybe<number>;

  cubic_meters?: Maybe<number>;
}

export interface DragonPressurizedCapsule {
  payload_volume?: Maybe<Volume>;
}

export interface DragonThrust {
  amount?: Maybe<number>;

  fuel_1?: Maybe<string>;

  fuel_2?: Maybe<string>;

  pods?: Maybe<number>;

  thrust?: Maybe<Force>;

  type?: Maybe<string>;
}

export interface Force {
  kN?: Maybe<number>;

  lbf?: Maybe<number>;
}

export interface DragonTrunk {
  cargo?: Maybe<DragonTrunkCargo>;

  trunk_volume?: Maybe<Volume>;
}

export interface DragonTrunkCargo {
  solar_array?: Maybe<number>;

  unpressurized_cargo?: Maybe<boolean>;
}

export interface Info {
  ceo?: Maybe<string>;

  coo?: Maybe<string>;

  cto_propulsion?: Maybe<string>;

  cto?: Maybe<string>;

  employees?: Maybe<number>;

  founded?: Maybe<number>;

  founder?: Maybe<string>;

  headquarters?: Maybe<Address>;

  launch_sites?: Maybe<number>;

  links?: Maybe<InfoLinks>;

  name?: Maybe<string>;

  summary?: Maybe<string>;

  test_sites?: Maybe<number>;

  valuation?: Maybe<number>;

  vehicles?: Maybe<number>;
}

export interface Address {
  address?: Maybe<string>;

  city?: Maybe<string>;

  state?: Maybe<string>;
}

export interface InfoLinks {
  elon_twitter?: Maybe<string>;

  flickr?: Maybe<string>;

  twitter?: Maybe<string>;

  website?: Maybe<string>;
}

export interface Core {
  asds_attempts?: Maybe<number>;

  asds_landings?: Maybe<number>;

  block?: Maybe<number>;

  id?: Maybe<string>;

  missions?: Maybe<(Maybe<CapsuleMission>)[]>;

  original_launch?: Maybe<Date>;

  reuse_count?: Maybe<number>;

  rtls_attempts?: Maybe<number>;

  rtls_landings?: Maybe<number>;

  status?: Maybe<string>;

  water_landing?: Maybe<boolean>;
}

export interface History {
  details?: Maybe<string>;

  event_date_unix?: Maybe<Date>;

  event_date_utc?: Maybe<Date>;

  id?: Maybe<string>;

  links?: Maybe<Link>;

  title?: Maybe<string>;

  flight?: Maybe<Launch>;
}

export interface Link {
  article?: Maybe<string>;

  reddit?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Launch {
  details?: Maybe<string>;

  id?: Maybe<string>;

  is_tentative?: Maybe<boolean>;

  launch_date_local?: Maybe<Date>;

  launch_date_unix?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_site?: Maybe<LaunchSite>;

  launch_success?: Maybe<boolean>;

  launch_year?: Maybe<string>;

  links?: Maybe<LaunchLinks>;

  mission_id?: Maybe<(Maybe<string>)[]>;

  mission_name?: Maybe<string>;

  rocket?: Maybe<LaunchRocket>;

  static_fire_date_unix?: Maybe<Date>;

  static_fire_date_utc?: Maybe<Date>;

  telemetry?: Maybe<LaunchTelemetry>;

  tentative_max_precision?: Maybe<string>;

  upcoming?: Maybe<boolean>;

  ships?: Maybe<(Maybe<Ship>)[]>;
}

export interface LaunchSite {
  site_id?: Maybe<string>;

  site_name_long?: Maybe<string>;

  site_name?: Maybe<string>;
}

export interface LaunchLinks {
  article_link?: Maybe<string>;

  flickr_images?: Maybe<(Maybe<string>)[]>;

  mission_patch_small?: Maybe<string>;

  mission_patch?: Maybe<string>;

  presskit?: Maybe<string>;

  reddit_campaign?: Maybe<string>;

  reddit_launch?: Maybe<string>;

  reddit_media?: Maybe<string>;

  reddit_recovery?: Maybe<string>;

  video_link?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface LaunchRocket {
  fairings?: Maybe<LaunchRocketFairings>;

  first_stage?: Maybe<LaunchRocketFirstStage>;

  rocket_name?: Maybe<string>;

  rocket_type?: Maybe<string>;

  rocket?: Maybe<Rocket>;

  second_stage?: Maybe<LaunchRocketSecondStage>;
}

export interface LaunchRocketFairings {
  recovered?: Maybe<boolean>;

  recovery_attempt?: Maybe<boolean>;

  reused?: Maybe<boolean>;

  ship?: Maybe<string>;
}

export interface LaunchRocketFirstStage {
  cores?: Maybe<(Maybe<LaunchRocketFirstStageCore>)[]>;
}

export interface LaunchRocketFirstStageCore {
  block?: Maybe<number>;

  core?: Maybe<Core>;

  flight?: Maybe<number>;

  gridfins?: Maybe<boolean>;

  land_success?: Maybe<boolean>;

  landing_intent?: Maybe<boolean>;

  landing_type?: Maybe<string>;

  landing_vehicle?: Maybe<string>;

  legs?: Maybe<boolean>;

  reused?: Maybe<boolean>;
}

export interface Rocket {
  active?: Maybe<boolean>;

  boosters?: Maybe<number>;

  company?: Maybe<string>;

  cost_per_launch?: Maybe<number>;

  country?: Maybe<string>;

  description?: Maybe<string>;

  diameter?: Maybe<Distance>;

  engines?: Maybe<RocketEngines>;

  first_flight?: Maybe<Date>;

  first_stage?: Maybe<RocketFirstStage>;

  height?: Maybe<Distance>;

  id?: Maybe<string>;

  landing_legs?: Maybe<RocketLandingLegs>;

  mass?: Maybe<Mass>;

  name?: Maybe<string>;

  payload_weights?: Maybe<(Maybe<RocketPayloadWeight>)[]>;

  second_stage?: Maybe<RocketSecondStage>;

  stages?: Maybe<number>;

  success_rate_pct?: Maybe<number>;

  type?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface RocketEngines {
  number?: Maybe<number>;

  type?: Maybe<string>;

  version?: Maybe<string>;

  layout?: Maybe<string>;

  engine_loss_max?: Maybe<string>;

  propellant_1?: Maybe<string>;

  propellant_2?: Maybe<string>;

  thrust_sea_level?: Maybe<Force>;

  thrust_vacuum?: Maybe<Force>;

  thrust_to_weight?: Maybe<number>;
}

export interface RocketFirstStage {
  burn_time_sec?: Maybe<number>;

  engines?: Maybe<number>;

  fuel_amount_tons?: Maybe<number>;

  reusable?: Maybe<boolean>;

  thrust_sea_level?: Maybe<Force>;

  thrust_vacuum?: Maybe<Force>;
}

export interface RocketLandingLegs {
  number?: Maybe<number>;

  material?: Maybe<string>;
}

export interface RocketPayloadWeight {
  id?: Maybe<string>;

  kg?: Maybe<number>;

  lb?: Maybe<number>;

  name?: Maybe<string>;
}

export interface RocketSecondStage {
  burn_time_sec?: Maybe<number>;

  engines?: Maybe<number>;

  fuel_amount_tons?: Maybe<number>;

  payloads?: Maybe<RocketSecondStagePayloads>;

  thrust?: Maybe<Force>;
}

export interface RocketSecondStagePayloads {
  option_1?: Maybe<string>;

  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
}

export interface RocketSecondStagePayloadCompositeFairing {
  height?: Maybe<Distance>;

  diameter?: Maybe<Distance>;
}

export interface LaunchRocketSecondStage {
  block?: Maybe<number>;

  payloads?: Maybe<(Maybe<Payload>)[]>;
}

export interface Payload {
  customers?: Maybe<(Maybe<string>)[]>;

  id?: Maybe<string>;

  manufacturer?: Maybe<string>;

  nationality?: Maybe<string>;

  norad_id?: Maybe<(Maybe<number>)[]>;

  orbit_params?: Maybe<PayloadOrbitParams>;

  orbit?: Maybe<string>;

  payload_mass_kg?: Maybe<number>;

  payload_mass_lbs?: Maybe<number>;

  payload_type?: Maybe<string>;

  reused?: Maybe<boolean>;
}

export interface PayloadOrbitParams {
  apoapsis_km?: Maybe<number>;

  arg_of_pericenter?: Maybe<number>;

  eccentricity?: Maybe<number>;

  epoch?: Maybe<Date>;

  inclination_deg?: Maybe<number>;

  lifespan_years?: Maybe<number>;

  longitude?: Maybe<number>;

  mean_anomaly?: Maybe<number>;

  mean_motion?: Maybe<number>;

  periapsis_km?: Maybe<number>;

  period_min?: Maybe<number>;

  raan?: Maybe<number>;

  reference_system?: Maybe<string>;

  regime?: Maybe<string>;

  semi_major_axis_km?: Maybe<number>;
}

export interface LaunchTelemetry {
  flight_club?: Maybe<string>;
}

export interface Ship {
  abs?: Maybe<number>;

  active?: Maybe<boolean>;

  attempted_landings?: Maybe<number>;

  class?: Maybe<number>;

  course_deg?: Maybe<number>;

  home_port?: Maybe<string>;

  id?: Maybe<string>;

  image?: Maybe<string>;

  imo?: Maybe<number>;

  missions?: Maybe<(Maybe<ShipMission>)[]>;

  mmsi?: Maybe<number>;

  model?: Maybe<string>;

  name?: Maybe<string>;

  position?: Maybe<ShipLocation>;

  roles?: Maybe<(Maybe<string>)[]>;

  speed_kn?: Maybe<number>;

  status?: Maybe<string>;

  successful_landings?: Maybe<number>;

  type?: Maybe<string>;

  url?: Maybe<string>;

  weight_kg?: Maybe<number>;

  weight_lbs?: Maybe<number>;

  year_built?: Maybe<number>;
}

export interface ShipMission {
  flight?: Maybe<string>;

  name?: Maybe<string>;
}

export interface ShipLocation {
  latitude?: Maybe<number>;

  longitude?: Maybe<number>;
}

export interface HistoriesResult {
  result?: Maybe<Result>;

  data?: Maybe<(Maybe<History>)[]>;
}

export interface Result {
  totalCount?: Maybe<number>;
}

export interface Landpad {
  attempted_landings?: Maybe<string>;

  details?: Maybe<string>;

  full_name?: Maybe<string>;

  id?: Maybe<string>;

  landing_type?: Maybe<string>;

  location?: Maybe<Location>;

  status?: Maybe<string>;

  successful_landings?: Maybe<string>;

  wikipedia?: Maybe<string>;
}

export interface Location {
  latitude?: Maybe<number>;

  longitude?: Maybe<number>;

  name?: Maybe<string>;

  region?: Maybe<string>;
}

export interface LaunchesPastResult {
  result?: Maybe<Result>;

  data?: Maybe<(Maybe<Launch>)[]>;
}

export interface Launchpad {
  attempted_launches?: Maybe<number>;

  details?: Maybe<string>;

  id?: Maybe<string>;

  location?: Maybe<Location>;

  name?: Maybe<string>;

  status?: Maybe<string>;

  successful_launches?: Maybe<number>;

  vehicles_launched?: Maybe<(Maybe<Rocket>)[]>;

  wikipedia?: Maybe<string>;
}

export interface Mission {
  description?: Maybe<string>;

  id?: Maybe<string>;

  manufacturers?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  twitter?: Maybe<string>;

  website?: Maybe<string>;

  wikipedia?: Maybe<string>;

  payloads?: Maybe<(Maybe<Payload>)[]>;
}

export interface MissionResult {
  result?: Maybe<Result>;

  data?: Maybe<(Maybe<Mission>)[]>;
}

export interface Roadster {
  apoapsis_au?: Maybe<number>;

  details?: Maybe<string>;

  earth_distance_km?: Maybe<number>;

  earth_distance_mi?: Maybe<number>;

  eccentricity?: Maybe<number>;

  epoch_jd?: Maybe<number>;

  inclination?: Maybe<number>;

  launch_date_unix?: Maybe<Date>;

  launch_date_utc?: Maybe<Date>;

  launch_mass_kg?: Maybe<number>;

  launch_mass_lbs?: Maybe<number>;

  longitude?: Maybe<number>;

  mars_distance_km?: Maybe<number>;

  mars_distance_mi?: Maybe<number>;

  name?: Maybe<string>;

  norad_id?: Maybe<number>;

  orbit_type?: Maybe<number>;

  periapsis_arg?: Maybe<number>;

  periapsis_au?: Maybe<number>;

  period_days?: Maybe<number>;

  semi_major_axis_au?: Maybe<number>;

  speed_kph?: Maybe<number>;

  speed_mph?: Maybe<number>;

  wikipedia?: Maybe<string>;
}

export interface RocketsResult {
  result?: Maybe<Result>;

  data?: Maybe<(Maybe<Rocket>)[]>;
}

export interface ShipsResult {
  result?: Maybe<Result>;

  data?: Maybe<(Maybe<Ship>)[]>;
}

export interface Mutation {}

export interface Subscription {}

export interface CoreMission {
  name?: Maybe<string>;

  flight?: Maybe<number>;
}

// ====================================================
// Arguments
// ====================================================

export interface CapsulesQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsulesPastQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsulesUpcomingQueryArgs {
  find?: Maybe<CapsulesFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CapsuleQueryArgs {
  id: string;
}
export interface CoresQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoresPastQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoresUpcomingQueryArgs {
  find?: Maybe<CoresFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface CoreQueryArgs {
  id: string;
}
export interface DragonsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface DragonQueryArgs {
  id: string;
}
export interface HistoriesQueryArgs {
  find?: Maybe<HistoryFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface HistoriesResultQueryArgs {
  find?: Maybe<HistoryFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface HistoryQueryArgs {
  id: string;
}
export interface LandpadsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface LandpadQueryArgs {
  id: string;
}
export interface LaunchesQueryArgs {
  find?: Maybe<LaunchFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface LaunchesPastQueryArgs {
  find?: Maybe<LaunchFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface LaunchesPastResultQueryArgs {
  find?: Maybe<LaunchFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface LaunchesUpcomingQueryArgs {
  find?: Maybe<LaunchFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface LaunchQueryArgs {
  id: string;
}
export interface LaunchLatestQueryArgs {
  offset?: Maybe<number>;
}
export interface LaunchNextQueryArgs {
  offset?: Maybe<number>;
}
export interface LaunchpadsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface LaunchpadQueryArgs {
  id: string;
}
export interface MissionsQueryArgs {
  find?: Maybe<MissionsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface MissionsResultQueryArgs {
  find?: Maybe<MissionsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface MissionQueryArgs {
  id: string;
}
export interface PayloadsQueryArgs {
  find?: Maybe<PayloadsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface PayloadQueryArgs {
  id: string;
}
export interface RocketsQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface RocketsResultQueryArgs {
  limit?: Maybe<number>;

  offset?: Maybe<number>;
}
export interface RocketQueryArgs {
  id: string;
}
export interface ShipsQueryArgs {
  find?: Maybe<ShipsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface ShipsResultQueryArgs {
  find?: Maybe<ShipsFind>;

  limit?: Maybe<number>;

  offset?: Maybe<number>;

  order?: Maybe<string>;

  sort?: Maybe<string>;
}
export interface ShipQueryArgs {
  id: string;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { MyContext } from "./context";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = {}> {
    capsules?: CapsulesResolver<
      Maybe<(Maybe<Capsule>)[]>,
      TypeParent,
      TContext
    >;

    capsulesPast?: CapsulesPastResolver<
      Maybe<(Maybe<Capsule>)[]>,
      TypeParent,
      TContext
    >;

    capsulesUpcoming?: CapsulesUpcomingResolver<
      Maybe<(Maybe<Capsule>)[]>,
      TypeParent,
      TContext
    >;

    capsule?: CapsuleResolver<Maybe<Capsule>, TypeParent, TContext>;

    company?: CompanyResolver<Maybe<Info>, TypeParent, TContext>;

    cores?: CoresResolver<Maybe<(Maybe<Core>)[]>, TypeParent, TContext>;

    coresPast?: CoresPastResolver<Maybe<(Maybe<Core>)[]>, TypeParent, TContext>;

    coresUpcoming?: CoresUpcomingResolver<
      Maybe<(Maybe<Core>)[]>,
      TypeParent,
      TContext
    >;

    core?: CoreResolver<Maybe<Core>, TypeParent, TContext>;

    dragons?: DragonsResolver<Maybe<(Maybe<Dragon>)[]>, TypeParent, TContext>;

    dragon?: DragonResolver<Maybe<Dragon>, TypeParent, TContext>;

    histories?: HistoriesResolver<
      Maybe<(Maybe<History>)[]>,
      TypeParent,
      TContext
    >;

    historiesResult?: HistoriesResultResolver<
      Maybe<HistoriesResult>,
      TypeParent,
      TContext
    >;

    history?: HistoryResolver<Maybe<History>, TypeParent, TContext>;

    landpads?: LandpadsResolver<
      Maybe<(Maybe<Landpad>)[]>,
      TypeParent,
      TContext
    >;

    landpad?: LandpadResolver<Maybe<Landpad>, TypeParent, TContext>;

    launches?: LaunchesResolver<Maybe<(Maybe<Launch>)[]>, TypeParent, TContext>;

    launchesPast?: LaunchesPastResolver<
      Maybe<(Maybe<Launch>)[]>,
      TypeParent,
      TContext
    >;

    launchesPastResult?: LaunchesPastResultResolver<
      Maybe<LaunchesPastResult>,
      TypeParent,
      TContext
    >;

    launchesUpcoming?: LaunchesUpcomingResolver<
      Maybe<(Maybe<Launch>)[]>,
      TypeParent,
      TContext
    >;

    launch?: LaunchResolver<Maybe<Launch>, TypeParent, TContext>;

    launchLatest?: LaunchLatestResolver<Maybe<Launch>, TypeParent, TContext>;

    launchNext?: LaunchNextResolver<Maybe<Launch>, TypeParent, TContext>;

    launchpads?: LaunchpadsResolver<
      Maybe<(Maybe<Launchpad>)[]>,
      TypeParent,
      TContext
    >;

    launchpad?: LaunchpadResolver<Maybe<Launchpad>, TypeParent, TContext>;

    missions?: MissionsResolver<
      Maybe<(Maybe<Mission>)[]>,
      TypeParent,
      TContext
    >;

    missionsResult?: MissionsResultResolver<
      Maybe<MissionResult>,
      TypeParent,
      TContext
    >;

    mission?: MissionResolver<Maybe<Mission>, TypeParent, TContext>;

    payloads?: PayloadsResolver<
      Maybe<(Maybe<Payload>)[]>,
      TypeParent,
      TContext
    >;

    payload?: PayloadResolver<Maybe<Payload>, TypeParent, TContext>;

    roadster?: RoadsterResolver<Maybe<Roadster>, TypeParent, TContext>;

    rockets?: RocketsResolver<Maybe<(Maybe<Rocket>)[]>, TypeParent, TContext>;

    rocketsResult?: RocketsResultResolver<
      Maybe<RocketsResult>,
      TypeParent,
      TContext
    >;

    rocket?: RocketResolver<Maybe<Rocket>, TypeParent, TContext>;

    ships?: ShipsResolver<Maybe<(Maybe<Ship>)[]>, TypeParent, TContext>;

    shipsResult?: ShipsResultResolver<Maybe<ShipsResult>, TypeParent, TContext>;

    ship?: ShipResolver<Maybe<Ship>, TypeParent, TContext>;
  }

  export type CapsulesResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CapsulesArgs>;
  export interface CapsulesArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsulesPastResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CapsulesPastArgs>;
  export interface CapsulesPastArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsulesUpcomingResolver<
    R = Maybe<(Maybe<Capsule>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CapsulesUpcomingArgs>;
  export interface CapsulesUpcomingArgs {
    find?: Maybe<CapsulesFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CapsuleResolver<
    R = Maybe<Capsule>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CapsuleArgs>;
  export interface CapsuleArgs {
    id: string;
  }

  export type CompanyResolver<
    R = Maybe<Info>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CoresResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CoresArgs>;
  export interface CoresArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoresPastResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CoresPastArgs>;
  export interface CoresPastArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoresUpcomingResolver<
    R = Maybe<(Maybe<Core>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CoresUpcomingArgs>;
  export interface CoresUpcomingArgs {
    find?: Maybe<CoresFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type CoreResolver<
    R = Maybe<Core>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, CoreArgs>;
  export interface CoreArgs {
    id: string;
  }

  export type DragonsResolver<
    R = Maybe<(Maybe<Dragon>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, DragonsArgs>;
  export interface DragonsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type DragonResolver<
    R = Maybe<Dragon>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, DragonArgs>;
  export interface DragonArgs {
    id: string;
  }

  export type HistoriesResolver<
    R = Maybe<(Maybe<History>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, HistoriesArgs>;
  export interface HistoriesArgs {
    find?: Maybe<HistoryFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type HistoriesResultResolver<
    R = Maybe<HistoriesResult>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, HistoriesResultArgs>;
  export interface HistoriesResultArgs {
    find?: Maybe<HistoryFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type HistoryResolver<
    R = Maybe<History>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, HistoryArgs>;
  export interface HistoryArgs {
    id: string;
  }

  export type LandpadsResolver<
    R = Maybe<(Maybe<Landpad>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LandpadsArgs>;
  export interface LandpadsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type LandpadResolver<
    R = Maybe<Landpad>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LandpadArgs>;
  export interface LandpadArgs {
    id: string;
  }

  export type LaunchesResolver<
    R = Maybe<(Maybe<Launch>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchesArgs>;
  export interface LaunchesArgs {
    find?: Maybe<LaunchFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type LaunchesPastResolver<
    R = Maybe<(Maybe<Launch>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchesPastArgs>;
  export interface LaunchesPastArgs {
    find?: Maybe<LaunchFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type LaunchesPastResultResolver<
    R = Maybe<LaunchesPastResult>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchesPastResultArgs>;
  export interface LaunchesPastResultArgs {
    find?: Maybe<LaunchFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type LaunchesUpcomingResolver<
    R = Maybe<(Maybe<Launch>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchesUpcomingArgs>;
  export interface LaunchesUpcomingArgs {
    find?: Maybe<LaunchFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type LaunchResolver<
    R = Maybe<Launch>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchArgs>;
  export interface LaunchArgs {
    id: string;
  }

  export type LaunchLatestResolver<
    R = Maybe<Launch>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchLatestArgs>;
  export interface LaunchLatestArgs {
    offset?: Maybe<number>;
  }

  export type LaunchNextResolver<
    R = Maybe<Launch>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchNextArgs>;
  export interface LaunchNextArgs {
    offset?: Maybe<number>;
  }

  export type LaunchpadsResolver<
    R = Maybe<(Maybe<Launchpad>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchpadsArgs>;
  export interface LaunchpadsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type LaunchpadResolver<
    R = Maybe<Launchpad>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, LaunchpadArgs>;
  export interface LaunchpadArgs {
    id: string;
  }

  export type MissionsResolver<
    R = Maybe<(Maybe<Mission>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, MissionsArgs>;
  export interface MissionsArgs {
    find?: Maybe<MissionsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type MissionsResultResolver<
    R = Maybe<MissionResult>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, MissionsResultArgs>;
  export interface MissionsResultArgs {
    find?: Maybe<MissionsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type MissionResolver<
    R = Maybe<Mission>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, MissionArgs>;
  export interface MissionArgs {
    id: string;
  }

  export type PayloadsResolver<
    R = Maybe<(Maybe<Payload>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, PayloadsArgs>;
  export interface PayloadsArgs {
    find?: Maybe<PayloadsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type PayloadResolver<
    R = Maybe<Payload>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, PayloadArgs>;
  export interface PayloadArgs {
    id: string;
  }

  export type RoadsterResolver<
    R = Maybe<Roadster>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RocketsResolver<
    R = Maybe<(Maybe<Rocket>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, RocketsArgs>;
  export interface RocketsArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type RocketsResultResolver<
    R = Maybe<RocketsResult>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, RocketsResultArgs>;
  export interface RocketsResultArgs {
    limit?: Maybe<number>;

    offset?: Maybe<number>;
  }

  export type RocketResolver<
    R = Maybe<Rocket>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, RocketArgs>;
  export interface RocketArgs {
    id: string;
  }

  export type ShipsResolver<
    R = Maybe<(Maybe<Ship>)[]>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, ShipsArgs>;
  export interface ShipsArgs {
    find?: Maybe<ShipsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type ShipsResultResolver<
    R = Maybe<ShipsResult>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, ShipsResultArgs>;
  export interface ShipsResultArgs {
    find?: Maybe<ShipsFind>;

    limit?: Maybe<number>;

    offset?: Maybe<number>;

    order?: Maybe<string>;

    sort?: Maybe<string>;
  }

  export type ShipResolver<
    R = Maybe<Ship>,
    Parent = {},
    TContext = MyContext
  > = Resolver<R, Parent, TContext, ShipArgs>;
  export interface ShipArgs {
    id: string;
  }
}

export namespace CapsuleResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Capsule> {
    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    landings?: LandingsResolver<Maybe<number>, TypeParent, TContext>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      TContext
    >;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, TContext>;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, TContext>;

    status?: StatusResolver<Maybe<string>, TypeParent, TContext>;

    type?: TypeResolver<Maybe<string>, TypeParent, TContext>;

    dragon?: DragonResolver<Maybe<Dragon>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LandingsResolver<
    R = Maybe<number>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReuseCountResolver<
    R = Maybe<number>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DragonResolver<
    R = Maybe<Dragon>,
    Parent = Capsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace CapsuleMissionResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = CapsuleMission
  > {
    flight?: FlightResolver<Maybe<number>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type FlightResolver<
    R = Maybe<number>,
    Parent = CapsuleMission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = CapsuleMission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DragonResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Dragon> {
    active?: ActiveResolver<Maybe<boolean>, TypeParent, TContext>;

    crew_capacity?: CrewCapacityResolver<Maybe<number>, TypeParent, TContext>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, TContext>;

    dry_mass_kg?: DryMassKgResolver<Maybe<number>, TypeParent, TContext>;

    dry_mass_lb?: DryMassLbResolver<Maybe<number>, TypeParent, TContext>;

    first_flight?: FirstFlightResolver<Maybe<string>, TypeParent, TContext>;

    heat_shield?: HeatShieldResolver<
      Maybe<DragonHeatShield>,
      TypeParent,
      TContext
    >;

    height_w_trunk?: HeightWTrunkResolver<
      Maybe<Distance>,
      TypeParent,
      TContext
    >;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    launch_payload_mass?: LaunchPayloadMassResolver<
      Maybe<Mass>,
      TypeParent,
      TContext
    >;

    launch_payload_vol?: LaunchPayloadVolResolver<
      Maybe<Volume>,
      TypeParent,
      TContext
    >;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    orbit_duration_yr?: OrbitDurationYrResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    pressurized_capsule?: PressurizedCapsuleResolver<
      Maybe<DragonPressurizedCapsule>,
      TypeParent,
      TContext
    >;

    return_payload_mass?: ReturnPayloadMassResolver<
      Maybe<Mass>,
      TypeParent,
      TContext
    >;

    return_payload_vol?: ReturnPayloadVolResolver<
      Maybe<Volume>,
      TypeParent,
      TContext
    >;

    sidewall_angle_deg?: SidewallAngleDegResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    thrusters?: ThrustersResolver<
      Maybe<(Maybe<DragonThrust>)[]>,
      TypeParent,
      TContext
    >;

    trunk?: TrunkResolver<Maybe<DragonTrunk>, TypeParent, TContext>;

    type?: TypeResolver<Maybe<string>, TypeParent, TContext>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CrewCapacityResolver<
    R = Maybe<number>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DiameterResolver<
    R = Maybe<Distance>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DryMassKgResolver<
    R = Maybe<number>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DryMassLbResolver<
    R = Maybe<number>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FirstFlightResolver<
    R = Maybe<string>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HeatShieldResolver<
    R = Maybe<DragonHeatShield>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HeightWTrunkResolver<
    R = Maybe<Distance>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchPayloadMassResolver<
    R = Maybe<Mass>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchPayloadVolResolver<
    R = Maybe<Volume>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OrbitDurationYrResolver<
    R = Maybe<number>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PressurizedCapsuleResolver<
    R = Maybe<DragonPressurizedCapsule>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReturnPayloadMassResolver<
    R = Maybe<Mass>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReturnPayloadVolResolver<
    R = Maybe<Volume>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SidewallAngleDegResolver<
    R = Maybe<number>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustersResolver<
    R = Maybe<(Maybe<DragonThrust>)[]>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TrunkResolver<
    R = Maybe<DragonTrunk>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Dragon,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DistanceResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Distance> {
    feet?: FeetResolver<Maybe<number>, TypeParent, TContext>;

    meters?: MetersResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type FeetResolver<
    R = Maybe<number>,
    Parent = Distance,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MetersResolver<
    R = Maybe<number>,
    Parent = Distance,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DragonHeatShieldResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = DragonHeatShield
  > {
    dev_partner?: DevPartnerResolver<Maybe<string>, TypeParent, TContext>;

    material?: MaterialResolver<Maybe<string>, TypeParent, TContext>;

    size_meters?: SizeMetersResolver<Maybe<number>, TypeParent, TContext>;

    temp_degrees?: TempDegreesResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type DevPartnerResolver<
    R = Maybe<string>,
    Parent = DragonHeatShield,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MaterialResolver<
    R = Maybe<string>,
    Parent = DragonHeatShield,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SizeMetersResolver<
    R = Maybe<number>,
    Parent = DragonHeatShield,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TempDegreesResolver<
    R = Maybe<number>,
    Parent = DragonHeatShield,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MassResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Mass> {
    kg?: KgResolver<Maybe<number>, TypeParent, TContext>;

    lb?: LbResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type KgResolver<
    R = Maybe<number>,
    Parent = Mass,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LbResolver<
    R = Maybe<number>,
    Parent = Mass,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace VolumeResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Volume> {
    cubic_feet?: CubicFeetResolver<Maybe<number>, TypeParent, TContext>;

    cubic_meters?: CubicMetersResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type CubicFeetResolver<
    R = Maybe<number>,
    Parent = Volume,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CubicMetersResolver<
    R = Maybe<number>,
    Parent = Volume,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DragonPressurizedCapsuleResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = DragonPressurizedCapsule
  > {
    payload_volume?: PayloadVolumeResolver<Maybe<Volume>, TypeParent, TContext>;
  }

  export type PayloadVolumeResolver<
    R = Maybe<Volume>,
    Parent = DragonPressurizedCapsule,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DragonThrustResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = DragonThrust> {
    amount?: AmountResolver<Maybe<number>, TypeParent, TContext>;

    fuel_1?: Fuel_1Resolver<Maybe<string>, TypeParent, TContext>;

    fuel_2?: Fuel_2Resolver<Maybe<string>, TypeParent, TContext>;

    pods?: PodsResolver<Maybe<number>, TypeParent, TContext>;

    thrust?: ThrustResolver<Maybe<Force>, TypeParent, TContext>;

    type?: TypeResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type AmountResolver<
    R = Maybe<number>,
    Parent = DragonThrust,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type Fuel_1Resolver<
    R = Maybe<string>,
    Parent = DragonThrust,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type Fuel_2Resolver<
    R = Maybe<string>,
    Parent = DragonThrust,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PodsResolver<
    R = Maybe<number>,
    Parent = DragonThrust,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustResolver<
    R = Maybe<Force>,
    Parent = DragonThrust,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = DragonThrust,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ForceResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Force> {
    kN?: KNResolver<Maybe<number>, TypeParent, TContext>;

    lbf?: LbfResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type KNResolver<
    R = Maybe<number>,
    Parent = Force,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LbfResolver<
    R = Maybe<number>,
    Parent = Force,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DragonTrunkResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = DragonTrunk> {
    cargo?: CargoResolver<Maybe<DragonTrunkCargo>, TypeParent, TContext>;

    trunk_volume?: TrunkVolumeResolver<Maybe<Volume>, TypeParent, TContext>;
  }

  export type CargoResolver<
    R = Maybe<DragonTrunkCargo>,
    Parent = DragonTrunk,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TrunkVolumeResolver<
    R = Maybe<Volume>,
    Parent = DragonTrunk,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DragonTrunkCargoResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = DragonTrunkCargo
  > {
    solar_array?: SolarArrayResolver<Maybe<number>, TypeParent, TContext>;

    unpressurized_cargo?: UnpressurizedCargoResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;
  }

  export type SolarArrayResolver<
    R = Maybe<number>,
    Parent = DragonTrunkCargo,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type UnpressurizedCargoResolver<
    R = Maybe<boolean>,
    Parent = DragonTrunkCargo,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace InfoResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Info> {
    ceo?: CeoResolver<Maybe<string>, TypeParent, TContext>;

    coo?: CooResolver<Maybe<string>, TypeParent, TContext>;

    cto_propulsion?: CtoPropulsionResolver<Maybe<string>, TypeParent, TContext>;

    cto?: CtoResolver<Maybe<string>, TypeParent, TContext>;

    employees?: EmployeesResolver<Maybe<number>, TypeParent, TContext>;

    founded?: FoundedResolver<Maybe<number>, TypeParent, TContext>;

    founder?: FounderResolver<Maybe<string>, TypeParent, TContext>;

    headquarters?: HeadquartersResolver<Maybe<Address>, TypeParent, TContext>;

    launch_sites?: LaunchSitesResolver<Maybe<number>, TypeParent, TContext>;

    links?: LinksResolver<Maybe<InfoLinks>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    summary?: SummaryResolver<Maybe<string>, TypeParent, TContext>;

    test_sites?: TestSitesResolver<Maybe<number>, TypeParent, TContext>;

    valuation?: ValuationResolver<Maybe<number>, TypeParent, TContext>;

    vehicles?: VehiclesResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type CeoResolver<
    R = Maybe<string>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CooResolver<
    R = Maybe<string>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CtoPropulsionResolver<
    R = Maybe<string>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CtoResolver<
    R = Maybe<string>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EmployeesResolver<
    R = Maybe<number>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FoundedResolver<
    R = Maybe<number>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FounderResolver<
    R = Maybe<string>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HeadquartersResolver<
    R = Maybe<Address>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchSitesResolver<
    R = Maybe<number>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LinksResolver<
    R = Maybe<InfoLinks>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SummaryResolver<
    R = Maybe<string>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TestSitesResolver<
    R = Maybe<number>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ValuationResolver<
    R = Maybe<number>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type VehiclesResolver<
    R = Maybe<number>,
    Parent = Info,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace AddressResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Address> {
    address?: AddressResolver<Maybe<string>, TypeParent, TContext>;

    city?: CityResolver<Maybe<string>, TypeParent, TContext>;

    state?: StateResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type AddressResolver<
    R = Maybe<string>,
    Parent = Address,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CityResolver<
    R = Maybe<string>,
    Parent = Address,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StateResolver<
    R = Maybe<string>,
    Parent = Address,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace InfoLinksResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = InfoLinks> {
    elon_twitter?: ElonTwitterResolver<Maybe<string>, TypeParent, TContext>;

    flickr?: FlickrResolver<Maybe<string>, TypeParent, TContext>;

    twitter?: TwitterResolver<Maybe<string>, TypeParent, TContext>;

    website?: WebsiteResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type ElonTwitterResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FlickrResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TwitterResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WebsiteResolver<
    R = Maybe<string>,
    Parent = InfoLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace CoreResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Core> {
    asds_attempts?: AsdsAttemptsResolver<Maybe<number>, TypeParent, TContext>;

    asds_landings?: AsdsLandingsResolver<Maybe<number>, TypeParent, TContext>;

    block?: BlockResolver<Maybe<number>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    missions?: MissionsResolver<
      Maybe<(Maybe<CapsuleMission>)[]>,
      TypeParent,
      TContext
    >;

    original_launch?: OriginalLaunchResolver<Maybe<Date>, TypeParent, TContext>;

    reuse_count?: ReuseCountResolver<Maybe<number>, TypeParent, TContext>;

    rtls_attempts?: RtlsAttemptsResolver<Maybe<number>, TypeParent, TContext>;

    rtls_landings?: RtlsLandingsResolver<Maybe<number>, TypeParent, TContext>;

    status?: StatusResolver<Maybe<string>, TypeParent, TContext>;

    water_landing?: WaterLandingResolver<Maybe<boolean>, TypeParent, TContext>;
  }

  export type AsdsAttemptsResolver<
    R = Maybe<number>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type AsdsLandingsResolver<
    R = Maybe<number>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BlockResolver<
    R = Maybe<number>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MissionsResolver<
    R = Maybe<(Maybe<CapsuleMission>)[]>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OriginalLaunchResolver<
    R = Maybe<Date>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReuseCountResolver<
    R = Maybe<number>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RtlsAttemptsResolver<
    R = Maybe<number>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RtlsLandingsResolver<
    R = Maybe<number>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WaterLandingResolver<
    R = Maybe<boolean>,
    Parent = Core,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace HistoryResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = History> {
    details?: DetailsResolver<Maybe<string>, TypeParent, TContext>;

    event_date_unix?: EventDateUnixResolver<Maybe<Date>, TypeParent, TContext>;

    event_date_utc?: EventDateUtcResolver<Maybe<Date>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    links?: LinksResolver<Maybe<Link>, TypeParent, TContext>;

    title?: TitleResolver<Maybe<string>, TypeParent, TContext>;

    flight?: FlightResolver<Maybe<Launch>, TypeParent, TContext>;
  }

  export type DetailsResolver<
    R = Maybe<string>,
    Parent = History,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EventDateUnixResolver<
    R = Maybe<Date>,
    Parent = History,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EventDateUtcResolver<
    R = Maybe<Date>,
    Parent = History,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = History,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LinksResolver<
    R = Maybe<Link>,
    Parent = History,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TitleResolver<
    R = Maybe<string>,
    Parent = History,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FlightResolver<
    R = Maybe<Launch>,
    Parent = History,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LinkResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Link> {
    article?: ArticleResolver<Maybe<string>, TypeParent, TContext>;

    reddit?: RedditResolver<Maybe<string>, TypeParent, TContext>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type ArticleResolver<
    R = Maybe<string>,
    Parent = Link,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RedditResolver<
    R = Maybe<string>,
    Parent = Link,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Link,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Launch> {
    details?: DetailsResolver<Maybe<string>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    is_tentative?: IsTentativeResolver<Maybe<boolean>, TypeParent, TContext>;

    launch_date_local?: LaunchDateLocalResolver<
      Maybe<Date>,
      TypeParent,
      TContext
    >;

    launch_date_unix?: LaunchDateUnixResolver<
      Maybe<Date>,
      TypeParent,
      TContext
    >;

    launch_date_utc?: LaunchDateUtcResolver<Maybe<Date>, TypeParent, TContext>;

    launch_site?: LaunchSiteResolver<Maybe<LaunchSite>, TypeParent, TContext>;

    launch_success?: LaunchSuccessResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    launch_year?: LaunchYearResolver<Maybe<string>, TypeParent, TContext>;

    links?: LinksResolver<Maybe<LaunchLinks>, TypeParent, TContext>;

    mission_id?: MissionIdResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      TContext
    >;

    mission_name?: MissionNameResolver<Maybe<string>, TypeParent, TContext>;

    rocket?: RocketResolver<Maybe<LaunchRocket>, TypeParent, TContext>;

    static_fire_date_unix?: StaticFireDateUnixResolver<
      Maybe<Date>,
      TypeParent,
      TContext
    >;

    static_fire_date_utc?: StaticFireDateUtcResolver<
      Maybe<Date>,
      TypeParent,
      TContext
    >;

    telemetry?: TelemetryResolver<Maybe<LaunchTelemetry>, TypeParent, TContext>;

    tentative_max_precision?: TentativeMaxPrecisionResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    upcoming?: UpcomingResolver<Maybe<boolean>, TypeParent, TContext>;

    ships?: ShipsResolver<Maybe<(Maybe<Ship>)[]>, TypeParent, TContext>;
  }

  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IsTentativeResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchDateLocalResolver<
    R = Maybe<Date>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchDateUnixResolver<
    R = Maybe<Date>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchDateUtcResolver<
    R = Maybe<Date>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchSiteResolver<
    R = Maybe<LaunchSite>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchSuccessResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchYearResolver<
    R = Maybe<string>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LinksResolver<
    R = Maybe<LaunchLinks>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MissionIdResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MissionNameResolver<
    R = Maybe<string>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RocketResolver<
    R = Maybe<LaunchRocket>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StaticFireDateUnixResolver<
    R = Maybe<Date>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StaticFireDateUtcResolver<
    R = Maybe<Date>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TelemetryResolver<
    R = Maybe<LaunchTelemetry>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TentativeMaxPrecisionResolver<
    R = Maybe<string>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type UpcomingResolver<
    R = Maybe<boolean>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ShipsResolver<
    R = Maybe<(Maybe<Ship>)[]>,
    Parent = Launch,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchSiteResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = LaunchSite> {
    site_id?: SiteIdResolver<Maybe<string>, TypeParent, TContext>;

    site_name_long?: SiteNameLongResolver<Maybe<string>, TypeParent, TContext>;

    site_name?: SiteNameResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type SiteIdResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SiteNameLongResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SiteNameResolver<
    R = Maybe<string>,
    Parent = LaunchSite,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchLinksResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = LaunchLinks> {
    article_link?: ArticleLinkResolver<Maybe<string>, TypeParent, TContext>;

    flickr_images?: FlickrImagesResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      TContext
    >;

    mission_patch_small?: MissionPatchSmallResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    mission_patch?: MissionPatchResolver<Maybe<string>, TypeParent, TContext>;

    presskit?: PresskitResolver<Maybe<string>, TypeParent, TContext>;

    reddit_campaign?: RedditCampaignResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    reddit_launch?: RedditLaunchResolver<Maybe<string>, TypeParent, TContext>;

    reddit_media?: RedditMediaResolver<Maybe<string>, TypeParent, TContext>;

    reddit_recovery?: RedditRecoveryResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    video_link?: VideoLinkResolver<Maybe<string>, TypeParent, TContext>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type ArticleLinkResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FlickrImagesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MissionPatchSmallResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MissionPatchResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PresskitResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RedditCampaignResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RedditLaunchResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RedditMediaResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RedditRecoveryResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type VideoLinkResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = LaunchLinks,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchRocketResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = LaunchRocket> {
    fairings?: FairingsResolver<
      Maybe<LaunchRocketFairings>,
      TypeParent,
      TContext
    >;

    first_stage?: FirstStageResolver<
      Maybe<LaunchRocketFirstStage>,
      TypeParent,
      TContext
    >;

    rocket_name?: RocketNameResolver<Maybe<string>, TypeParent, TContext>;

    rocket_type?: RocketTypeResolver<Maybe<string>, TypeParent, TContext>;

    rocket?: RocketResolver<Maybe<Rocket>, TypeParent, TContext>;

    second_stage?: SecondStageResolver<
      Maybe<LaunchRocketSecondStage>,
      TypeParent,
      TContext
    >;
  }

  export type FairingsResolver<
    R = Maybe<LaunchRocketFairings>,
    Parent = LaunchRocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FirstStageResolver<
    R = Maybe<LaunchRocketFirstStage>,
    Parent = LaunchRocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RocketNameResolver<
    R = Maybe<string>,
    Parent = LaunchRocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RocketTypeResolver<
    R = Maybe<string>,
    Parent = LaunchRocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RocketResolver<
    R = Maybe<Rocket>,
    Parent = LaunchRocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SecondStageResolver<
    R = Maybe<LaunchRocketSecondStage>,
    Parent = LaunchRocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchRocketFairingsResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = LaunchRocketFairings
  > {
    recovered?: RecoveredResolver<Maybe<boolean>, TypeParent, TContext>;

    recovery_attempt?: RecoveryAttemptResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, TContext>;

    ship?: ShipResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type RecoveredResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RecoveryAttemptResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReusedResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFairings,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ShipResolver<
    R = Maybe<string>,
    Parent = LaunchRocketFairings,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchRocketFirstStageResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = LaunchRocketFirstStage
  > {
    cores?: CoresResolver<
      Maybe<(Maybe<LaunchRocketFirstStageCore>)[]>,
      TypeParent,
      TContext
    >;
  }

  export type CoresResolver<
    R = Maybe<(Maybe<LaunchRocketFirstStageCore>)[]>,
    Parent = LaunchRocketFirstStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchRocketFirstStageCoreResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = LaunchRocketFirstStageCore
  > {
    block?: BlockResolver<Maybe<number>, TypeParent, TContext>;

    core?: CoreResolver<Maybe<Core>, TypeParent, TContext>;

    flight?: FlightResolver<Maybe<number>, TypeParent, TContext>;

    gridfins?: GridfinsResolver<Maybe<boolean>, TypeParent, TContext>;

    land_success?: LandSuccessResolver<Maybe<boolean>, TypeParent, TContext>;

    landing_intent?: LandingIntentResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    landing_type?: LandingTypeResolver<Maybe<string>, TypeParent, TContext>;

    landing_vehicle?: LandingVehicleResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    legs?: LegsResolver<Maybe<boolean>, TypeParent, TContext>;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, TContext>;
  }

  export type BlockResolver<
    R = Maybe<number>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CoreResolver<
    R = Maybe<Core>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FlightResolver<
    R = Maybe<number>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type GridfinsResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LandSuccessResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LandingIntentResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LandingTypeResolver<
    R = Maybe<string>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LandingVehicleResolver<
    R = Maybe<string>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LegsResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReusedResolver<
    R = Maybe<boolean>,
    Parent = LaunchRocketFirstStageCore,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Rocket> {
    active?: ActiveResolver<Maybe<boolean>, TypeParent, TContext>;

    boosters?: BoostersResolver<Maybe<number>, TypeParent, TContext>;

    company?: CompanyResolver<Maybe<string>, TypeParent, TContext>;

    cost_per_launch?: CostPerLaunchResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    country?: CountryResolver<Maybe<string>, TypeParent, TContext>;

    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, TContext>;

    engines?: EnginesResolver<Maybe<RocketEngines>, TypeParent, TContext>;

    first_flight?: FirstFlightResolver<Maybe<Date>, TypeParent, TContext>;

    first_stage?: FirstStageResolver<
      Maybe<RocketFirstStage>,
      TypeParent,
      TContext
    >;

    height?: HeightResolver<Maybe<Distance>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    landing_legs?: LandingLegsResolver<
      Maybe<RocketLandingLegs>,
      TypeParent,
      TContext
    >;

    mass?: MassResolver<Maybe<Mass>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    payload_weights?: PayloadWeightsResolver<
      Maybe<(Maybe<RocketPayloadWeight>)[]>,
      TypeParent,
      TContext
    >;

    second_stage?: SecondStageResolver<
      Maybe<RocketSecondStage>,
      TypeParent,
      TContext
    >;

    stages?: StagesResolver<Maybe<number>, TypeParent, TContext>;

    success_rate_pct?: SuccessRatePctResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    type?: TypeResolver<Maybe<string>, TypeParent, TContext>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type BoostersResolver<
    R = Maybe<number>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CompanyResolver<
    R = Maybe<string>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CostPerLaunchResolver<
    R = Maybe<number>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CountryResolver<
    R = Maybe<string>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DiameterResolver<
    R = Maybe<Distance>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EnginesResolver<
    R = Maybe<RocketEngines>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FirstFlightResolver<
    R = Maybe<Date>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FirstStageResolver<
    R = Maybe<RocketFirstStage>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HeightResolver<
    R = Maybe<Distance>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LandingLegsResolver<
    R = Maybe<RocketLandingLegs>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MassResolver<
    R = Maybe<Mass>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PayloadWeightsResolver<
    R = Maybe<(Maybe<RocketPayloadWeight>)[]>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SecondStageResolver<
    R = Maybe<RocketSecondStage>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StagesResolver<
    R = Maybe<number>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SuccessRatePctResolver<
    R = Maybe<number>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Rocket,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketEnginesResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = RocketEngines> {
    number?: NumberResolver<Maybe<number>, TypeParent, TContext>;

    type?: TypeResolver<Maybe<string>, TypeParent, TContext>;

    version?: VersionResolver<Maybe<string>, TypeParent, TContext>;

    layout?: LayoutResolver<Maybe<string>, TypeParent, TContext>;

    engine_loss_max?: EngineLossMaxResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    propellant_1?: Propellant_1Resolver<Maybe<string>, TypeParent, TContext>;

    propellant_2?: Propellant_2Resolver<Maybe<string>, TypeParent, TContext>;

    thrust_sea_level?: ThrustSeaLevelResolver<
      Maybe<Force>,
      TypeParent,
      TContext
    >;

    thrust_vacuum?: ThrustVacuumResolver<Maybe<Force>, TypeParent, TContext>;

    thrust_to_weight?: ThrustToWeightResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;
  }

  export type NumberResolver<
    R = Maybe<number>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type VersionResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LayoutResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EngineLossMaxResolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type Propellant_1Resolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type Propellant_2Resolver<
    R = Maybe<string>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustSeaLevelResolver<
    R = Maybe<Force>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustVacuumResolver<
    R = Maybe<Force>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustToWeightResolver<
    R = Maybe<number>,
    Parent = RocketEngines,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketFirstStageResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = RocketFirstStage
  > {
    burn_time_sec?: BurnTimeSecResolver<Maybe<number>, TypeParent, TContext>;

    engines?: EnginesResolver<Maybe<number>, TypeParent, TContext>;

    fuel_amount_tons?: FuelAmountTonsResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    reusable?: ReusableResolver<Maybe<boolean>, TypeParent, TContext>;

    thrust_sea_level?: ThrustSeaLevelResolver<
      Maybe<Force>,
      TypeParent,
      TContext
    >;

    thrust_vacuum?: ThrustVacuumResolver<Maybe<Force>, TypeParent, TContext>;
  }

  export type BurnTimeSecResolver<
    R = Maybe<number>,
    Parent = RocketFirstStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EnginesResolver<
    R = Maybe<number>,
    Parent = RocketFirstStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FuelAmountTonsResolver<
    R = Maybe<number>,
    Parent = RocketFirstStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReusableResolver<
    R = Maybe<boolean>,
    Parent = RocketFirstStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustSeaLevelResolver<
    R = Maybe<Force>,
    Parent = RocketFirstStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustVacuumResolver<
    R = Maybe<Force>,
    Parent = RocketFirstStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketLandingLegsResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = RocketLandingLegs
  > {
    number?: NumberResolver<Maybe<number>, TypeParent, TContext>;

    material?: MaterialResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type NumberResolver<
    R = Maybe<number>,
    Parent = RocketLandingLegs,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MaterialResolver<
    R = Maybe<string>,
    Parent = RocketLandingLegs,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketPayloadWeightResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = RocketPayloadWeight
  > {
    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    kg?: KgResolver<Maybe<number>, TypeParent, TContext>;

    lb?: LbResolver<Maybe<number>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = Maybe<string>,
    Parent = RocketPayloadWeight,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type KgResolver<
    R = Maybe<number>,
    Parent = RocketPayloadWeight,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LbResolver<
    R = Maybe<number>,
    Parent = RocketPayloadWeight,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = RocketPayloadWeight,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketSecondStageResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = RocketSecondStage
  > {
    burn_time_sec?: BurnTimeSecResolver<Maybe<number>, TypeParent, TContext>;

    engines?: EnginesResolver<Maybe<number>, TypeParent, TContext>;

    fuel_amount_tons?: FuelAmountTonsResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    payloads?: PayloadsResolver<
      Maybe<RocketSecondStagePayloads>,
      TypeParent,
      TContext
    >;

    thrust?: ThrustResolver<Maybe<Force>, TypeParent, TContext>;
  }

  export type BurnTimeSecResolver<
    R = Maybe<number>,
    Parent = RocketSecondStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EnginesResolver<
    R = Maybe<number>,
    Parent = RocketSecondStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FuelAmountTonsResolver<
    R = Maybe<number>,
    Parent = RocketSecondStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PayloadsResolver<
    R = Maybe<RocketSecondStagePayloads>,
    Parent = RocketSecondStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ThrustResolver<
    R = Maybe<Force>,
    Parent = RocketSecondStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketSecondStagePayloadsResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = RocketSecondStagePayloads
  > {
    option_1?: Option_1Resolver<Maybe<string>, TypeParent, TContext>;

    composite_fairing?: CompositeFairingResolver<
      Maybe<RocketSecondStagePayloadCompositeFairing>,
      TypeParent,
      TContext
    >;
  }

  export type Option_1Resolver<
    R = Maybe<string>,
    Parent = RocketSecondStagePayloads,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CompositeFairingResolver<
    R = Maybe<RocketSecondStagePayloadCompositeFairing>,
    Parent = RocketSecondStagePayloads,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketSecondStagePayloadCompositeFairingResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = RocketSecondStagePayloadCompositeFairing
  > {
    height?: HeightResolver<Maybe<Distance>, TypeParent, TContext>;

    diameter?: DiameterResolver<Maybe<Distance>, TypeParent, TContext>;
  }

  export type HeightResolver<
    R = Maybe<Distance>,
    Parent = RocketSecondStagePayloadCompositeFairing,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DiameterResolver<
    R = Maybe<Distance>,
    Parent = RocketSecondStagePayloadCompositeFairing,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchRocketSecondStageResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = LaunchRocketSecondStage
  > {
    block?: BlockResolver<Maybe<number>, TypeParent, TContext>;

    payloads?: PayloadsResolver<
      Maybe<(Maybe<Payload>)[]>,
      TypeParent,
      TContext
    >;
  }

  export type BlockResolver<
    R = Maybe<number>,
    Parent = LaunchRocketSecondStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PayloadsResolver<
    R = Maybe<(Maybe<Payload>)[]>,
    Parent = LaunchRocketSecondStage,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PayloadResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Payload> {
    customers?: CustomersResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      TContext
    >;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    manufacturer?: ManufacturerResolver<Maybe<string>, TypeParent, TContext>;

    nationality?: NationalityResolver<Maybe<string>, TypeParent, TContext>;

    norad_id?: NoradIdResolver<Maybe<(Maybe<number>)[]>, TypeParent, TContext>;

    orbit_params?: OrbitParamsResolver<
      Maybe<PayloadOrbitParams>,
      TypeParent,
      TContext
    >;

    orbit?: OrbitResolver<Maybe<string>, TypeParent, TContext>;

    payload_mass_kg?: PayloadMassKgResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    payload_mass_lbs?: PayloadMassLbsResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    payload_type?: PayloadTypeResolver<Maybe<string>, TypeParent, TContext>;

    reused?: ReusedResolver<Maybe<boolean>, TypeParent, TContext>;
  }

  export type CustomersResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ManufacturerResolver<
    R = Maybe<string>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NationalityResolver<
    R = Maybe<string>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NoradIdResolver<
    R = Maybe<(Maybe<number>)[]>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OrbitParamsResolver<
    R = Maybe<PayloadOrbitParams>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OrbitResolver<
    R = Maybe<string>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PayloadMassKgResolver<
    R = Maybe<number>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PayloadMassLbsResolver<
    R = Maybe<number>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PayloadTypeResolver<
    R = Maybe<string>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReusedResolver<
    R = Maybe<boolean>,
    Parent = Payload,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PayloadOrbitParamsResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = PayloadOrbitParams
  > {
    apoapsis_km?: ApoapsisKmResolver<Maybe<number>, TypeParent, TContext>;

    arg_of_pericenter?: ArgOfPericenterResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    eccentricity?: EccentricityResolver<Maybe<number>, TypeParent, TContext>;

    epoch?: EpochResolver<Maybe<Date>, TypeParent, TContext>;

    inclination_deg?: InclinationDegResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    lifespan_years?: LifespanYearsResolver<Maybe<number>, TypeParent, TContext>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, TContext>;

    mean_anomaly?: MeanAnomalyResolver<Maybe<number>, TypeParent, TContext>;

    mean_motion?: MeanMotionResolver<Maybe<number>, TypeParent, TContext>;

    periapsis_km?: PeriapsisKmResolver<Maybe<number>, TypeParent, TContext>;

    period_min?: PeriodMinResolver<Maybe<number>, TypeParent, TContext>;

    raan?: RaanResolver<Maybe<number>, TypeParent, TContext>;

    reference_system?: ReferenceSystemResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    regime?: RegimeResolver<Maybe<string>, TypeParent, TContext>;

    semi_major_axis_km?: SemiMajorAxisKmResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;
  }

  export type ApoapsisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ArgOfPericenterResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EccentricityResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EpochResolver<
    R = Maybe<Date>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type InclinationDegResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LifespanYearsResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MeanAnomalyResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MeanMotionResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PeriapsisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PeriodMinResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RaanResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ReferenceSystemResolver<
    R = Maybe<string>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RegimeResolver<
    R = Maybe<string>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SemiMajorAxisKmResolver<
    R = Maybe<number>,
    Parent = PayloadOrbitParams,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchTelemetryResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = LaunchTelemetry
  > {
    flight_club?: FlightClubResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type FlightClubResolver<
    R = Maybe<string>,
    Parent = LaunchTelemetry,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ShipResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Ship> {
    abs?: AbsResolver<Maybe<number>, TypeParent, TContext>;

    active?: ActiveResolver<Maybe<boolean>, TypeParent, TContext>;

    attempted_landings?: AttemptedLandingsResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    class?: ClassResolver<Maybe<number>, TypeParent, TContext>;

    course_deg?: CourseDegResolver<Maybe<number>, TypeParent, TContext>;

    home_port?: HomePortResolver<Maybe<string>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    image?: ImageResolver<Maybe<string>, TypeParent, TContext>;

    imo?: ImoResolver<Maybe<number>, TypeParent, TContext>;

    missions?: MissionsResolver<
      Maybe<(Maybe<ShipMission>)[]>,
      TypeParent,
      TContext
    >;

    mmsi?: MmsiResolver<Maybe<number>, TypeParent, TContext>;

    model?: ModelResolver<Maybe<string>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    position?: PositionResolver<Maybe<ShipLocation>, TypeParent, TContext>;

    roles?: RolesResolver<Maybe<(Maybe<string>)[]>, TypeParent, TContext>;

    speed_kn?: SpeedKnResolver<Maybe<number>, TypeParent, TContext>;

    status?: StatusResolver<Maybe<string>, TypeParent, TContext>;

    successful_landings?: SuccessfulLandingsResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    type?: TypeResolver<Maybe<string>, TypeParent, TContext>;

    url?: UrlResolver<Maybe<string>, TypeParent, TContext>;

    weight_kg?: WeightKgResolver<Maybe<number>, TypeParent, TContext>;

    weight_lbs?: WeightLbsResolver<Maybe<number>, TypeParent, TContext>;

    year_built?: YearBuiltResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type AbsResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ActiveResolver<
    R = Maybe<boolean>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type AttemptedLandingsResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ClassResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type CourseDegResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type HomePortResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ImageResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ImoResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MissionsResolver<
    R = Maybe<(Maybe<ShipMission>)[]>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MmsiResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ModelResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PositionResolver<
    R = Maybe<ShipLocation>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RolesResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SpeedKnResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SuccessfulLandingsResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TypeResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type UrlResolver<
    R = Maybe<string>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WeightKgResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WeightLbsResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type YearBuiltResolver<
    R = Maybe<number>,
    Parent = Ship,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ShipMissionResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = ShipMission> {
    flight?: FlightResolver<Maybe<string>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type FlightResolver<
    R = Maybe<string>,
    Parent = ShipMission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = ShipMission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ShipLocationResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = ShipLocation> {
    latitude?: LatitudeResolver<Maybe<number>, TypeParent, TContext>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type LatitudeResolver<
    R = Maybe<number>,
    Parent = ShipLocation,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = ShipLocation,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace HistoriesResultResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = HistoriesResult
  > {
    result?: ResultResolver<Maybe<Result>, TypeParent, TContext>;

    data?: DataResolver<Maybe<(Maybe<History>)[]>, TypeParent, TContext>;
  }

  export type ResultResolver<
    R = Maybe<Result>,
    Parent = HistoriesResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DataResolver<
    R = Maybe<(Maybe<History>)[]>,
    Parent = HistoriesResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ResultResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Result> {
    totalCount?: TotalCountResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type TotalCountResolver<
    R = Maybe<number>,
    Parent = Result,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LandpadResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Landpad> {
    attempted_landings?: AttemptedLandingsResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    details?: DetailsResolver<Maybe<string>, TypeParent, TContext>;

    full_name?: FullNameResolver<Maybe<string>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    landing_type?: LandingTypeResolver<Maybe<string>, TypeParent, TContext>;

    location?: LocationResolver<Maybe<Location>, TypeParent, TContext>;

    status?: StatusResolver<Maybe<string>, TypeParent, TContext>;

    successful_landings?: SuccessfulLandingsResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type AttemptedLandingsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FullNameResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LandingTypeResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LocationResolver<
    R = Maybe<Location>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SuccessfulLandingsResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Landpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LocationResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Location> {
    latitude?: LatitudeResolver<Maybe<number>, TypeParent, TContext>;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    region?: RegionResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type LatitudeResolver<
    R = Maybe<number>,
    Parent = Location,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = Location,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Location,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type RegionResolver<
    R = Maybe<string>,
    Parent = Location,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchesPastResultResolvers {
  export interface Resolvers<
    TContext = MyContext,
    TypeParent = LaunchesPastResult
  > {
    result?: ResultResolver<Maybe<Result>, TypeParent, TContext>;

    data?: DataResolver<Maybe<(Maybe<Launch>)[]>, TypeParent, TContext>;
  }

  export type ResultResolver<
    R = Maybe<Result>,
    Parent = LaunchesPastResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DataResolver<
    R = Maybe<(Maybe<Launch>)[]>,
    Parent = LaunchesPastResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace LaunchpadResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Launchpad> {
    attempted_launches?: AttemptedLaunchesResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    details?: DetailsResolver<Maybe<string>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    location?: LocationResolver<Maybe<Location>, TypeParent, TContext>;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    status?: StatusResolver<Maybe<string>, TypeParent, TContext>;

    successful_launches?: SuccessfulLaunchesResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    vehicles_launched?: VehiclesLaunchedResolver<
      Maybe<(Maybe<Rocket>)[]>,
      TypeParent,
      TContext
    >;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type AttemptedLaunchesResolver<
    R = Maybe<number>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LocationResolver<
    R = Maybe<Location>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type StatusResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SuccessfulLaunchesResolver<
    R = Maybe<number>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type VehiclesLaunchedResolver<
    R = Maybe<(Maybe<Rocket>)[]>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Launchpad,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MissionResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Mission> {
    description?: DescriptionResolver<Maybe<string>, TypeParent, TContext>;

    id?: IdResolver<Maybe<string>, TypeParent, TContext>;

    manufacturers?: ManufacturersResolver<
      Maybe<(Maybe<string>)[]>,
      TypeParent,
      TContext
    >;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    twitter?: TwitterResolver<Maybe<string>, TypeParent, TContext>;

    website?: WebsiteResolver<Maybe<string>, TypeParent, TContext>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;

    payloads?: PayloadsResolver<
      Maybe<(Maybe<Payload>)[]>,
      TypeParent,
      TContext
    >;
  }

  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type IdResolver<
    R = Maybe<string>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type ManufacturersResolver<
    R = Maybe<(Maybe<string>)[]>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type TwitterResolver<
    R = Maybe<string>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WebsiteResolver<
    R = Maybe<string>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PayloadsResolver<
    R = Maybe<(Maybe<Payload>)[]>,
    Parent = Mission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MissionResultResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = MissionResult> {
    result?: ResultResolver<Maybe<Result>, TypeParent, TContext>;

    data?: DataResolver<Maybe<(Maybe<Mission>)[]>, TypeParent, TContext>;
  }

  export type ResultResolver<
    R = Maybe<Result>,
    Parent = MissionResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DataResolver<
    R = Maybe<(Maybe<Mission>)[]>,
    Parent = MissionResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RoadsterResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = Roadster> {
    apoapsis_au?: ApoapsisAuResolver<Maybe<number>, TypeParent, TContext>;

    details?: DetailsResolver<Maybe<string>, TypeParent, TContext>;

    earth_distance_km?: EarthDistanceKmResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    earth_distance_mi?: EarthDistanceMiResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    eccentricity?: EccentricityResolver<Maybe<number>, TypeParent, TContext>;

    epoch_jd?: EpochJdResolver<Maybe<number>, TypeParent, TContext>;

    inclination?: InclinationResolver<Maybe<number>, TypeParent, TContext>;

    launch_date_unix?: LaunchDateUnixResolver<
      Maybe<Date>,
      TypeParent,
      TContext
    >;

    launch_date_utc?: LaunchDateUtcResolver<Maybe<Date>, TypeParent, TContext>;

    launch_mass_kg?: LaunchMassKgResolver<Maybe<number>, TypeParent, TContext>;

    launch_mass_lbs?: LaunchMassLbsResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    longitude?: LongitudeResolver<Maybe<number>, TypeParent, TContext>;

    mars_distance_km?: MarsDistanceKmResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    mars_distance_mi?: MarsDistanceMiResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    norad_id?: NoradIdResolver<Maybe<number>, TypeParent, TContext>;

    orbit_type?: OrbitTypeResolver<Maybe<number>, TypeParent, TContext>;

    periapsis_arg?: PeriapsisArgResolver<Maybe<number>, TypeParent, TContext>;

    periapsis_au?: PeriapsisAuResolver<Maybe<number>, TypeParent, TContext>;

    period_days?: PeriodDaysResolver<Maybe<number>, TypeParent, TContext>;

    semi_major_axis_au?: SemiMajorAxisAuResolver<
      Maybe<number>,
      TypeParent,
      TContext
    >;

    speed_kph?: SpeedKphResolver<Maybe<number>, TypeParent, TContext>;

    speed_mph?: SpeedMphResolver<Maybe<number>, TypeParent, TContext>;

    wikipedia?: WikipediaResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type ApoapsisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DetailsResolver<
    R = Maybe<string>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EarthDistanceKmResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EarthDistanceMiResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EccentricityResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type EpochJdResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type InclinationResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchDateUnixResolver<
    R = Maybe<Date>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchDateUtcResolver<
    R = Maybe<Date>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchMassKgResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LaunchMassLbsResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type LongitudeResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MarsDistanceKmResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type MarsDistanceMiResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = Maybe<string>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type NoradIdResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type OrbitTypeResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PeriapsisArgResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PeriapsisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type PeriodDaysResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SemiMajorAxisAuResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SpeedKphResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type SpeedMphResolver<
    R = Maybe<number>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type WikipediaResolver<
    R = Maybe<string>,
    Parent = Roadster,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace RocketsResultResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = RocketsResult> {
    result?: ResultResolver<Maybe<Result>, TypeParent, TContext>;

    data?: DataResolver<Maybe<(Maybe<Rocket>)[]>, TypeParent, TContext>;
  }

  export type ResultResolver<
    R = Maybe<Result>,
    Parent = RocketsResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DataResolver<
    R = Maybe<(Maybe<Rocket>)[]>,
    Parent = RocketsResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ShipsResultResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = ShipsResult> {
    result?: ResultResolver<Maybe<Result>, TypeParent, TContext>;

    data?: DataResolver<Maybe<(Maybe<Ship>)[]>, TypeParent, TContext>;
  }

  export type ResultResolver<
    R = Maybe<Result>,
    Parent = ShipsResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type DataResolver<
    R = Maybe<(Maybe<Ship>)[]>,
    Parent = ShipsResult,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = {}> {}
}

export namespace SubscriptionResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = {}> {}
}

export namespace CoreMissionResolvers {
  export interface Resolvers<TContext = MyContext, TypeParent = CoreMission> {
    name?: NameResolver<Maybe<string>, TypeParent, TContext>;

    flight?: FlightResolver<Maybe<number>, TypeParent, TContext>;
  }

  export type NameResolver<
    R = Maybe<string>,
    Parent = CoreMission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
  export type FlightResolver<
    R = Maybe<number>,
    Parent = CoreMission,
    TContext = MyContext
  > = Resolver<R, Parent, TContext>;
}

export type RateLimitDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  RateLimitDirectiveArgs,
  MyContext
>;
export interface RateLimitDirectiveArgs {
  max?: Maybe<number>;

  window?: Maybe<string>;

  message?: Maybe<string>;

  identityArgs?: Maybe<(Maybe<string>)[]>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}
export interface ObjectIDScalarConfig
  extends GraphQLScalarTypeConfig<ObjectId, any> {
  name: "ObjectID";
}

export type IResolvers<TContext = MyContext> = {
  Query?: QueryResolvers.Resolvers<TContext>;
  Capsule?: CapsuleResolvers.Resolvers<TContext>;
  CapsuleMission?: CapsuleMissionResolvers.Resolvers<TContext>;
  Dragon?: DragonResolvers.Resolvers<TContext>;
  Distance?: DistanceResolvers.Resolvers<TContext>;
  DragonHeatShield?: DragonHeatShieldResolvers.Resolvers<TContext>;
  Mass?: MassResolvers.Resolvers<TContext>;
  Volume?: VolumeResolvers.Resolvers<TContext>;
  DragonPressurizedCapsule?: DragonPressurizedCapsuleResolvers.Resolvers<
    TContext
  >;
  DragonThrust?: DragonThrustResolvers.Resolvers<TContext>;
  Force?: ForceResolvers.Resolvers<TContext>;
  DragonTrunk?: DragonTrunkResolvers.Resolvers<TContext>;
  DragonTrunkCargo?: DragonTrunkCargoResolvers.Resolvers<TContext>;
  Info?: InfoResolvers.Resolvers<TContext>;
  Address?: AddressResolvers.Resolvers<TContext>;
  InfoLinks?: InfoLinksResolvers.Resolvers<TContext>;
  Core?: CoreResolvers.Resolvers<TContext>;
  History?: HistoryResolvers.Resolvers<TContext>;
  Link?: LinkResolvers.Resolvers<TContext>;
  Launch?: LaunchResolvers.Resolvers<TContext>;
  LaunchSite?: LaunchSiteResolvers.Resolvers<TContext>;
  LaunchLinks?: LaunchLinksResolvers.Resolvers<TContext>;
  LaunchRocket?: LaunchRocketResolvers.Resolvers<TContext>;
  LaunchRocketFairings?: LaunchRocketFairingsResolvers.Resolvers<TContext>;
  LaunchRocketFirstStage?: LaunchRocketFirstStageResolvers.Resolvers<TContext>;
  LaunchRocketFirstStageCore?: LaunchRocketFirstStageCoreResolvers.Resolvers<
    TContext
  >;
  Rocket?: RocketResolvers.Resolvers<TContext>;
  RocketEngines?: RocketEnginesResolvers.Resolvers<TContext>;
  RocketFirstStage?: RocketFirstStageResolvers.Resolvers<TContext>;
  RocketLandingLegs?: RocketLandingLegsResolvers.Resolvers<TContext>;
  RocketPayloadWeight?: RocketPayloadWeightResolvers.Resolvers<TContext>;
  RocketSecondStage?: RocketSecondStageResolvers.Resolvers<TContext>;
  RocketSecondStagePayloads?: RocketSecondStagePayloadsResolvers.Resolvers<
    TContext
  >;
  RocketSecondStagePayloadCompositeFairing?: RocketSecondStagePayloadCompositeFairingResolvers.Resolvers<
    TContext
  >;
  LaunchRocketSecondStage?: LaunchRocketSecondStageResolvers.Resolvers<
    TContext
  >;
  Payload?: PayloadResolvers.Resolvers<TContext>;
  PayloadOrbitParams?: PayloadOrbitParamsResolvers.Resolvers<TContext>;
  LaunchTelemetry?: LaunchTelemetryResolvers.Resolvers<TContext>;
  Ship?: ShipResolvers.Resolvers<TContext>;
  ShipMission?: ShipMissionResolvers.Resolvers<TContext>;
  ShipLocation?: ShipLocationResolvers.Resolvers<TContext>;
  HistoriesResult?: HistoriesResultResolvers.Resolvers<TContext>;
  Result?: ResultResolvers.Resolvers<TContext>;
  Landpad?: LandpadResolvers.Resolvers<TContext>;
  Location?: LocationResolvers.Resolvers<TContext>;
  LaunchesPastResult?: LaunchesPastResultResolvers.Resolvers<TContext>;
  Launchpad?: LaunchpadResolvers.Resolvers<TContext>;
  Mission?: MissionResolvers.Resolvers<TContext>;
  MissionResult?: MissionResultResolvers.Resolvers<TContext>;
  Roadster?: RoadsterResolvers.Resolvers<TContext>;
  RocketsResult?: RocketsResultResolvers.Resolvers<TContext>;
  ShipsResult?: ShipsResultResolvers.Resolvers<TContext>;
  Mutation?: MutationResolvers.Resolvers<TContext>;
  Subscription?: SubscriptionResolvers.Resolvers<TContext>;
  CoreMission?: CoreMissionResolvers.Resolvers<TContext>;
  Date?: GraphQLScalarType;
  ObjectId?: GraphQLScalarType;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  rateLimit?: RateLimitDirectiveResolver<Result>;
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
