import moment from 'moment';
import { dateRange } from '../';

/**
 * Builds mongo find query object from querystrings
 * @param {Object} request The Koa request object
 * @return {Object} Mongo compatible find query object
 */

export default r => {
  const query: any = {};
  if (r.collection === 'launch') {
    //------------------------------------------------------------
    //                       Launch Fields
    //------------------------------------------------------------

    if (r.query.id) {
      query.flight_number = parseInt(r.query.id, 10);
    }
    if (r.query.start && (r.query.final || r.query.end)) {
      query.launch_date_utc = dateRange(r.query);
    }
    if (r.query.mission_name) {
      query.mission_name = r.query.mission_name;
    }
    if (r.query.mission_id) {
      query.mission_id = r.query.mission_id;
    }
    if (r.query.launch_year) {
      query.launch_year = r.query.launch_year;
    }
    if (r.query.launch_date_utc) {
      // Allow any valid date format
      const date = moment(r.query.launch_date_utc);
      try {
        query.launch_date_utc = date.toISOString();
      } catch (e) {
        console.log(e);
      }
    }
    if (r.query.launch_date_local) {
      query.launch_date_local = r.query.launch_date_local;
    }
    if (r.query.tentative) {
      query.is_tentative = r.query.tentative;
    }
    if (r.query.tentative_max_precision) {
      query.tentative_max_precision = r.query.tentative_max_precision;
    }
    if (r.query.tbd) {
      query.tbd = r.query.tbd === 'true';
    }
    if (r.query.rocket_id) {
      query['rocket.rocket_id'] = r.query.rocket_id;
    }
    if (r.query.rocket_name) {
      query['rocket.rocket_name'] = r.query.rocket_name;
    }
    if (r.query.rocket_type) {
      query['rocket.rocket_type'] = r.query.rocket_type;
    }
    if (r.query.core_serial) {
      query['rocket.first_stage.cores.core_serial'] = r.query.core_serial;
    }
    if (r.query.cap_serial) {
      query['rocket.second_stage.payloads.cap_serial'] = r.query.cap_serial;
    }
    if (r.query.core_flight) {
      query['rocket.first_stage.cores.flight'] = parseInt(
        r.query.core_flight,
        10,
      );
    }
    if (r.query.block) {
      query['rocket.first_stage.cores.block'] = parseInt(r.query.block, 10);
    }
    if (r.query.gridfins) {
      query['rocket.first_stage.cores.gridfins'] = r.query.gridfins === 'true';
    }
    if (r.query.legs) {
      query['rocket.first_stage.cores.legs'] = r.query.legs === 'true';
    }
    if (r.query.second_stage_block) {
      query['rocket.second_stage.block'] = parseInt(
        r.query.second_stage_block,
        10,
      );
    }
    if (r.query.fairings_reused) {
      query['rocket.fairings.reused'] = r.query.fairings_reused === 'true';
    }
    if (r.query.fairings_recovery_attempt) {
      query['rocket.fairings.recovery_attempt'] =
        r.query.fairings_recovery_attempt === 'true';
    }
    if (r.query.fairings_recovered) {
      query['rocket.fairings.recovered'] =
        r.query.fairings_recovered === 'true';
    }
    if (r.query.fairings_ship) {
      query['rocket.fairings.ship'] = r.query.fairings_ship;
    }
    if (r.query.core_reuse) {
      query['rocket.first_stage.cores.0.reused'] =
        r.query.core_reuse === 'true';
    }
    if (r.query.side_core1_reuse) {
      query['rocket.first_stage.cores.1.reused'] =
        r.query.side_core1_reuse === 'true';
    }
    if (r.query.side_core2_reuse) {
      query['rocket.first_stage.cores.2.reused'] =
        r.query.side_core2_reuse === 'true';
    }
    if (r.query.fairings_reuse) {
      query['rocket.fairings.reused'] = r.query.fairings_reuse === 'true';
    }
    if (r.query.capsule_reuse) {
      query['rocket.second_stage.payloads.reused'] =
        r.query.capsule_reuse === 'true';
      query.$or = [
        {
          'rocket.second_stage.payloads.payload_type': 'Dragon 1.1',
        },
        {
          'rocket.second_stage.payloads.payload_type': 'Crew Dragon',
        },
      ];
    }
    if (r.query.ship) {
      query.ships = r.query.ship;
    }
    if (r.query.site_id) {
      query['launch_site.site_id'] = r.query.site_id;
    }
    if (r.query.site_name) {
      query['launch_site.site_name'] = r.query.site_name;
    }
    if (r.query.site_name_long) {
      query['launch_site.site_name_long'] = r.query.site_name_long;
    }
    if (r.query.payload_id) {
      query['rocket.second_stage.payloads.payload_id'] = r.query.payload_id;
    }
    if (r.query.norad_id) {
      query['rocket.second_stage.payloads.norad_id'] = parseInt(
        r.query.norad_id,
        10,
      );
    }
    if (r.query.customer) {
      query['rocket.second_stage.payloads.customers'] = r.query.customer;
    }
    if (r.query.nationality) {
      query['rocket.second_stage.payloads.nationality'] = r.query.nationality;
    }
    if (r.query.manufacturer) {
      query['rocket.second_stage.payloads.manufacturer'] = r.query.manufacturer;
    }
    if (r.query.payload_type) {
      query['rocket.second_stage.payloads.payload_type'] = r.query.payload_type;
    }
    if (r.query.orbit) {
      query['rocket.second_stage.payloads.orbit'] = r.query.orbit;
    }
    if (r.query.reference_system) {
      query['rocket.second_stage.payloads.orbit_params.reference_system'] =
        r.query.reference_system;
    }
    if (r.query.regime) {
      query['rocket.second_stage.payloads.orbit_params.regime'] =
        r.query.regime;
    }
    if (r.query.longitude) {
      query['rocket.second_stage.payloads.orbit_params.longitude'] = parseFloat(
        r.query.longitude,
      );
    }
    if (r.query.semi_major_axis_km) {
      query[
        'rocket.second_stage.payloads.orbit_params.semi_major_axis_km'
      ] = parseFloat(r.query.semi_major_axis_km);
    }
    if (r.query.eccentricity) {
      query[
        'rocket.second_stage.payloads.orbit_params.eccentricity'
      ] = parseFloat(r.query.eccentricity);
    }
    if (r.query.periapsis_km) {
      query[
        'rocket.second_stage.payloads.orbit_params.periapsis_km'
      ] = parseFloat(r.query.periapsis_km);
    }
    if (r.query.apoapsis_km) {
      query[
        'rocket.second_stage.payloads.orbit_params.apoapsis_km'
      ] = parseFloat(r.query.apoapsis_km);
    }
    if (r.query.inclination_deg) {
      query[
        'rocket.second_stage.payloads.orbit_params.inclination_deg'
      ] = parseFloat(r.query.inclination_deg);
    }
    if (r.query.period_min) {
      query[
        'rocket.second_stage.payloads.orbit_params.period_min'
      ] = parseFloat(r.query.period_min);
    }
    if (r.query.lifespan_years) {
      query[
        'rocket.second_stage.payloads.orbit_params.lifespan_years'
      ] = parseInt(r.query.lifespan_years, 10);
    }
    if (r.query.epoch) {
      query['rocket.second_stage.payloads.orbit_params.epoch'] = r.query.epoch;
    }
    if (r.query.mean_motion) {
      query[
        'rocket.second_stage.payloads.orbit_params.mean_motion'
      ] = parseFloat(r.query.mean_motion);
    }
    if (r.query.raan) {
      query['rocket.second_stage.payloads.orbit_params.raan'] = parseFloat(
        r.query.raan,
      );
    }
    if (r.query.launch_success) {
      query.launch_success = r.query.launch_success === 'true';
    }
    if (r.query.reused) {
      query['rocket.first_stage.cores.reused'] = r.query.reused === 'true';
    }
    if (r.query.land_success) {
      query['rocket.first_stage.cores.land_success'] =
        r.query.land_success === 'true';
    }
    if (r.query.landing_intent) {
      query['rocket.first_stage.cores.landing_intent'] =
        r.query.landing_intent === 'true';
    }
    if (r.query.landing_type) {
      query['rocket.first_stage.cores.landing_type'] = r.query.landing_type;
    }
    if (r.query.landing_vehicle) {
      query['rocket.first_stage.cores.landing_vehicle'] =
        r.query.landing_vehicle;
    }
  } else if (r.collection === 'capsule') {
    //------------------------------------------------------------
    //                       Capsule Fields
    //------------------------------------------------------------

    if (r.query.id) {
      query.capsule_serial = r.query.id;
    }
    if (r.query.status) {
      query.status = r.query.status;
    }
    if (r.query.original_launch) {
      query.original_launch = r.query.original_launch;
    }
    if (r.query.mission) {
      query['missions.name'] = r.query.mission;
    }
    if (r.query.landings) {
      query.landings = parseInt(r.query.landings, 10);
    }
    if (r.query.type) {
      query.type = r.query.type;
    }
    if (r.query.reuse_count) {
      query.reuse_count = parseInt(r.query.reuse_count, 10);
    }
  } else if (r.collection === 'core') {
    //------------------------------------------------------------
    //                       Core Fields
    //------------------------------------------------------------

    if (r.query.id) {
      query.core_serial = r.query.id;
    }
    if (r.query.block) {
      query.block = parseInt(r.query.block, 10);
    }
    if (r.query.status) {
      query.status = r.query.status;
    }
    if (r.query.original_launch) {
      query.original_launch = r.query.original_launch;
    }
    if (r.query.mission) {
      query['missions.name'] = r.query.mission;
    }
    if (r.query.reuse_count) {
      query.reuse_count = parseInt(r.query.reuse_count, 10);
    }
    if (r.query.rtls_attempts) {
      query.rtls_attempts = parseInt(r.query.rtls_attempts, 10);
    }
    if (r.query.rtls_landings) {
      query.rtls_landings = parseInt(r.query.rtls_landings, 10);
    }
    if (r.query.asds_attempts) {
      query.asds_attempts = parseInt(r.query.asds_attempt, 10);
    }
    if (r.query.asds_landings) {
      query.asds_landings = parseInt(r.query.asds_landings, 10);
    }
    if (r.query.water_landing) {
      query.water_landing = r.query.water_landing === 'true';
    }
  } else if (r.collection === 'history') {
    //------------------------------------------------------------
    //                     History Fields
    //------------------------------------------------------------

    if (r.query.id) {
      query.id = parseInt(r.query.id, 10);
    }
    if (r.query.start && (r.query.final || r.query.end)) {
      query.event_date_utc = dateRange(r.query);
    }
    if (r.query.flight_number) {
      query.flight_number = parseInt(r.query.flight_number, 10);
    }
  } else if (r.collection === 'ship') {
    //------------------------------------------------------------
    //                     Ships Fields
    //------------------------------------------------------------

    if (r.query.id) {
      query.ship_id = r.query.id;
    }
    if (r.query.name) {
      query.ship_name = r.query.name;
    }
    if (r.query.model) {
      query.ship_model = r.query.model;
    }
    if (r.query.type) {
      query.ship_type = r.query.type;
    }
    if (r.query.role) {
      query.roles = r.query.role;
    }
    if (r.query.active) {
      query.active = r.query.active === 'true';
    }
    if (r.query.imo) {
      query.imo = parseInt(r.query.imo, 10);
    }
    if (r.query.mmsi) {
      query.mmsi = parseInt(r.query.mmsi, 10);
    }
    if (r.query.abs) {
      query.abs = parseInt(r.query.abs, 10);
    }
    if (r.query.class) {
      query.class = parseInt(r.query.class, 10);
    }
    if (r.query.weight_lbs) {
      query.weight_lbs = parseInt(r.query.weight_lbs, 10);
    }
    if (r.query.weight_kg) {
      query.weight_kg = parseInt(r.query.weight_kg, 10);
    }
    if (r.query.year_built) {
      query.year_built = parseInt(r.query.year_built, 10);
    }
    if (r.query.home_port) {
      query.home_port = r.query.home_port;
    }
    if (r.query.status) {
      query.status = r.query.status;
    }
    if (r.query.speed_kn) {
      query.speed_kn = parseFloat(r.query.speed_kn);
    }
    if (r.query.course_deg) {
      query.course_deg = parseInt(r.query.course_deg, 10);
    }
    if (r.query.latitude) {
      query['position.latitude'] = parseFloat(r.query.latitude);
    }
    if (r.query.longitude) {
      query['position.longitude'] = parseFloat(r.query.longitude);
    }
    if (r.query.successful_landings) {
      query.successful_landings = r.query.successful_landings;
    }
    if (r.query.attempted_landings) {
      query.attempted_landings = r.query.attempted_landings;
    }
    if (r.query.mission) {
      query['missions.name'] = r.query.mission;
    }
  } else if (r.collection === 'mission') {
    //------------------------------------------------------------
    //                     Mission Fields
    //------------------------------------------------------------

    if (r.query.id) {
      query.mission_id = r.query.id;
    }
    if (r.query.name) {
      query.mission_name = r.query.name;
    }
    if (r.query.manufacturer) {
      query.manufacturers = r.query.manufacturer;
    }
    if (r.query.payload_id) {
      query.payload_ids = r.query.payload_id;
    }
  }

  const queryRegex = Object.entries(query).reduce(
    (acc, [key, value]: [string, string]) => {
      acc[key] = { $regex: new RegExp(value, 'i') };
      return acc;
    },
    {},
  );

  return queryRegex;
};
