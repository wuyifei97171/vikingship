import React from 'react'
import classNames from 'classnames'

// 创建button样式属性的枚举
export enum ButtonSize{
    Large = 'lg',
    Small = 'sm',
}

export enum ButtonType{
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;    // 因为type本身就是Button的一个属性，所以这里命名为btnType
    children: React.ReactNode;
    href?: string
}

const Button: React.FunctionComponent<BaseButtonProps> = (props) =>{
    const {
        btnType,
        disabled,
        size,
        children,
        href
    } = props;
    // btn, btn-lg, btn-primary
    const classes = classNames('btn',{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    });
    if (btnType === ButtonType.Link && href ){
        return(
            <a
                className={classes}
                href={href}
            >{children}</a>
        )
    } else {
        return (
            <button className={classes} disabled={disabled}>
                {children}
            </button>
        )
    }
};

// button 默认样式
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
};

export default Button