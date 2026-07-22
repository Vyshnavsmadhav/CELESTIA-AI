/* eslint-disable @next/next/no-img-element */
"use client"

import {
    useState,
    useEffect,
    useRef,
    type CSSProperties,
} from "react"
const useIsStaticRenderer = () => false

interface Slide {
    image?: { src?: string; srcSet?: string; alt?: string }
    title?: string
}

type AutoplayDir = "leftToRight" | "rightToLeft"
type TitleCorner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

interface Smooth3DSlideshowProps {
    slides?: Slide[]
    cardWidth?: number
    cardHeight?: number
    radius?: number
    tilt?: number
    sideTilt?: number
    gap?: number
    opacity?: number
    transition?: Record<string, unknown>
    autoplay?: boolean
    autoplayDirection?: AutoplayDir
    showTitle?: boolean
    titleFont?: CSSProperties
    titleColor?: string
    titlePosition?: {
        position?: TitleCorner
        paddingLeft?: number
        paddingRight?: number
        paddingTop?: number
        paddingBottom?: number
    }
    style?: CSSProperties
}

const DEFAULT_SLIDES: Slide[] = [
    {
        image: {
            src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/316d1761-fd79-4ca9-b8d4-f2bb20521a00/w=800",
        },
        title: "For Sitting\nMetal\nMinimal",
    },
    {
        image: {
            src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/aeaa0756-9647-4f6c-d900-204bd25e4a00/w=800",
        },
        title: "For Living\nConcrete\nForm",
    },
    {
        image: {
            src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/34ce1842-4b7a-4d52-0302-38582c341700/w=800",
        },
        title: "For Working\nSteel\nClean",
    },
]

// Fixed internals (no longer exposed as controls).
const PERSPECTIVE = 1600
const SCALE_STEP = 0.16
const MAX_VISIBLE = 2
// In a preserve-3d context paint order follows 3D position, not z-index, so the
// centre is pushed nearest the viewer and neighbours fall back behind it.
const DEPTH = 240

// Derive a CSS transition (duration + easing) from a Framer Transition value.
function cssTransition(t: Record<string, unknown> | undefined): { dur: number; ease: string } {
    const dur = t && typeof t.duration === "number" ? t.duration : 0.6
    let ease = "cubic-bezier(0.22, 1, 0.36, 1)"
    const e = t?.ease
    if (Array.isArray(e) && e.length === 4) {
        ease = `cubic-bezier(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`
    } else if (typeof e === "string") {
        const map: Record<string, string> = {
            linear: "linear",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
        }
        ease = map[e] || "ease"
    }
    return { dur, ease }
}

