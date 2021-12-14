import getSingleItem from "./getSingleItem";

export const CheckRoles = async (token, params) => {
  let rol = [];
  let tok = token.token;
  const option = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tok}`,
    },
  };
  const getRoles = async (params) => {
    await getSingleItem("rol", option, '')
      .then((items) => {
        console.log(items)
        for (const item of items) {
          if (params.includes(item._id)) {
            rol.push(item.name);
          }
        }
      })
      .catch((err) => {
        console.error("no tiene permisos", err);
        rol.push("user");
      });
    return rol;
  };

  return await getRoles(params);
};
