import React, { useState, useEffect } from 'react';
import useDesktop from '../../hooks/useDesktop';
import SwiperCore, { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

SwiperCore.use([Scrollbar]);

const HomeServices: React.FC = () => {
    const onShowDesktopMenu = useDesktop();
    const [numberOfSlides, setnumberOfSlides] = useState(null);

    const slides = (windowSize) => {
        if (windowSize <= 766) {
            return 1.5;
        } else {
            return 3.5;
        }
    };

    useEffect(() => {
        const handleMediaChange = function () {
            setnumberOfSlides(slides(window.screen.width));
        };
        window.addEventListener('resize', handleMediaChange);
        window.addEventListener('load', handleMediaChange);

        setnumberOfSlides(slides(window.screen.width));

        return () => {
            window.removeEventListener('resize', handleMediaChange);
            window.removeEventListener('load', handleMediaChange);
        };
    }, []);

    return (
        <div className="c-home-services">
            <div className="c-home-services__inner">
                <h2 className="c-home-services__header heading-large">Expertise that can help you design and build a website you’re proud of.</h2>

                {onShowDesktopMenu ? (
                    <div className="c-home-services__items">
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                            <p>Bespoke web design perfect for your brand and target audience.</p>
                        </div>
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">Marketing</h3>
                            <p>Bespoke web design perfect for your brand and target audience.</p>
                        </div>
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">Ecommerce</h3>
                            <p>Bespoke web design perfect for your brand and target audience.dsdqwdwqdwqwqdwqdwqdwq</p>
                        </div>
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">Support</h3>
                            <p>Bespoke web design perfect for your brand and target audience.</p>
                        </div>
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">SEO</h3>
                            <p>Bespoke web design perfect for your brand and target audience.sdsqdqdqdqwdqwd</p>
                        </div>
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">Copy writing</h3>
                            <p>Bespoke web design perfect for your brand and target audience.</p>
                        </div>
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">Shopify</h3>
                            <p>Bespoke web design perfect for your brand and target audience.</p>
                        </div>
                        <div className="c-home-services__item">
                            <h3 className="c-home-services__heading-webdesign heading">Videography</h3>
                            <p>Bespoke web design perfect for your brand and target audience.</p>
                        </div>
                    </div>
                ) : (
                    <div className="c-home-services__items">
                        <div className="c-home-services__slider">
                            <Swiper scrollbar={{ draggable: true }} spaceBetween={50} slidesPerView={numberOfSlides}>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="c-home-services__item">
                                        <h3 className="c-home-services__heading-webdesign heading">Web design</h3>
                                        <p>Bespoke web design perfect for your brand and target audience.</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeServices;