export default function Smooth3DSlideshow(props: Smooth3DSlideshowProps) {
    props = { ...COMPONENT_DEFAULTS, ...props }
    const {
        slides = DEFAULT_SLIDES,
        cardWidth = 557,
        cardHeight = 420,
        radius = 0,
        tilt = 7,
        sideTilt = 7,
        gap = 7,
        opacity = 65,
        transition,
        autoplay = false,
        autoplayDirection = "rightToLeft",
        showTitle = true,
        titleFont,
        titlePosition,
        style,
    } = props

    const isStatic = useIsStaticRenderer()
    const list = slides && slides.length ? slides : DEFAULT_SLIDES
    const n = list.length

    // Loop is always on.
    const loop = true
    const [rawActive, setActive] = useState(0)
    const active = Math.max(0, Math.min(n - 1, rawActive))

    const moveDur =
        transition && typeof transition.duration === "number"
            ? transition.duration
            : 0.6
    const lockRef = useRef(false)
    const lock = () => {
        lockRef.current = true
        window.setTimeout(
            () => {
                lockRef.current = false
            },
            Math.max(50, moveDur * 1000)
        )
    }

    const step = (dir: number) => {
        if (lockRef.current) return
        lock()
        setActive((a) => (((a + dir) % n) + n) % n)
    }

    const handleCardClick = (i: number) => {
        if (isStatic || autoplay || lockRef.current) return
        lock()
        setActive((a) => (i === a ? (a + 1) % n : i))
    }

    const delay =
        transition && typeof transition.delay === "number"
            ? transition.delay
            : 2.5
    useEffect(() => {
        if (isStatic || !autoplay || n < 2) return
        const ms = Math.max(0.3, delay) * 1000
        const dir = autoplayDirection === "leftToRight" ? -1 : 1
        const id = window.setInterval(() => step(dir), ms)
        return () => window.clearInterval(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isStatic, autoplay, autoplayDirection, delay, n])

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            e.preventDefault()
            step(1)
        } else if (e.key === "ArrowLeft") {
            e.preventDefault()
            step(-1)
        }
    }

    const { dur, ease } = cssTransition(transition)
    const transitionCss = `transform ${dur}s ${ease}, opacity ${dur}s ${ease}`

    const effectiveRadius =
        (Math.max(0, Math.min(20, radius)) / 20) *
        (Math.min(cardWidth, cardHeight) / 2)
    const dim = 1 - Math.max(0, Math.min(100, opacity)) / 100

    const rootStyle: CSSProperties = {
        ...(style || {}),
        position: "relative",
        width: "100%",
        height: "100%",
        minWidth: 320,
        minHeight: 360,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: `${PERSPECTIVE}px`,
        overflow: "visible",
        outline: "none",
    }

    return (
        <div
            style={rootStyle}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            onKeyDown={isStatic ? undefined : onKeyDown}
        >
            <div
                style={{
                    position: "relative",
                    width: cardWidth,
                    height: cardHeight,
                    transformStyle: "preserve-3d",
                }}
            >
                {list.map((slide, i) => {
                    let rel = i - active
                    if (loop) {
                        if (rel > n / 2) rel -= n
                        if (rel < -n / 2) rel += n
                    }
                    const ax = Math.abs(rel)
                    const visible = ax <= MAX_VISIBLE
                    const isActive = rel === 0
                    const sc = Math.max(0.4, 1 - ax * SCALE_STEP)
                    const tx = rel * (gap * 30)
                    const tz = -ax * DEPTH
                    const ry = -rel * tilt
                    const rz = rel * sideTilt
                    const src = slide.image?.src || ""

                    const wrapperStyle: CSSProperties = {
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: cardWidth,
                        height: cardHeight,
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                        transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
                        transition: transitionCss,
                        opacity: visible ? 1 : 0,
                        cursor: autoplay || isActive ? "default" : "pointer",
                        pointerEvents:
                            visible && !isStatic && !autoplay ? "auto" : "none",
                    }

                    const cardStyle: CSSProperties = {
                        position: "absolute",
                        inset: 0,
                        borderRadius: effectiveRadius,
                        overflow: "hidden",
                        backgroundColor: "#1a1a1a",
                    }

                    return (
                        <div
                            key={i}
                            style={wrapperStyle}
                            onClick={
                                isStatic ? undefined : () => handleCardClick(i)
                            }
                            aria-label={slide.title}
                            aria-hidden={!visible}
                        >
                            <div style={cardStyle}>
                                {src ? (
                                    <img
                                        src={src}
                                        alt={slide.image?.alt || slide.title || ""}
                                        draggable={false}
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                            userSelect: "none",
                                        }}
                                    />
                                ) : null}

                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "#000000",
                                        opacity: isActive ? 0 : dim,
                                        transition: `opacity ${dur}s ${ease}`,
                                        pointerEvents: "none",
                                    }}
                                />
                            </div>

                            {showTitle && (
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        bottom: -60,
                                        textAlign: "center",
                                        pointerEvents: "none",
                                        transform: "translateZ(30px)", // Pop the text out slightly in 3D
                                    }}
                                >
                                    <span
                                        className="reveal-text opacity-0 translate-y-8"
                                        style={{
                                            color: "#000000",
                                            fontSize: 28,
                                            fontWeight: 700,
                                            fontStyle: "italic",
                                            lineHeight: "1.1em",
                                            letterSpacing: "0.05em",
                                            ...(titleFont || {}),
                                        }}
                                    >
                                        {slide.title}
                                    </span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const COMPONENT_DEFAULTS = {
    slides: [
        {
            image: {
                src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/7d4d2641-d6a8-4fef-e85c-b12ed100d500/w=800",
            },
            title: "James Walker",
        },
        {
            image: {
                src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/933a7615-f4b6-4eae-8ed1-705fa0e24400/w=800",
            },
            title: "Olivia Carter",
        },
        {
            image: {
                src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/859c75ea-953e-489e-be61-91a03a35d700/w=800",
            },
            title: "Amelia Foster",
        },
        {
            image: {
                src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/31afae9c-5ba3-4ec3-2534-ed8198ed1100/w=800",
            },
            title: "Benjamin Harris",
        },
        {
            image: {
                src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/ed7b1c40-3332-43d8-a9eb-4615ef341b00/w=800",
            },
            title: "Lucas Martin",
        },
    ],
    cardWidth: 400,
    cardHeight: 400,
    radius: 3,
    tilt: 12,
    sideTilt: 8,
    gap: 8,
    opacity: 60,
    autoplay: false,
    autoplayDirection: "rightToLeft" as AutoplayDir,
    transition: {
        type: "tween",
        duration: 0.6,
        delay: 2.5,
        ease: [0.22, 1, 0.36, 1],
    },
    showTitle: true,
    titleFont: {
        fontFamily: "Inter",
        variant: "Bold",
        fontSize: "28px",
        letterSpacing: "-0.02em",
        lineHeight: "1.1em",
    } as React.CSSProperties,
    titleColor: "#ffffff",
    titlePosition: {
        position: "bottomLeft" as TitleCorner,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 24,
        paddingBottom: 24,
    },
}
