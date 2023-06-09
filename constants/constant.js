export const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
}

export const itemFadeUp = {
    hidden: { y: '40px', opacity: 0 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const itemUp = {
    hidden: { y: '100%', opacity: 0 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const itemFadeDown = {
    hidden: { y: '-40px', opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const itemFadeLeft = {
    hidden: { x: '-100%', opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeIn'
        }
    }
}

export const itemFadeRight = {
    hidden: { x: '100%', opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeIn'
        }
    }
}
export const itemBtn = {
    hidden: { x: '-34px', opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const itemFade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

// initial = {{ opacity: 0, y: '100%' }}
// whileInView = {{ opacity: 1, y: 0 }}
// transition = {{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}