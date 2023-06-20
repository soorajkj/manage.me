"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { classnames } from "~utils/classnames";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 border border-transparent"
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, loading, asChild, className, ...rest } = props;
    const Element = asChild ? Slot : "button";

    return (
      <Element
        ref={ref}
        className={classnames(buttonStyles({ className }))}
        disabled={loading}
        tabIndex={loading ? -1 : 0}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";

export { Button };
