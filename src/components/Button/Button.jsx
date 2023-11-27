import './Button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as ButtonAntd } from 'antd';

const Button = ({ iconLeft, iconRight, ...props }) => {
  return (
    <ButtonAntd
      className={classNames(props.className, {
        'ant-btn--left-icon': iconLeft,
        'ant-btn--right-icon': iconRight,
      })}
    >
      {iconLeft ? iconLeft : null}
      {props.children}
      {iconRight ? iconRight : null}
    </ButtonAntd>
  );
};

export default Button;

Button.propTypes = {
  iconLeft: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  iconRight: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  children: PropTypes.any,
  className: PropTypes.string,
};
