import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../App";
import classes from "./Home.module.css";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

const Home = () => {
  let content;
  const [countries, setCountries] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const ctx = useContext(ThemeContext);
  const isDarkMode = ctx.isDarkMode;

  const darkStyle = {
    color: ctx.theme.dark.foreground,
    backgroundColor: ctx.theme.dark.elementsBackground,
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
      });
  }, []);

  const filterHandler = (checked) => {
    const result = countries
      .filter((country) => {
        return country.region.toLowerCase() === checked;
      })
      .map((country) => {
        let id = country.name.official.replaceAll(" ", "-");
        return (
          <Link to={`${id}`} key={id} state={{ country: country }}>
            <li className={classes.country}>
              <div className={classes.countryImg}>
                <img
                  src={country.flags[1]}
                  alt={`${country.name.official} flag`}
                />
              </div>
              <div
                className={classes.countryInfo}
                style={isDarkMode ? darkStyle : null}
              >
                <h2>{country.name.official}</h2>
                <ul className={classes.countryInfoList}>
                  <li>Population: {country.population}</li>
                  <li>Region: {country.region}</li>
                  <li>capital: {country.capital}</li>
                </ul>
              </div>
            </li>
          </Link>
        );
      });
    setFilterItems(result);
  };

  const searchHandler = (searched) => {
    const result = countries
      .filter((country) => {
        return country.name.official.toLowerCase().includes(searched);
      })
      .map((country) => {
        let id = country.name.official.replaceAll(" ", "-");
        return (
          <Link to={`${id}`} key={id} state={{ country: country }}>
            <li className={classes.country}>
              <div className={classes.countryImg}>
                <img
                  src={country.flags[1]}
                  alt={`${country.name.official} flag`}
                />
              </div>
              <div
                className={classes.countryInfo}
                style={isDarkMode ? darkStyle : null}
              >
                <h2>{country.name.official}</h2>
                <ul className={classes.countryInfoList}>
                  <li>Population: {country.population}</li>
                  <li>Region: {country.region}</li>
                  <li>capital: {country.capital}</li>
                </ul>
              </div>
            </li>
          </Link>
        );
      });
    setFilterItems(result);
  };

  content = countries.map((country) => {
    let id = country.name.official.replaceAll(" ", "-");
    return (
      <Link to={`${id}`} key={id} state={{ country: country }}>
        <li className={classes.country}>
          <div className={classes.countryImg}>
            <img src={country.flags[1]} alt={`${country.name.official} flag`} />
          </div>
          <div
            className={classes.countryInfo}
            style={isDarkMode ? darkStyle : null}
          >
            <h2>{country.name.official}</h2>
            <ul className={classes.countryInfoList}>
              <li>Population: {country.population}</li>
              <li>Region: {country.region}</li>
              <li>capital: {country.capital}</li>
            </ul>
          </div>
        </li>
      </Link>
    );
  });

  return (
    <div className={classes.home}>
      <Filter filterHandler={filterHandler} searchHandler={searchHandler} />
      <main className={classes.main}>
        <ul className={classes.countriesList}>
          {isLoading && <p className={classes.loading}>Loading...</p>}
          {filterItems.length > 0 ? filterItems : content}
        </ul>
      </main>
    </div>
  );
};

export default Home;
