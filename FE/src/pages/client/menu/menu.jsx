import style from "./menu.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

import shopee from "../../../assets/images/logoMall/shoppee.webp";
import grab from "../../../assets/images/logoMall/grab.webp";
import highlands from "../../../assets/images/logoMall/highlands.webp";
import klook from "../../../assets/images/logoMall/klook.webp";
import lazada from "../../../assets/images/logoMall/lazada.webp";
import sendo from "../../../assets/images/logoMall/sendo.webp";
import tiki from "../../../assets/images/logoMall/tiki.webp";

import slide1 from "../../../assets/images/slideShowMenu/slide1.jpg";
import slide2 from "../../../assets/images/slideShowMenu/slide2.jpg";
import slide3 from "../../../assets/images/slideShowMenu/slide3.jpg";

// import React from 'react';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};
const slideImages = [slide1, slide2, slide3];

const cx = classNames.bind(style);

function maGiamGia() {
  return (
    <div className={cx("container")}>
      {/* Slideshow */}
      <div className="slide-container">
        <Slide duration={1500}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>

      {/* breadcrumb */}
      <div className={cx("breadcrumb")}>
        <Link className={cx("breadcrumb-home")}>Trang chủ</Link>
        <Link className={cx("breadcrumb-voucher")}>Mã giảm giá</Link>
      </div>

      {/* h1 */}
      <h1>Danh sách mã</h1>

      {/* content */}
      <div className={cx("content")}>
        <div className={cx("left")}>
            <div className={cx("text")}>
                Lọc theo <span>Sàn</span>
            </div>
            <div className={cx("scroll")}>
                <div className={cx("scroll-mall")}>
                    <div className={cx("name")}>
                        <img src={shopee} />
                        <span>Shopee</span>
                    </div>
                    <div className={cx("number")}>
                        86
                    </div>
                </div>
                <div className={cx("scroll-mall")}>
                    <div className={cx("name")}>
                        <img src={lazada} />
                        <span>Lazada</span>
                    </div>
                    <div className={cx("number")}>
                        73
                    </div>
                </div>
                <div className={cx("scroll-mall")}>
                    <div className={cx("name")}>
                        <img src={highlands} />
                        <span>Highlands</span>
                    </div>
                    <div className={cx("number")}>
                        45
                    </div>
                </div>
                <div className={cx("scroll-mall")}>
                    <div className={cx("name")}>
                        <img src={grab} />
                        <span>Grab</span>
                    </div>
                    <div className={cx("number")}>
                        17
                    </div>
                </div>
                <div className={cx("scroll-mall")}>
                    <div className={cx("name")}>
                        <img src={klook} />
                        <span>Klook</span>
                    </div>
                    <div className={cx("number")}>
                        23
                    </div>
                </div>
                <div className={cx("scroll-mall")}>
                    <div className={cx("name")}>
                        <img src={sendo} />
                        <span>Sendo</span>
                    </div>
                    <div className={cx("number")}>
                        12
                    </div>
                </div>
                <div className={cx("scroll-mall")}>
                    <div className={cx("name")}>
                        <img src={tiki} />
                        <span>Tiki</span>
                    </div>
                    <div className={cx("number")}>
                        7
                    </div>
                </div>
            </div>
        </div>
        <div className={cx("vouchers")}>
            <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('voucher-item')}>
                            <div className={cx('cut')}>
                                <div className={cx('top')}>
                                    <div className={cx('left')}>
                                        <img src={lazada}  />
                                        <h5>Toàn sàn</h5>
                                    </div>
                                    <div className={cx('right')}>
                                        <div className={cx('discount')}>
                                            Giảm <span>45K</span>
                                        </div>
                                        <div className={cx('condition')}>
                                            ĐH tối thiểu: <span> 120.000đ</span>
                                        </div>
                                        <div className={cx('note')}>
                                            Lưu mã trên banner lúc 12H, 20H hàng ngày  
                                            <span>...  Xem chi tiết</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bot')}>
                                    <div className={cx('expiry')}>
                                    <FontAwesomeIcon 
                                        icon={faClockRotateLeft} 
                                        className={cx('clock-icon')}
                                    />
                                    HSD: <span>30/11</span>
                                    </div>
                                    <div className={cx('promotion')}>
                                        #Lưu trên banner
                                    </div>
                                    <div className={cx('action')}>
                                        <Link to="/banner">Đến Banner</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
      </div>
      
    </div>
  );
}

export default maGiamGia;
