import {useEffect,useState} from "react";

/**
 *
 * @param banner
 * @returns {boolean}
 */
export const useBannerLoading = (banner)=>{
    /**
     * this is managed the banner props state of banner
     */
    const [bannerLoading, setBannerLoading] = useState(false);

    /**
     * this run when banner state is changed
     */
    useEffect(() => {
        if(banner)
        {
            /**
             * it will check banner url is provided if provided it
             * will provide new image object and banner loading when onload image
             * image.src = banner; start the image loading process
             */
            const image = new Image();
            image.onload = ()=>setBannerLoading(true);
            image.src = banner;
        }
        return ()=>{
            setBannerLoading(false);
        }
    }, [banner]);

    return bannerLoading;
}

/**
 * 2. useIsModeratorUpdated Hook
 * Purpose:
 * This hook manages a state indicating whether the isModerator value has been updated from its initial state.
 * @param isModerator
 * @returns {boolean}
 *
 * see the use case in the bottom
 */
export const useIsModeratorUpdated = (isModerator) => {
    const [isModeratorUpdated, setIsModeratorUpdated] = useState(false);

    useEffect(() => {
        if (isModerator !== null) {
            setIsModeratorUpdated(true);
        }
    }, [isModerator]);

    return isModeratorUpdated;
};
/**
 * Documentation
 *
 * Purpose:
 * This hook manages the loading state of a banner image. It is used to determine when a banner image has finished loading.
 *
 *
 * calling side
 *
 * const myComponent = ({baseUrl}) =>
 * {
 *    const bannerloading = useBannerLoading(baseUrl)
 *
 *    return (
 *          <div>
 *              {bannerloading ? <p>Banner Loaded</p> :banner loading...}
 *              <image src={bannerUrl} alt="Banner">
 *
 *
 *    )
 *
 * }
 *
 * export const useIsModeratorUpdated = (isModerator) => {
 *     const [isModeratorUpdated, setIsModeratorUpdated] = useState(false);
 *
 *     useEffect(() => {
 *         if (isModerator !== null) {
 *             setIsModeratorUpdated(true);
 *         }
 *     }, [isModerator]);
 *
 *     return isModeratorUpdated;
 * };
 */