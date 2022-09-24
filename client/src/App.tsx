import { useEffect } from "react";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchPokemonList } from "./actions/pokemonActions.js";
import SignInUp from "./components/SignIn&Up/SignIn&Up";
import Nav from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import PokeList from "./components/PokeList/PokeList";
import Pokemon from "./components/Pokemon/Pokemon";
import RegisterAndLogin from "./components/Register/Register&Login";
import User from "./components/User/User";
import Footer from "./components/Footer/Footer";
import { IPokemon } from "pokeapi-typescript";
import { IRootState } from "./services/interfaces/rootState.js";
import "./App.css";

const App = (): JSX.Element => {
  const loading: boolean = useSelector(
    (state: IRootState) => state.monsters.isLoading
  );
  const monsterToShow: IPokemon = useSelector(
    (state: IRootState) => state.monsters.pokemonToDisplay
  );
  const dispatch: ThunkDispatch<IRootState, {}, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  return (
    <div className="App">
      <SignInUp />
      <Nav />
      <Routes>
        <Route path={"/auth"} element={<RegisterAndLogin />} />
        <Route path={"/pokeList/" + monsterToShow.name} element={<Pokemon />} />
        <Route path="/pokeList" element={<PokeList />} />
        <Route path="/loggedUser" element={<User />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
