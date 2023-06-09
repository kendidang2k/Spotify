import { atom } from "recoil";
import { ATOM_KEY } from "../contants/commons";

export const volumeState = atom({
  key: ATOM_KEY.VOLUME,
  default: 50,
});
export const deviceState = atom({
  key: ATOM_KEY.DEVICE,
  default: "",
});
