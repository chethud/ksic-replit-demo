import Icon from './Icon';

export default function SiteFooter() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#top" aria-label="Back to top"><img src="/ksic/assets/ksic_logo.png" alt="KSIC Mysore Silk" /></a>
          <p>Mysore Silk.<br />A heritage woven into every generation.</p>
          <div className="social-links" aria-label="Social media">
            <a href="https://www.instagram.com/" aria-label="Instagram"><Icon name="instagram" /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><Icon name="facebook" /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube"><Icon name="youtube" /></a>
          </div>
        </div>
        <div className="footer-col"><h3>SHOP</h3><a href="#signature">Sarees</a><a href="#collections">Festive</a><a href="#occasion">Wedding</a><a href="#collections">Menswear</a><a href="#collections">Gifts</a></div>
        <div className="footer-col"><h3>ABOUT</h3><a href="#heritage">Our Heritage</a><a href="#craft">Our Craft</a><a href="#heritage">KSIC</a><a href="#footer">Stores</a></div>
        <div className="footer-col"><h3>HELP</h3><a href="#footer">Contact</a><a href="#footer">Shipping</a><a href="#footer">Returns</a><a href="#craft">Care Guide</a><a href="#footer">Track Order</a></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Karnataka Silk Industries Corporation Limited</span>
        <div className="legal-links"><a href="#footer">Privacy</a><a href="#footer">Terms</a><a href="#footer">Shipping</a></div>
      </div>
    </footer>
  );
}
