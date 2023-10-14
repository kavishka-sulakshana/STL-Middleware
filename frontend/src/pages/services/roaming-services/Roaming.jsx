import Banner from "../../../components/Common/Banner";
import RoamingPackages from "../../../components/Roaming/RoamingPackages";
import CountryDetails from "../../../components/Roaming/CountryDetails";
import Footer from "../../../components/Footer/Footer";

const RoamingBanner = [
    {
        heading: "Value Added Services",
        text: "Subcription based values adding customer service network",
        image: "IMG-PATH",
    },
];

const Roaming = () => {
    return (
        <div>
            <Banner data={RoamingBanner} />
            <RoamingPackages />
            <CountryDetails />
            <Footer />
        </div>
    );
};

export default Roaming;