import { Link } from "react-router-dom";
// import { AiOutlineStar } from 'react-icons/ai';
import "./ResultCard.css";

const ResultCard = ({title, photo, rating, id, alias, user, addFavorite, deleteFavorite, business, displayType}) => { 
  let inUserFavs = false;
  
  if (user) {
    inUserFavs = user.favorites.reduce((acc, favorite) => {
      if (favorite.title === title) {
        acc = true;
      }
      return acc;
    }, false)
  }
  
  const handleDelete = () => {
    const currentFavorite = user.favorites.find(favorite => favorite.title === title)
    deleteFavorite(parseInt(currentFavorite.id), user);
  }

  let linkText;

  if (displayType === "featured") {
    linkText = `/featured/${alias}`
  } else if (displayType === "result") {
    linkText = `/results/${alias}`
  } else if (displayType === "favorite") {
    linkText = `/favorites/${id}`
  }

  const buttonTxt = inUserFavs ? 'delete from favorites' : 'add to favorites'

  return (
    <article className="business-card">
      <Link to={linkText}><img className="business-card-image" src={photo} alt={title}></img></Link>
      <p>{title}</p>
      <p>{rating}</p>
      {user && <button onClick={inUserFavs ? handleDelete : () => addFavorite(business, user)}>{buttonTxt}</button>}
    </article>
  )
}

export default ResultCard