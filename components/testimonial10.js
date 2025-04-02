import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Testimonial10 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="testimonial10-max-width thq-section-max-width">
          <div
            data-thq="slider"
            data-loop="false"
            data-autoplay="false"
            data-navigation="true"
            data-pagination="true"
            className="testimonial10-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="testimonial10-slider-slide1 swiper-slide"
              >
                <div className="testimonial10-content1">
                  <img
                    alt={props.company1LogoAlt}
                    src={props.company1LogoSrc}
                    className="testimonial10-logo1"
                  />
                  <p className="testimonial10-text10 thq-body-large">
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial10-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_OQvArh'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="testimonial10-avatar1">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial10-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                    />
                    <div className="testimonial10-avatar-content1">
                      <span className="testimonial10-text11 thq-body-small">
                        {props.author1Name ?? (
                          <Fragment>
                            <span className="testimonial10-text27">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_O-SIE7'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial10-text21">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_bNqCGx'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial10-slider-slide2 swiper-slide"
              >
                <div className="testimonial10-content2">
                  <img
                    alt={props.company2LogoAlt}
                    src={props.company2LogoSrc}
                    className="testimonial10-logo2"
                  />
                  <p className="testimonial10-text13 thq-body-large">
                    {props.review11 ?? (
                      <Fragment>
                        <span className="testimonial10-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_gNehUu'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="testimonial10-avatar2">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial10-avatar-image2 thq-img-round"
                    />
                    <div className="testimonial10-avatar-content2">
                      <span className="testimonial10-text14 thq-body-small">
                        {props.author2Name ?? (
                          <Fragment>
                            <span className="testimonial10-text20">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_oH1MSj'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial10-text19">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_c_olcr'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial10-slider-slide3 swiper-slide"
              >
                <div className="testimonial10-content3">
                  <img
                    alt={props.company3LogoAlt}
                    src={props.company3LogoSrc}
                    className="testimonial10-logo3"
                  />
                  <p className="testimonial10-text16 thq-body-large">
                    {props.review12 ?? (
                      <Fragment>
                        <span className="testimonial10-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_IXoKV1'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <div className="testimonial10-avatar3">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial10-avatar-image3 thq-img-round"
                    />
                    <div className="testimonial10-avatar-content3">
                      <span className="testimonial10-text17 thq-body-small">
                        {props.author3Name ?? (
                          <Fragment>
                            <span className="testimonial10-text22">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_xVXc6S'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <span className="thq-body-small">
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial10-text26">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_hSaCFU'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="testimonial10-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial10-max-width {
            display: flex;
          }
          .testimonial10-slider {
            width: 100%;
            height: auto;
            display: inline-block;
            position: relative;
          }
          .testimonial10-slider-slide1 {
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial10-content1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial10-logo1 {
            height: 2rem;
          }
          .testimonial10-text10 {
            text-align: center;
          }
          .testimonial10-avatar1 {
            gap: var(--dl-layout-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial10-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial10-avatar-content1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial10-text11 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial10-slider-slide2 {
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial10-content2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial10-logo2 {
            height: 2rem;
          }
          .testimonial10-text13 {
            text-align: center;
          }
          .testimonial10-avatar2 {
            gap: var(--dl-layout-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial10-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial10-avatar-content2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial10-text14 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial10-slider-slide3 {
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial10-content3 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial10-logo3 {
            height: 2rem;
          }
          .testimonial10-text16 {
            text-align: center;
          }
          .testimonial10-avatar3 {
            gap: var(--dl-layout-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial10-avatar-image3 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .testimonial10-avatar-content3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial10-text17 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial10-slider-pagination {
            display: block;
          }
          .testimonial10-text19 {
            display: inline-block;
          }
          .testimonial10-text20 {
            display: inline-block;
          }
          .testimonial10-text21 {
            display: inline-block;
          }
          .testimonial10-text22 {
            display: inline-block;
          }
          .testimonial10-text23 {
            display: inline-block;
          }
          .testimonial10-text24 {
            display: inline-block;
          }
          .testimonial10-text25 {
            display: inline-block;
          }
          .testimonial10-text26 {
            display: inline-block;
          }
          .testimonial10-text27 {
            display: inline-block;
          }
          .testimonial10root-class-name {
            background-color: #e7f1f6;
          }
          @media (max-width: 991px) {
            .testimonial10-content1 {
              flex: 1;
              width: 100%;
              max-width: 800px;
            }
            .testimonial10-content2 {
              flex: 1;
              width: 100%;
              max-width: 800px;
            }
            .testimonial10-content3 {
              flex: 1;
              width: 100%;
              max-width: 800px;
            }
          }
          @media (max-width: 767px) {
            .testimonial10-slider-slide1 {
              padding: var(--dl-layout-space-threeunits);
            }
            .testimonial10-slider-slide2 {
              padding: var(--dl-layout-space-threeunits);
            }
            .testimonial10-slider-slide3 {
              padding: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .testimonial10-slider-slide2 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .testimonial10-slider-slide3 {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial10.defaultProps = {
  author1Src:
    'https://images.unsplash.com/photo-1548142542-c53707f8b05b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzI0MDgwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  company1LogoAlt: 'Company Logo',
  author1Alt: 'Image of Emily Johnson',
  author2Position: undefined,
  author2Name: undefined,
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Src:
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzI0MDgwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: undefined,
  author3Name: undefined,
  company2LogoAlt: 'Company Logo',
  review11: undefined,
  company3LogoAlt: 'Company Logo',
  author3Alt: 'Image of Sophia Rodriguez',
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  rootClassName: '',
  author2Alt: 'Image of Michael Chen',
  review12: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MzI0MDgwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Position: undefined,
  author1Name: undefined,
}

Testimonial10.propTypes = {
  author1Src: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author2Name: PropTypes.element,
  company2LogoSrc: PropTypes.string,
  author3Src: PropTypes.string,
  author1Position: PropTypes.element,
  author3Name: PropTypes.element,
  company2LogoAlt: PropTypes.string,
  review11: PropTypes.element,
  company3LogoAlt: PropTypes.string,
  author3Alt: PropTypes.string,
  company3LogoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  author2Alt: PropTypes.string,
  review12: PropTypes.element,
  author2Src: PropTypes.string,
  review1: PropTypes.element,
  company1LogoSrc: PropTypes.string,
  author3Position: PropTypes.element,
  author1Name: PropTypes.element,
}

export default Testimonial10
