module.exports = {
  fetx: {
    get: (url, option) => {
      if (option.body) delete option.body;
      option.method = "GET";
      return fetch(url, option)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return res.body;
          } else {
            console.error("fail:", res.body);
            return res || false;
          }
        })
        .catch((error) => console.error("Error:", error));
    },
    post: (url, option, data) => {
      option.method = "POST";
      option.body = JSON.stringify(data);
      return fetch(url, option)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            return res.body;
          } else {
            console.error("fail:", res.body);
            return false;
          }
        })
        .catch((error) => console.error("Error:", error));
    },
    file: (url, isAuth, formData) => {
      const option = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${isAuth}`,
        },
        body: formData,
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent.loaded / progressEvent.total);
        },
      };
      return fetch(url, option)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            return res.body;
          } else {
            console.error("fail:", res.body);
            return false;
          }
        })
        .catch((error) => console.error("Error:", error));
    },
    put: (url, option, data) => {
      option.method = "PUT";
      option.body = JSON.stringify(data);
      return fetch(url, option)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            return res.body;
          } else if (res.status === 500) {
            console.error("fail:", res.body);
            return false;
          }
        })
        .catch((error) => console.error("Error:", error));
    },
    delete: (url, option) => {
      if (option.body) delete option.body;
      option.method = "DELETE";
      return fetch(url, option)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            return res.body;
          } else if (res.status === 500) {
            console.error("fail:", res.body);
            return false;
          }
        })
        .catch((error) => console.error("Error:", error));
    },
  },
  options : {
    headers: {
      "Content-Type": "application/json",
    },
  }
};

// export async function handleFetch1(url, data) {
//     return await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(data), // data can be `string` or {object}!
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status !== 200) {
//           console.error("fail:", data);
//           return data;
//         } else {
//           return data;
//         }
//       })
//       .catch((error) => console.error("Error:", error));
//   }
