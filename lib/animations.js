export const slideRight = {
    name: "Slide Right",
    variants: {
        initial: {
            position: 'relative',
            right: "-100%",
            scale: 0.7,
            filter: 'brightness(90%)',
        },
        animate: {
            right: 0,
            scale: 1,
            filter: 'brightness(100%)'
        },
        exit: {
            right: ['0%', '-15%', "110%"],
            scale: 0.7,
            filter: 'brightness(70%)'
        }
    },
    transition: {
        type: "spring", stiffness: 75
    }
}