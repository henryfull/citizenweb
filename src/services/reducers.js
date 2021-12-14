
export const reducerConfig = (config, action) => {
  console.log(config, action.type);

 if (action.type === "store") {
    return {
      ...config,
      [action.type]: action[action.type],
    };
  }
  else if (action.type === "store.loading") {
    return {
      ...config.store,
      [action.type]: action[action.type],
    }
  }
  else if (action.type === "car") {
    return {
      ...config,
      carname: action.car.carname,
      car: action.car.car,
      year: action.car.year,
      specs: {
        doors: action.car.doors,
        seats: action.car.seats,
        transmission: action.car.transmission,
        fuel: action.car.fuel,
        power: action.car.power,
        typeVehicle: action.car.typeVehicle,
      },
    };
  } else if (action.type === "version") {
    return {
      ...config,
      version: action.version.version,
      versionName: action.version.versionName,
    };
  } else if (action.type === "revision") {
    return {
      ...config,
      status: {
        lastRevision: { month: action.month, year: action.year },
      },
    };
  } else if (action.type === "itv") {
    return {
      ...config,
      status: {
        currentItv: { month: action.month, year: action.year },
      },
    };
  } else if (action.type === "extras") {
    return {
      ...config,
      status: {
        backCamera: action.backCamera,
        frontCamera: action.frontCamera,
        gps: action.gps,
        media: action.media,
        parkingSensor: action.parkingSensor,
        roof: action.roof,
      },
    };
  }
  if (action.type === "config") {
    return action.config;
  } else {
    return {
      ...config,
      [action.type]: action[action.type],
    };
  }
};
