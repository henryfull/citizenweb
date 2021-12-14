import React from "react";

const ButtonsSteps = ({ setStep, num, submit, validated }) => {


  return (
    <div className="flex-justify pdv_2 clear">
      {num === 1 && (
        <>
          <span></span>
          <button
            className="bggreen white pd_2 radius_5 right"
            onClick={(e) => setStep(e, num + 1)}
          >
            Siguiente
          </button>
        </>
      )}

      {num !== 5 && num !== 1 && (
        <>
          <button
            className="bgblack white pd_2 radius_5 left"
            onClick={(e) => setStep(e, num - 1)}
          >
            Atras
          </button>
          {console.log({validated})}
          <button
            disabled={validated} 
            className="bggreen white pd_2 radius_5 right"
            onClick={(e) => setStep(e, num + 1)}
          >
            Siguiente
          </button>
        </>
      )}

      {num === 5 && (
        <>
          {/* <button
            className="bgblack white pd_2 radius_5 left"
            onClick={(e) => setStep(e, num - 1)}
          >
            Atras
          </button> */}
          <button className="bgblue white pd_2 radius_5 right" onClick={submit} >Enviar</button>
        </>
      )}
    </div>
  );
};

export default ButtonsSteps;
