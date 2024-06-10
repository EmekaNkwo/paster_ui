import { Spin } from "antd";
import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    icon?: JSX.Element;
    className?: string;
    loading?: boolean;
    variant?: "filled";
    leftIcon?: JSX.Element;
}

export const NormalButton = ({
    variant,
    title,
    className,
    loading,
    icon,
    leftIcon,
    ...props
}: IProps) => {
    return (
        <>
            {
                variant === "filled" ? (<button
                    className={`${className} disabled:bg-[#ccc] disabled:cursor-not-allowed h-[40px] p-2 text-[15px] rounded-md border-none flex items-center justify-center outline-none hover:bg-opacity-90 relative`}
                    {...props}
                >
                    {leftIcon && leftIcon}    {title && title} {icon && icon}
                    {loading && (
                        <Spin className="flex items-center justify-center" />
                    )}
                </button>) : (<button
                    className={`${className}  h-[40px] p-2 text-[15px] rounded-md border-[2px] flex items-center gap-2 justify-center outline-none hover:border-opacity-90`}
                    {...props}
                >
                    {leftIcon && leftIcon}  {title && title}  {icon && icon}
                    {loading && (
                        <Spin className="flex items-center justify-center" />
                    )}
                </button>)
            }
        </>
    );
};