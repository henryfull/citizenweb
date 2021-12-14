import { DateTime, Duration } from "luxon";

export const checkRol = async (rolsUser, rolsAccess) => {
  let access = false;
  for await (const rol of rolsUser) {
    if (rolsAccess.includes(rol)) {
      access = true;
    }
  }
  return access;
};

export const timeAgo = (date) => {
  let dateTime = DateTime.fromISO(date);
  let diff = dateTime.diffNow().shiftTo("days");
  let days = Math.abs(diff.values.days);
  let mydays = DateTime.local().minus({ days: days }).toRelative();
  return mydays;
};
export const timeAgoDays = (date) => {
  let dateTime = DateTime.fromISO(date);
  let diff = dateTime.diffNow().shiftTo("days");
  let days = Math.abs(diff.values.days);
  // let mydays = DateTime.local().minus({ days: days }).toRelative();
  let mydays = Duration.fromObject({ days: days }).days;
  return Math.round(mydays);
};

export const setCount = (endDate) => {
  if (endDate !== null) {
    let local = DateTime.fromISO(endDate);
    let local2 = DateTime.now();
    let diff = Math.abs(local2.diff(local).milliseconds);
    let duration = Duration.fromObject({ milliseconds: diff })
      .shiftTo("hours", "minutes", "seconds")
      .toFormat("hh:mm:ss");
    return duration;
  } else return "waiting";
};

/**
 * Transforma cualquier numero para ponerle punto de miles
 * @param {Number} n | Numero
 */
 export const setPointNumberValue = (n) => {
  if (n !== null) {
    n = n.toString();
    while (true) {
      var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, "$1.$2$3");
      if (n === n2) break;
      n = n2;
    }
    
  }
  return n;
};

export const handleFetch = async (url, dataoptions) => {
  const { method, data, contentType } = dataoptions;
  let options = {
    method: method || "POST",
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": contentType || "application/json",
    },
  };
  return await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error("Error:", error));
};

export function daysAgo(date) {
  return Math.round(
    Math.abs(new Date(date).getTime() - new Date().getTime()) /
      1000 /
      60 /
      60 /
      24
  );
}
export function houtsAgo(date) {
  return Math.round(
    Math.abs(new Date(date).getTime() - new Date().getTime()) / 1000 / 60 / 60
  );
}
export function minsAgo(date) {
  return Math.round(
    Math.abs(new Date(date).getTime() - new Date().getTime()) / 1000 / 60
  );
}

export function timeStampNow() {
  let today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  if (hh < 10) hh = "0" + hh;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  let date = yyyy + "-" + mm + "-" + dd + " " + hh + ":" + min + ":" + sec;
  console.log(date);
  return yyyy + "-" + mm + "-" + dd + " " + hh + ":" + min + ":" + sec;
}
export function timeDate() {
  let today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  // let date = yyyy + "-" + mm + "-" + dd;
  return yyyy + "-" + mm + "-" + dd;
}

export async function handleFetchFiles(url, data) {
  return await fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.response !== false) {
        console.log("Success:", data);
        return data;
      } else {
        console.log("fail:", data);
        return data;
      }
    })
    .catch((error) => console.error("Error:", error));
}



export async function handleFetch1(url, data) {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status !== 200) {
        console.error("fail:", data);
        return data;
      } else {
        return data;
      }
    })
    .catch((error) => console.error("Error:", error));
}
export async function handleFetchDelete(url, data) {
  return await fetch(url, {
    method: "DELETE", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWYxNjBiODI1MzljNzc3NGU4ZGY0Yjk5Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX2lkIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9fdiI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9pZCI6dHJ1ZSwiZW1haWwiOnRydWUsInBhc3N3b3JkIjp0cnVlLCJfX3YiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiY2FjaGVkUmVxdWlyZWQiOnt9LCIkc2V0Q2FsbGVkIjp7fSwiZW1pdHRlciI6eyJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfSwiJG9wdGlvbnMiOnsic2tpcElkIjp0cnVlLCJpc05ldyI6ZmFsc2UsIndpbGxJbml0Ijp0cnVlfX0sImlzTmV3IjpmYWxzZSwiJGxvY2FscyI6e30sIiRvcCI6bnVsbCwiX2RvYyI6eyJfaWQiOiI1ZjE2MGI4MjUzOWM3Nzc0ZThkZjRiOTkiLCJlbWFpbCI6ImhlbnJ5ZnVsbEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwNSRuWllmY2dUamVTbDkzN0xhcElJaC9lZU1Ia0w5eVM0Q1pOeDM3eDB2MzVzQUM1S0NoRTJzSyIsIl9fdiI6MH0sIiRpbml0Ijp0cnVlLCJpYXQiOjE1OTU2NzUzNDB9.nL2H3kZxWX13dQsR226gBMmCSKFdom5h8tW2doY1oFI",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status === 201) {
        console.log("Success:", data);
        return data;
      } else {
        console.log("fail:", data);
        return data;
      }
    })
    .catch((error) => console.error("Error:", error));
}
export async function handleFetchPut(url, data) {
  return await fetch(url, {
    method: "PUT", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxM30sImlhdCI6MTU4Mjk3MjMwNH0.pc5y_wdRGxWQeb0waT6Hu9E01yFoe38AcTOBhT8di7s"
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log({ data });
      if (data.status === 201) {
        console.log("Success:", data);
        return data;
      } else {
        console.log("fail:", data);
        return data;
      }
    })
    .catch((error) => console.error("Error:", error));
}
export async function handleFetchGet(url) {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxM30sImlhdCI6MTU4Mjk3MjMwNH0.pc5y_wdRGxWQeb0waT6Hu9E01yFoe38AcTOBhT8di7s",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data !== false) {
        // console.log("Success:", data);
        return data;
      } else {
        console.error("fail:", data);
        return data;
      }
    })
    .catch((error) => console.error("Error:", error));
}
