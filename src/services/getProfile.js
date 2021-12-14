import getSingleItem from "./getSingleItem";

export const GetProfile = async (token, params) => {
 
  let tok = token.token;
  const option = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tok}`,
    },
  };

  const get = async () => {
    return await getSingleItem("user", option, params)
    .then((item) => {
      console.log(item)
        const {notifications} = item
        return {item, notifications}
      })
      .catch((err) => {
        console.error("no tiene permisos", err);
      });
  };

  return await get();
};
