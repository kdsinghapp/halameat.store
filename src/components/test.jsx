export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    const ourServicesLinks = [
      { href: "/live", text: "Live Astrologers" },
      { href: "/chat-with-astrologer", text: "Chat With Astrologers" },
      { href: "/talk-to-astrologer", text: "Talk to Astrologer" },
      { href: "/free-kundli", text: "Free Kundli" },
      { href: "/numerology", text: "Numerology" },
      { href: "/kundali-matching", text: "Kundli Matching" },
      { href: "/today-panchang", text: "Daily Panchang" },
      { href: "/horoscope/todays-horoscope", text: "Daily Horoscopes" },
      { href: "/horoscope/monthly-horoscope", text: "Monthly Horoscopes" },
      { href: "/blog", text: "Blog" },
    ].sort((a, b) => a.text.localeCompare(b.text));
  
    const links = [
      { href: "/terms-and-conditions", text: "Terms & Conditions" },
      { href: "/privacy-policies", text: "Privacy Policy" },
      { href: "/refund-and-cancellation-policy", text: "Refund Policy" },
      { href: "/astrology-customer-support", text: "Contact Us" },
    ].sort((a, b) => a.text.localeCompare(b.text));
  
    const quickLinks = [
      { href: "/read-kundli-guide", text: "How to Read Kundli" },
      { href: "/astrology-houses-explained", text: "Astrology Houses" },
      { href: "/zodiac-compatibility", text: "Zodiac Compatibility" },
      { href: "/color-therapy", text: "Color Therapy" },
      { href: "/meditation", text: "Meditation" },
      { href: "/dasha", text: "Dasha" },
      { href: "/blog/western-astrology/", text: "Western Astrology" },
      { href: "/blog/yantras/", text: "Yantras" },
      { href: "/yoga", text: "Yoga" },
      { href: "/zodiac-signs", text: "Zodiac Sign" },
      { href: "/shubh-muhurat-2024", text: "Shubh Muhurat" },
      { href: "/shubh-muhurat-2025", text: "Shubh Muhurat 2025" },
      { href: "/love-calculator", text: "Love Calculator" },
      { href: "/chat-with-astrologer/tarot-reader", text: "Find Tarot Astrologer" },
    ].sort((a, b) => a.text.localeCompare(b.text));
  
    const horoscope2025Links = [
      { href: "/horoscope/yearly-horoscope/career-horoscope-2025", text: "Career Horoscope 2025" },
      { href: "/horoscope/yearly-horoscope/chinese-horoscope-2025", text: "Chinese Horoscope 2025" },
      { href: "/horoscope/yearly-horoscope/education-horoscope-2025", text: "Education Horoscope 2025" },
      { href: "/horoscope/yearly-horoscope/health-horoscope-2025", text: "Health Horoscope 2025" },
      { href: "/horoscope/yearly-horoscope/love-horoscope-2025", text: "Love Horoscope 2025" },
    ].sort((a, b) => a.text.localeCompare(b.text));
  
    return (
      <>
        <section className="px_footer_wrapper">
          <div className="container">
            <div className="py-3">
              <div className="header_link_color_footer_logo mt-3">
                <Image
                  src={footerLogo}
                  style={{ width: "18%" }}
                  alt="logo"
                  className="header_logo_footer"
                />
              </div>
              <div className="px_footer_widget mt-0">
                <h3 className="px_footer_heading">About Us</h3>
                <span className="footer_logo_description">
                  AstroPush is an online astrology website started with an aim to
                  help everyone push their worries out of their life through
                  predictions from a group of certified and well-known Astrologers
                  in their respective fields around the world.
                </span>
              </div>
            </div>
            <div className="px_footer_inner px_padderTop30 px_padderBottom50 pt-0">
              <div className="row w-100">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="px_footer_widget">
                    <h3 className="px_footer_heading">Our Services</h3>
                    <ul>
                      {ourServicesLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px_footer_widget">
                    <h3 className="px_footer_heading">Links</h3>
                    <ul>
                      {links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="px_footer_widget">
                    <h3 className="px_footer_heading">Astrologer</h3>
                    <ul>
                      <li>
                        <Link href="/astrologer-signup">Astrologer Registration</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="px_footer_widget">
                    <h3 className="px_footer_heading">Quick Links</h3>
                    <ul>
                      {quickLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
  
                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="px_footer_widget">
                    <h3 className="px_footer_heading">Horoscope 2025</h3>
                    <ul>
                      {horoscope2025Links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px_footer_widget px_footer_container">
                    <h3 className="px_footer_heading">Contact Us</h3>
                    <ul className="px_contact_list .f-box">
                      <li>
                        <Image src={map} alt="map" />
                        <p>
                          Dahia, 14th Floor, Mirashi Nagar, Kanjurmarg, Mumbai,
                          India - 400042
                        </p>
                      </li>
                      <li>
                        <Image src={address} alt="address" />
                        <p>
                          <a
                            style={{ padding: "0px !important" }}
                            className={styles.mail}
                            href="mailto:customer.support@astropush.com"
                          >
                            customer.support@astropush.com
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          id="scroll"
          className="main_go_top "
          onClick={scrollToTop}
          style={{ display: isVisible ? "block" : "none" }}
        >
          <div className="go_top item-bounce">
            <span>
              <i className="fa fa-chevron-up"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
  