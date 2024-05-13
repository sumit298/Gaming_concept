import React from "react";

const sizes = {
  s: "text-[52px] font-semibold md:text-[44px] sm:text-[38px]",
  md: "text-[192px] font-bold md:text-5xl",
  xs: "text-2xl font-bold md:text-[22px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-titilliumweb ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
