import { useState, useEffect } from "react"
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Nav from "../Nav/Nav";
import ResultCard from "../ResultCard/ResultCard";
import ResultsPage from "../ResultsPage/ResultsPage";
import Search from "../Search/Search";
import SingleResultPage from "../SingleResultPage/SingleResultPage";

import './App.css';

const App = () => {
  const [ restaurants, setRestaurants ] = useState([])

  return (
    <main>
      Hello!
    </main>
  )
}

export default App;
