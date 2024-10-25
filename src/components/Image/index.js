import React, {useMemo} from "react";

const Image = ({className, src, srcDark, srcSet, srcSetDark, alt}) => {
    const darkMode = useMemo(() => false, []);

    return (
        <img
            className={className}
            srcSet={darkMode.value ? srcSetDark : srcSet}
            src={darkMode.value ? srcDark : src}
            alt={alt}
        />
    );
};

export default Image;
