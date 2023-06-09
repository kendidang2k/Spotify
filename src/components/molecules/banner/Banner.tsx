import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../../contants/commons";
import { useRecoilState } from "recoil";
import { playlistIdState, playlistState } from "../../../recoil/playlistAtom";

interface IBannerProps {}

const Banner: React.FC<IBannerProps> = ({}) => {
  const [color, setColor] = useState<any>(null);
  const [playlistId] = useRecoilState(playlistIdState);
  const [playlist] = useRecoilState<any>(playlistState);

  useEffect(() => {
    setColor(shuffle(COLORS).pop());
  }, [playlistId]);

  return (
    <section
      className={`relative bg-gradient-to-b ${color} h-80 text-white w-full`}
    >
      <div className="absolute bottom-0 left-[16px] flex items-end">
        <img
          className=" w-32 h-32 sm:w-44 sm:h-44"
          src={playlist?.images?.[0]?.url}
          alt={playlist?.name}
        />
        <div className="pl-5">
          <p className="text-[12px] font-bold">PLAYLIST</p>
          <h1 className="text-[32px] md:text-[56px] font-bold uppercase">
            {playlist?.name}
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Banner;
