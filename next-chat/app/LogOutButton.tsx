"use client";

import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <button onClick={() => signOut()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 30 30"
        className="w-[2vw] md:w-[6vw] fill-stone-200 hover:fill-stone-400 animate"
      >
        <path d="M 5 3 C 3.897 3 3 3.897 3 5 L 3 25 C 3 26.103 3.897 27 5 27 L 19 27 C 20.103 27 21 26.103 21 25 L 21 16 L 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 L 21 14 L 21 5 C 21 3.897 20.103 3 19 3 L 5 3 z M 21 14 L 21 16 L 26.585938 16 L 24.292969 18.292969 A 1.0001 1.0001 0 1 0 25.707031 19.707031 L 29.707031 15.707031 A 1.0001 1.0001 0 0 0 29.707031 14.292969 L 25.707031 10.292969 A 1.0001 1.0001 0 0 0 24.990234 9.9902344 A 1.0001 1.0001 0 0 0 24.292969 11.707031 L 26.585938 14 L 21 14 z"></path>
      </svg>
    </button>
  );
};

export default LogOutButton;
