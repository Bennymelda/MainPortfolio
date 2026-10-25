import FooterSection from "../Footer";
import BeforeYouSendSection from "./BeforeYousend";
import FreeWebsiteReviewSection from "./hero";
import SoundFamiliarSection from "./QA";
import RequestReviewSection from "./RequestReview";
import { ReviewCoversSection } from "./Review";

const Discover = () => {
    return ( <>
        <FreeWebsiteReviewSection />
            <SoundFamiliarSection />
            <ReviewCoversSection />
            <BeforeYouSendSection />
            <RequestReviewSection />
            <FooterSection />
    </> );
}
 
export default Discover;