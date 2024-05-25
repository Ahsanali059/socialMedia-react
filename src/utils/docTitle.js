/**
 *
 * @type {{"/following": string, "/home": string, "/edit-profile": string, "/devices-locations": string, "/signin": string, "/my-communities": string, "/saved": string, "/communities": string, "/": string, "/verify-email": string, "/email-verified": string, "/signup": string, "/login-verified": string, "/block-device": string, "/profile": string}}
 */
const titleMap = {
    "/": "News Feed",
    "/home": "News Feed",
    "/signin": "Sign In",
    "/signup": "Sign Up",
    "/profile": "User Profile",
    "/saved": "Saved Posts",
    "/edit-profile": "Edit Profile",
    "/communities": "Communities",
    "/my-communities": "My Communities",
    "/following": "Following",
    "/devices-locations": "Devices & Locations",
    "/verify-email": "Verify Email",
    "/email-verified": "Email Verified",
    "/block-device": "Block Device",
    "/login-verified": "Login Verified",
};
/**
 * Returns the title of a page based on its route path.
 * @param {string} path - The path of the page route.
 * @returns {string} The title of the page with the site name appended.
 */
export const getTitleFromRoute = (path) => {
    if (titleMap[path]) {
        return `${titleMap[path]} | SocialEcho`;
    }

    const userProfileRegex = /^\/user\/(\w+)$/;
    const postRegex = /^\/(my\/)?post\/(\w+)$/;
    const communityRegex =
        /^\/community\/(\w+)(\/report|\/reported-post|\/moderator)?$/;

    if (userProfileRegex.test(path)) {
        return "User Profile | SocialEcho";
    } else if (postRegex.test(path)) {
        return "Post | SocialEcho";
    } else if (communityRegex.test(path)) {
        return "Community | SocialEcho";
    }
    return "SocialEcho";
};
