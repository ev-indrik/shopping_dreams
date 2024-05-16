import { FC, SVGProps } from "react";

import { ReactComponent as AirPlane } from "./svg/Paper_Plane.svg";
import { ReactComponent as Crown } from "./svg/crown.svg";

export type IconType = "crown" | "paper_plane";

// const testing: Record<string, string> = {
//   name: "John",
//   age: "23",
// };

const iconsMap: Record<IconType, FC<SVGProps<SVGSVGElement>>> = {
  ["crown"]: Crown,
  ["paper_plane"]: AirPlane,
};

export enum IconSize {
  xs = 16,
  sm = 18,
  md = 20,
  lg = 24,
  xl = 28,
}

type SvgIconProps = SVGProps<SVGSVGElement> & {
  type?: IconType;
  size?: IconSize;
  exactSize?: number;
};

export const Icon: FC<SvgIconProps> = ({
  type,
  size = IconSize.md,
  exactSize,
}) => {
  if (!type) {
    return null;
  }

  const Icon = iconsMap[type];

  const resultSize = exactSize || size;

  return <Icon width={resultSize} height={resultSize} />;
};
