import Card from "../../Components/Card/Card";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <>
            <motion.section id="content-body"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                exit={{ opacity: 0 }}
            >
                <div className="container">
                    <div className="row content-wrapper ">
                        <h3><span style={{ color: "#4C9196" }}>Ser</span>vices</h3>
                        <div className="col-lg-4 col-md-6">
                            <Card
                                icon={<i className="fa-solid fa-code"></i>}
                                title='Web Design/Development'
                                price='$100'
                                time='/ One time payment'
                                description='In this package you will get any type of website given below.'
                                line_1='Personal Portfolio Websites'
                                line_2='Business/Tech Websites'
                                line_3='eCommerce Stores'
                                line_4='Multi Vendor eCommerce Stores'
                                line_5='Blogs Websites'
                                line_6='Education Websites'
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 ">
                            <Card
                                icon={<i className="fa-solid fa-gauge"></i>}
                                title='Speed Optimization'
                                price='$50'
                                time='/ One time payment'
                                description='Will improve website speed and Core Web Vitals will be fixed too.'
                                line_1='Core Web Vitals Fixed'
                                line_2='Css & JS files Minification'
                                line_3='Images Optimization'
                                line_4='Images to WEBP'
                                line_5='Lazy Load'
                                line_6='Eleminate Rendor-blocking'
                            />
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <Card
                                icon={<i className="fa-solid fa-shield-halved"></i>}
                                title='Website Security'
                                price='$30'
                                time='/ One time payment'
                                description='Will add security and remove malwares from your websites.'
                                line_1='Malwares Removal'
                                line_2='Login URL Change'
                                line_3='Database Prefix Change'
                                line_4='More Security Layers'
                                line_5='Brute Force Security'
                                line_6='Captcha on Forms'
                            />
                        </div>

                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Services;
