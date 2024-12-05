import style from "./dashbroard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function dashbroard() { 
    return(
        <div className={cx('title')}>
            <h1>Chào mừng bạn đến với trang quản trị !</h1>
        </div>
    );
}
export default dashbroard;