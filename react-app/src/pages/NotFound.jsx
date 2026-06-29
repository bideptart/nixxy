import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page container" style={{ textAlign: 'center' }}>
      <p className="eyebrow" style={{ justifyContent: 'center' }}>404</p>
      <h1 style={{ fontSize: 'clamp(40px,8vw,90px)' }}>Page not found.</h1>
      <p className="lead" style={{ margin: '20px auto 32px' }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn">Back home</Link>
    </div>
  );
}
