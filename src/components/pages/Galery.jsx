import { useEffect, useState } from 'react';
import { fetchPhotos } from '../../state/actions/galleryActions/GaleryActions';
import { useDispatch, useSelector } from 'react-redux';

const Galery = () => {

  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const allPhotos = useSelector(state => state.gallery);
  const { photos, isLoading } = allPhotos;

  useEffect(() => {
    dispatch(fetchPhotos())
    setError(false);
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(fetchPhotos(search));
      setError(false);
      setSearch("");
    } else {
      setError(true);
    }
  }

  return (
    <div className='galery'>
      <h2>Image Gallery</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder='Search photos'
        />
        <button type='submit'>Search</button>
      </form>
      {error && <div className='error'>Your field is empty!</div>}
      <div className='image_container'>
        {isLoading ? <div className='loading'>Loading...</div> : photos.map(photo => (
          <img key={photo.id} src={photo.urls.thumb} alt={photo.location.name} />
        ))}
      </div>
    </div>
  )
};

export default Galery;
