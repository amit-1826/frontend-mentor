export default function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page-title">Your Success = Our Mission</h1>
      <p className="home-page-description">
        Frontend Mentor is a platform that helps you improve your frontend
        skills by building real projects. Join our community and start coding
        today!
      </p>

      <div className="mission-details">
        <div className="mission-detail-item">
          <img src="mission2.jpg" alt="Real Projects" />
          <div>
            <h2 className="detail-title">Real Projects</h2>
            <p className="detail-description">
              Build real projects that solve real problems. Our projects are
              designed to help you improve your skills and build a portfolio
              that stands out.
            </p>
          </div>
        </div>

        <div className="mission-detail-item">
          <div>
            <h2 className="detail-title">Community Support</h2>
            <p className="detail-description">
              Join our community of developers and get support from other
              members. Share your work, ask for feedback, and learn from others.
            </p>
          </div>
          <img src="mission1.jpg" alt="Community Support" />
        </div>

        <div className="mission-detail-item">
          <img src="mission3.jpg" alt="Career Growth" />
          <div>
            <h2 className="detail-title">Career Growth</h2>
            <p className="detail-description">
              Our platform is designed to help you grow your career. Build a
              portfolio that impresses employers and land your dream job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
