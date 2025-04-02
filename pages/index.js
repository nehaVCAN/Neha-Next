import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar7 from '../components/navbar7'
import Testimonial10 from '../components/testimonial10'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container10">
        <Head>
          <title>Neha</title>
          <meta property="og:title" content="Neha" />
        </Head>
        <Navbar7
          link1={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3g8EU1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lzHiI6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6uMTGm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C3e85G'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Frz7B5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jM0boB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xxBSw4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ljcP7H'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9DVO33'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link51={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IFB37M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0g2vSL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_85YtF3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3ZVPcp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZTJEG0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar7>
        <div className="home-container11">
          <video
            src="https://www.youtube.com/watch?v=xAra0XY39Hk&amp;t=45s"
            loop
            poster="/ac%2030%201_%20700x700-1500w.png"
            preload="auto"
            autoPlay="true"
            playsInline
            className="home-video"
          ></video>
        </div>
        <div className="home-container12">
          <span className="home-text24">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('Text_BdsMdh'),
              }}
            ></span>
          </span>
        </div>
        <div className="home-container13">
          <div className="home-container14">
            <animate-on-reveal
              animation="pulse"
              duration="300ms"
              delay="0s"
              direction="alternate"
              easing="ease"
              iteration="1"
            >
              <img
                alt="image"
                src="/639x676%20website%20banner-600w.png"
                data-thq-animate-on-reveal="true"
                className="home-image1"
              />
            </animate-on-reveal>
          </div>
          <div className="home-container15">
            <div className="home-container16">
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_L9metC'),
                  }}
                ></span>
              </span>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W9myJV'),
                  }}
                ></span>
              </span>
            </div>
            <button type="button" className="home-button button">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_Ct5TS6'),
                }}
              ></span>
            </button>
          </div>
        </div>
        <div className="home-container17">
          <span className="home-text27">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_-S4s4W'),
              }}
            ></span>
          </span>
        </div>
        <div className="home-container18">
          <div className="home-container19">
            <div className="home-container20">
              <img
                alt="image"
                src="/ac%2030%201_%20700x700-1500w.png"
                className="home-image2"
              />
            </div>
          </div>
          <img
            alt="image"
            src="/ac%2030%202_700x700-500w.png"
            className="home-image3"
          />
        </div>
        <div className="home-container21">
          <div className="home-container22">
            <div className="home-container23">
              <img
                alt="image"
                src="/cl%202_%20700x700-600w.png"
                className="home-image4"
              />
            </div>
          </div>
          <img
            alt="image"
            src="/cl%201_%20700x700-500w.png"
            className="home-image5"
          />
        </div>
        <div className="home-container24">
          <div className="home-container25">
            <div className="home-container26">
              <img
                alt="image"
                src="/oc%201_%20700x700-600w.png"
                className="home-image6"
              />
            </div>
          </div>
          <img
            alt="image"
            src="/oc%202_%20700x700-500w.png"
            className="home-image7"
          />
        </div>
        <div className="home-container27">
          <span className="home-text28">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_ROpWlV'),
              }}
            ></span>
          </span>
          <img
            alt="image"
            src="/website%20banner%20-01-700h.jpeg"
            className="home-image8"
          />
        </div>
        <div className="home-container28">
          <span className="home-text29">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_V8fSYm'),
              }}
            ></span>
          </span>
        </div>
        <Testimonial10
          review1={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YWAbeN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review11={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GJDlG9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review12={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UTedgB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DjcJ8W'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eGh_xN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RmDLwr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="testimonial10root-class-name"
          author1Position={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vsBlEc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rNTp1l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_zIys8s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Testimonial10>
      </div>
      <style jsx>
        {`
          .home-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-container11 {
            width: 100%;
            height: 396px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: linear-gradient(
              to right,
              #bdc3c7 0%,
              #2c3e50 100%
            );
          }
          .home-video {
            width: 100%;
            height: 408px;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-layout-size-medium);
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e7f1f6;
          }
          .home-text24 {
            color: #187aa4;
            font-size: 20px;
            font-style: normal;
            font-family: 'Noto Sans';
            font-weight: 700;
            text-transform: uppercase;
          }
          .home-container13 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 588px;
            height: 570px;
            display: flex;
            align-items: center;
            margin-right: 54px;
            flex-direction: column;
            justify-content: center;
          }
          .home-image1 {
            width: 534px;
            height: 440px;
            object-fit: cover;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 516px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 476px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-layout-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text25 {
            color: #187aa4;
            font-size: 20px;
            font-family: 'Noto Sans';
            line-height: 1.5;
            letter-spacing: 2px;
            padding-bottom: var(--dl-layout-space-threeunits);
            text-transform: uppercase;
          }
          .home-text26 {
            font-style: normal;
            text-align: justify;
            font-family: 'Noto Sans';
            font-weight: 300;
            line-height: 1.5;
            padding-bottom: var(--dl-layout-space-threeunits);
          }
          .home-button {
            color: #ffffff;
            width: var(--dl-layout-size-xlarge);
            padding: var(--dl-layout-space-unit);
            border-color: #f70606;
            border-width: 0px;
            border-radius: var(--dl-layout-radius-buttonradius);
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            background-color: #187aa4;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text27 {
            color: #187aa4;
            font-size: 25px;
            font-family: 'Noto Sans';
            padding-top: var(--dl-layout-space-fourunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container19 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container20 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image2 {
            width: 524px;
            object-fit: cover;
            animation-name: slideInLeft;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
          }
          .home-image3 {
            width: 492px;
            object-fit: cover;
            animation-name: slideInRight;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container22 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container23 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image4 {
            width: 524px;
            object-fit: cover;
            animation-name: slideInLeft;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
          }
          .home-image5 {
            width: 492px;
            object-fit: cover;
            animation-name: slideInRight;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container25 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-container26 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image6 {
            width: 524px;
            object-fit: cover;
            animation-name: slideInLeft;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
          }
          .home-image7 {
            width: 492px;
            object-fit: cover;
            animation-name: slideInRight;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
          }
          .home-container27 {
            height: 917px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text28 {
            color: rgb(24, 122, 164);
            font-size: 35px;
            text-align: center;
            font-family: 'Noto Sans';
            padding-top: var(--dl-layout-space-fourunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-twounits);
            text-transform: uppercase;
          }
          .home-image8 {
            width: 652px;
            height: 603px;
            object-fit: cover;
          }
          .home-container28 {
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            aspect-ratio: auto;
            background-color: #e7f1f6;
          }
          .home-text29 {
            color: rgb(24, 122, 164);
            font-size: 35px;
            text-align: center;
            font-family: 'Noto Sans';
            padding-top: var(--dl-layout-space-fourunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            padding-bottom: var(--dl-layout-space-twounits);
            text-transform: uppercase;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
