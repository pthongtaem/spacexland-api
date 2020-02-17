export const collection = 'launchpad';

export const parseLaunchpad = pad => {
  pad.name = pad.full_name;
  pad.vehiclesLaunched = pad.vehicles_launched;
  const { padid, full_name, vehicles_launched, ...padParsed } = pad;
  return padParsed;
};
