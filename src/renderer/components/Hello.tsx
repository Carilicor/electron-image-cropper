import { Link } from 'react-router-dom';

export default function App() {
  return (
  <div>
      <div className="Hello">
       <h1>My Photo Cropper</h1>
      </div>
      <div className="Hello">
        <Link to="/photo">
          <button type="button">
            <span role="img" aria-label="camera">
              🎥 {''}
            </span>
            Crop Photo
          </button>
        </Link>
      </div>
    </div>
)
}
