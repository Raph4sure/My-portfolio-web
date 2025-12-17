import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useState, useEffect } from "react";

const useResponsiveScale = () => {
    const queries = {
        mobile: "(max-width: 360px)",
        mobLand: "(max-width: 440px)",
        tablet: "(max-width: 768px)",
        tabLand: "(max-width: 1024px)",
        desktop: "(max-width: 1366px)",
        deskLand: "(max-width: 1920px)",
        deskWide: "(max-width: 2560px)",
    };
    const [scale, setScale] = useState(2.2);

    useEffect(() => {
        const updateScale = () => {
            if (window.matchMedia(queries.mobile).matches) return setScale(1.4);
            // if (window.matchMedia(queries.mobLand).matches)
            //     return setScale(1.0);
            // if (window.matchMedia(queries.tablet).matches) return setScale(1.2);
            if (window.matchMedia(queries.tabLand).matches)
                return setScale(1.1);
            // if (window.matchMedia(queries.desktop).matches)
            //     return setScale(1.8);
            // if (window.matchMedia(queries.deskLand).matches)
            //     return setScale(2.0);
            if (window.matchMedia(queries.deskWide).matches)
                return setScale(1.9);

            setScale(2.2);
        };
        updateScale();
        window.addEventListener("resize", updateScale);
        return () => {
            window.removeEventListener("resize", updateScale);
        };
    }, []);

    return scale;
};

const Shape = () => {
    const currentScale = useResponsiveScale();
    return (
 <>
            <Sphere args={[1, 100, 200]} scale={currentScale}>
                <MeshDistortMaterial
                    color="#DB8B9B"
                    attach="material"
                    distort={0.5}
                    speed={2}
                />
            </Sphere>
            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]} />
        </>
    );
};

export default Shape;
