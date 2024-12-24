const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // Increased staggerChildren for slower animation
            ease: "easeInOut",
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5, // Increased duration for slower child animations
        },
    },
};

const img1Variants = {
    hidden: { opacity: 0, rotate: 13 },
    visible: { opacity: 1, rotate: 0 }
}

const img2Variants = {
    
}

export {
    containerVariants,
    childVariants,
    img1Variants,
    img2Variants
}