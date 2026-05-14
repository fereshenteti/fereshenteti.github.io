'use client';
import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplayProgress } from './EmblaCarouselAutoplayProgress'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { SlideData } from '@/services/slides'

const TWEEN_FACTOR_BASE = 0.2

type PropType = {
  slides: SlideData[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const progressNode = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false })
  ])
  const [tweenFactor, setTweenFactor] = React.useState(0)
  const [tweenNodes, setTweenNodes] = React.useState<HTMLElement[]>([])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode)

  const setTweenNodesFunc = useCallback((emblaApi: EmblaCarouselType): void => {
    setTweenNodes(emblaApi.slideNodes())
  }, [])

  const setTweenFactorFunc = useCallback((emblaApi: EmblaCarouselType) => {
    setTweenFactor(TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length)
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor) * 100
          const tweenNode = tweenNodes[slideIndex]
            ?.querySelector('.embla__parallax__layer') as HTMLElement

          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%)`
          }
        })
      })
    },
    [tweenFactor, tweenNodes]
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodesFunc(emblaApi)
    setTweenFactorFunc(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodesFunc)
      .on('reInit', setTweenFactorFunc)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, tweenParallax])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={slide.src}
                    alt="Your alt text"
                  />
                </div>
                {slide.link && (
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className="embla__slide__link">
                    <div className="embla__slide__link__content">
                      <span className="embla__slide__link__text">{slide.link.replace(/^https?:\/\//, '')}</span>
                      <svg className="embla__slide__link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div
          className={`embla__progress`.concat(
            showAutoplayProgress ? '' : ' embla__progress--hidden'
          )}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
