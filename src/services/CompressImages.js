import Resizer from "react-image-file-resizer";

  const compressImage = async (file) => {
    return await new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1280,
        960,
        "JPEG",
        75,
        0,
        (uri) => {
          resolve(uri);
        },
        "blob"
      );
    });
  };

  export const convertImages = async (arrayFiles) => {
    return await new Promise(async (resolve) => {
      let arrayImages = [];
      if (arrayFiles) {
        for (const item of arrayFiles) {
          if (item) {
            arrayImages.push({
              file: await compressImage(item),
              name: item.name,
            });
          }
        }
        resolve(arrayImages);
      }
    });
  };