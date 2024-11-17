/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export function Button(props) {
  const buttonNavigate = useNavigate();
  return (
    <button
      // eslint-disable-next-line react/prop-types
      onClick={() => buttonNavigate(props.link)}
      // eslint-disable-next-line react/prop-types
      className={`w-[264px] ${props.textPosition} bg-color-black text-color-white font-display py-6 px-8 text-xl tracking-[3.64px] font-extrabold relative before:content[''] before:absolute before:w-[56px] before:h-full before:bg-color-brown before:top-0 ${props.positionColor} after:content[''] after:absolute ${props.bgImage} after:w-[10px] after:h-[24px] ${props.position}`}
    >
      {props.name}
    </button>
  );
}
