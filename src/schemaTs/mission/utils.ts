export const collection = 'mission';

const parseMissionObj = mission => ({ ...mission, id: mission.mission_id });

export const parseMissions = (data, query) => {
  const missions = [];
  let match;
  console.log(data);
  // data.forEach(launch => {
    // console.log(launch);
    // launch.rocket.second_stage.payloads.forEach(missionObj => {
    //   const mission = parseMissionObj(missionObj);
    //   match = 0;
    //   if (Object.keys(query).length !== 0) {
    //     Object.entries(query).forEach(([key, value]) => {
    //       if (value === mission[key]) {
    //         match += 1;
    //       }
    //     });
    //     if (match === Object.keys(query).length) {
    //       missions.push(mission);
    //     }
    //   } else {
    //     missions.push(mission);
    //   }
    // });
  // });
  return missions;
};

// export const parsePayload = (payload, payload_id) => {
//   if (!payload) return null;
//   const { payloads } = payload.rocket.second_stage;
//   let index = 0;
//   const parsedPayloads = payloads.map((payloadObj, i) => {
//     const payload = parsePayloadObj(payloadObj);
//     if (payload.id === payload_id) {
//       index = i;
//     }
//     return payload;
//   });
//   return parsedPayloads[index];
// };
