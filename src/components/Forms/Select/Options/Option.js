import React from "react";

const Option = ({ name, item }) => {
  
  if (name === "typeCharacter") {
    return <Brand item={item} />;
  } else if (name === "vocation" || name === 'background') {
    return <Model item={item} />;
  } else if (name === "imageCharacter") {
    return <Version item={item} />;
  } else if (name === "car") {
    return <Car item={item} />;
  } else if (name === "sleep") {
    return <Sleep item={item} />;
  } else if (name === "reason") {
    return <Reason item={item} />;
  } else if ( name === "yearRevision") {
    return <Month item={item} />;
  } else {
    return  <Standard item={item} />
  }
};

const Brand = ({ item }) => {
  return (
    <>
      <option key={item._id} value={item.name}>
      {item.name} 
      </option>
    </>
  );
};
const Model = ({ item }) => {
  return (
    <>
      <option key={item._id} value={`${item.name}`}>
        {item.name}
      </option>
    </>
  );
};
const Version = ({ item }) => {
  return (
    <>
      <option key={item._id} value={item._id}>
        {item.name} 
      </option>
    </>
  );
};
const Car = ({ item }) => {
  return (
    <>
      {item.performance ? (
        <option key={item._id} value={item._id}>
          {item.year} - {item.name} - {item.performance.power} cv -{" "}
          {item.performance.doors} puertas - {item.performance.transmission} -{" "}
          {item.performance.fuel === "petrol" && 'Gasolina'}
          {item.performance.fuel === "diesel" && 'Diesel'}
        </option>
      ) : (
        <option key={item._id} value={item._id}>
          {item.year} - {item.name}
        </option>
      )}
    </>
  );
};
const Sleep = ({ item }) => {
  return (
    <>
      <option value={item}>{item}</option>
    </>
  );
};
const Reason = ({ item }) => {
  return (
    <>
      <option value={item}>{item}</option>
    </>
  );
};
const Month = ({ item }) => {
  return (
    <>
      <option value={item}>{item}</option>
    </>
  );
};
const Standard = ({ item }) => {
  return (
    <>
      <option value={item}>{item}</option>
    </>
  );
};

export default Option;
