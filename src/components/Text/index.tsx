import React from "react";

const sizes = {
  xs: "text-xl font-light",
  s: "text-2xl font-normal md:text-[22px]",
  md: "text-[42px] font-normal md:text-[38px] sm:text-[32px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-titilliumweb ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
