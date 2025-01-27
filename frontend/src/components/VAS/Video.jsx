import Category from "./Category";

const VideoData = {
    category: {
        service: "Videos",
        description: "Get the live updates to your phone with Sri Tel Enterntainment services.",
    },
    options: [
        {
            name: "Roopa",
            logo: "../../assets/logos/slc-logo.png",
            desc: "Roopa is a video alert serivce, auto renewed daily. Terms and Conditions apply.",
            daily: "Rs. 2 + tax per day",
            monthly: "Rs. 30 + tax per monthly",
            dact: "SMS ACT ROOPA1 to 1313",
            mact: "SMS ACT ROOPA to 1313",
            ddeact: "SMS DEACT ROOPA1 to 1313",
            mdeact: "SMS DEACT ROOPA to 1313",
        },
    ],
};

const Video = () => {
    return (
        <>
            <Category data={VideoData} />
        </>
    );
};

export default Video;