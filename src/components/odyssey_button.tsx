import { HTMLAttributes } from "react";

interface ButtonProps {
  id: string;
  title: string;
  containerClass?: HTMLAttributes<HTMLButtonElement>['className'];
}

export default function OdysseyButton({id, title, containerClass}: ButtonProps) {
  return (
 <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full mt-4 px-8 py-3 ring-3 ring-purple-odyssey ${containerClass}`}>{title}</button>
  )
}