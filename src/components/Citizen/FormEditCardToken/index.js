// External
import React, { useState, useEffect } from "react";
import axios from "axios";
import domtoimage from "dom-to-image";

// Local
import CardEdit from "../CardEdit/index";

const FormEditCardToken = ({ auto }) => {
  // const { datas, loading } = useListBrands();
  const [datas, setDatas] = useState([]);
  const captureImage = "card-image";
  useEffect(() => {
    // console.log(auto);
    getDatas();
  }, [auto]);

  // Concierte el HTML en IMAGEN
  const convertHtmlToImage = (e) => {
    e.preventDefault();
    var node = document.getElementById(captureImage);
    // var node = document.getElementById(captureImage);

    // Create iamge
    domtoimage
      .toPng(node, { quality: 1 })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.getElementById("makerImage").appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
    // Download image
    domtoimage.toPng(node, { quality: 1 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `token-${auto.idToken}.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  // Obtiene los datos rellenar el formulario
  const getDatas = () => {
    var url = process.env.PUBLIC_URL + "datas";
    console.log(url);
    const options = { method: "GET" };
    axios(url, options).then((res) => {
      // console.log(res.data.body);
      localStorage.setItem("datas", JSON.stringify(res.data.body));
      setDatas(res.data.body);
    });
  };

  return (
    <div id="">
      <div className="flex">
        {auto && (
          <CardEdit
            datas={datas}
            auto={auto}
            convertHtmlToImage={convertHtmlToImage}
          />
        )}
      <div className="pdh_1" id="makerImage"></div>
      </div>
    </div>
  );
};

export default FormEditCardToken;
