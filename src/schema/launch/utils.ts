export const collection = 'launch';
export const parseLaunch = (launch) => {
  const result = {
    ...launch,
    id: launch.flight_number,
  };

  result.shipsRaw = result.ships;

  const { ships, ...parsedLaunch } = result;
  return parsedLaunch;
};
