import type { ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseButtonProps = {
  textonly: boolean;
};

type LinkProp = LinkProps & BaseButtonProps & { to: string };

type ButtonProp = ComponentPropsWithoutRef<"button"> &
  BaseButtonProps & { to?: never };

export default function Button(props: LinkProp | ButtonProp) {
  const textOnlyClass = props.textonly ? "text-only" : undefined;
  if (props.to) {
    return (
      <Link className={`button ${textOnlyClass}`} to={props.to}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={`button ${textOnlyClass}`} {...props}>
      {props.children}
    </button>
  );
}
