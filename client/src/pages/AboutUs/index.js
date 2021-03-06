import Banner from "./Banner";
import Bubble from "./Bubble";
import AboutCodeHunter from "./AboutCodeHunter";

import Styled from "./styled";

import donna from "../../assets/aboutus/donna.png";
import pariya from "../../assets/aboutus/pariya.png";
import josh from "../../assets/aboutus/josh.png";
import ethan from "../../assets/aboutus/ethan.png";

// Credits: Unknown from https://64.media.tumblr.com/ac62b768ecf53f200512d344b6420b17/28c84b95f0079bd6-83/s1920x1920/1a3e69dcc5021fdbc5439e25b5035f5a5da42f7f.jpg
import frog from "../../assets/aboutus/frog.jpg";
// Credits: Kaja Reichardt@kajareichardtphotos : https://unsplash.com/photos/HoV6CTICUHc
import goose from "../../assets/aboutus/goose.jpg";
// Credits: Alexander Andrews : https://unsplash.com/photos/mEdKuPYJe1I
import fox from "../../assets/aboutus/fox.jpg";
// Credits: Kevin Woblick : https://unsplash.com/photos/_54TF64ad9M
import tiger from "../../assets/aboutus/tiger.jpg";

const AboutUs = () => {
    const donnaAvatar = donna;
    const pariyaAvatar = pariya;
    const joshAvatar = josh;
    const ethanAvatar = ethan;

    const donnaIntro = "Never give up, never surrender!";
    const pariyaIntro = "Why fit in, when you were born to stand out?";
    const joshIntro = "Enough expository banter! Now we fight like men! And ladies! And ladies who dress like men!";
    const ethanIntro = "Thought provoking question: 'Do we want to strive for mastery or proficiency?'";

    const donnaCareer = "Full-stack Web/Mobile Developer";
    const pariyaCareer = "Software Developer";
    const joshCareer = "Game Developer";
    const ethanCareer = "Combining software with automative/finance/medicine";

    const donnaOutsideOfWork = "I like going on long hikes with a rewarding view";
    const pariyaOutsideOfWork = "I like picnicing with friends";
    const joshOutsideOfWork = "I like city night runs";
    const ethanOutsideOfWork = "I like to camp near places with nice hiking trails and swimmable bodies of water.";

    return (
        <Styled>

            <div className="aboutus">

                <Banner className="banner"></Banner>

                <AboutCodeHunter className="about-code-hunter"></AboutCodeHunter>

                <div className="bubble-container">
                    <Bubble className="name donna" 
                        name="Donna" 
                        avatar={donnaAvatar}
                        animal={frog}
                        intro={donnaIntro}
                        career={donnaCareer}
                        outsideOfWork={donnaOutsideOfWork} 
                        githubLink="https://github.com/dm-gamboa"></Bubble>
                    <Bubble className="name pariya" 
                        name="Pariya" 
                        avatar={pariyaAvatar}
                        animal={goose}
                        intro={pariyaIntro}
                        career={pariyaCareer}
                        outsideOfWork={pariyaOutsideOfWork}  
                        githubLink="https://github.com/PariyaKasaeian" ></Bubble>
                    <Bubble className="name josh" 
                        name="Josh" 
                        avatar={joshAvatar}
                        animal={fox}
                        intro={joshIntro}
                        career={joshCareer}
                        outsideOfWork={joshOutsideOfWork}  
                        githubLink="https://github.com/joshuakrauchi"
                        linkedinLink="https://www.linkedin.com/in/joshua-krauchi/" ></Bubble>
                    <Bubble className="name ethan" 
                        name="Ethan" 
                        avatar={ethanAvatar}
                        animal={tiger}
                        intro={ethanIntro}
                        career={ethanCareer}
                        outsideOfWork={ethanOutsideOfWork}  
                        githubLink="https://github.com/ethanlee123"
                        linkedinLink="https://www.linkedin.com/in/ethan-lee-17470718b/" ></Bubble>    
                </div>
            </div>
        </Styled>
    );
};

export default AboutUs;