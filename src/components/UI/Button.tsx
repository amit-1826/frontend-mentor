import type { ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

type BaseButtonProps = {
  textonly: boolean;
};

type LinkProp = LinkProps & BaseButtonProps & { to: string };

type ButtonProp = Omit<ComponentPropsWithoutRef<"button">, "type"> &
  BaseButtonProps & { to?: never; type?: "button" | "submit" | "reset" };

export default function Button(props: LinkProp | ButtonProp) {
  const textOnlyClass = props.textonly ? "text-only" : undefined;
  if (props.to) {
    return (
      <Link className={`button ${textOnlyClass}`} to={props.to}>
        {props.children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonProp;
  return (
    <button className={`button ${textOnlyClass}`} {...buttonProps}>
      {props.children}
    </button>
  );
}
