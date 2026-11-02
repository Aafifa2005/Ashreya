const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} Aafifa Akhter. All rights reserved.</p>
      </div>
    </footer>
  );
}
