declare module "*.png";
declare module "vite-plugin-svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.webp";
declare module "*.scss";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
