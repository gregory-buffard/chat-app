const Loading = () => {
  return (
    <div className="m-auto w-screen h-screen bg-stone-900 flex flex-col justify-center items-center">
      <h1 className="text-[5vw] text-stone-200 font-bold drop-shadow-2xl">
        NextChat
      </h1>
      <div className="flex justify-center items-center bg-stone-800 py-[1vh] px-[1vw] rounded-[1vw] drop-shadow-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
          className="w-[2vw] animate-spin mr-[0.5vw]"
        >
          <linearGradient
            id="ymZTTHHCsqAuBTSb78~Hsa_Z4lBdSu2GAl2_gr1"
            x1="43.894"
            x2="11.857"
            y1="43.894"
            y2="11.857"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset=".242" stop-color="#f2f2f2"></stop>
            <stop offset="1" stop-color="#ccc"></stop>
          </linearGradient>
          <path
            fill="url(#ymZTTHHCsqAuBTSb78~Hsa_Z4lBdSu2GAl2_gr1)"
            d="M24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20	C44,12.954,35.046,4,24,4z M24,39c-8.284,0-15-6.716-15-15c0-8.284,6.716-15,15-15c8.284,0,15,6.716,15,15	C39,32.284,32.284,39,24,39z"
          ></path>
          <linearGradient
            id="ymZTTHHCsqAuBTSb78~Hsb_Z4lBdSu2GAl2_gr2"
            x1="3.814"
            x2="32.654"
            y1="3.814"
            y2="32.654"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#21ad64"></stop>
            <stop offset="1" stop-color="#088242"></stop>
          </linearGradient>
          <path
            fill="url(#ymZTTHHCsqAuBTSb78~Hsb_Z4lBdSu2GAl2_gr2)"
            d="M24,5.029v3.002c0,0.54,0.429,0.965,0.968,0.999c8.064,0.514,14.396,7.4,14.016,15.677	c-0.351,7.638-6.636,13.924-14.275,14.276c-8.278,0.381-15.164-5.951-15.678-14.016C8.996,24.429,8.571,24,8.031,24H5.029	c-0.564,0-1.032,0.467-1.003,1.03c0.554,10.92,9.866,19.529,21.051,18.942c10.095-0.529,18.365-8.8,18.894-18.895	C44.558,13.891,35.949,4.58,25.03,4.026C24.467,3.998,24,4.466,24,5.029z"
          ></path>
        </svg>
        <p className="font-medium text-stone-200 text-[1.5vw]">chargement...</p>
      </div>
    </div>
  );
};

export default Loading;