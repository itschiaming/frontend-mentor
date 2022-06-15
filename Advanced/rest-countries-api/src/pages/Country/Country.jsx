import React, { useEffect, useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import classes from "./Country.module.css";
import { ThemeContext } from "../../App";

const Country = () => {
  const ctx = useContext(ThemeContext);
  const isDarkMode = ctx.isDarkMode;

  const darkStyle = {
    color: ctx.theme.dark.foreground,
    backgroundColor: ctx.theme.dark.elementsBackground,
  };

  const location = useLocation();
  const { country } = location.state;
  let languages = [],
    currencies = [];

  for (let language in country.languages) {
    languages.push(language);
  }

  for (let currency in country.currencies) {
    currencies.push(currency);
  }

  let key = languages[0];
  let nativeName = country.name.nativeName[key].official;

  return (
    <>
      <article className={classes.countryDetail}>
        <Link
          to="/"
          className={classes.goback}
          style={isDarkMode ? darkStyle : null}
        >
          Go back
        </Link>
        <div className={classes.detailWrapper}>
          <div className={classes.countryDetailImg}>
            <img src={country.flags[1]} alt={`${country.name.official} flag`} />
          </div>
          <div className={classes.countryDetailInfo}>
            <p className={classes.detailTitle}>{country.name.official}</p>
            <ul className={classes.countryDetailInfoList}>
              <div className={classes.firstPart}>
                <li>
                  <span className={classes.subtitle}>Native Name: </span>
                  {nativeName}
                </li>
                <li>
                  <span className={classes.subtitle}>Population: </span>
                  {country.population}
                </li>
                <li>
                  <span className={classes.subtitle}>Region: </span>
                  {country.region}
                </li>
                <li>
                  <span className={classes.subtitle}>Sub Region: </span>
                  {country.subregion}
                </li>
                <li className={classes.capital}>
                  <span className={classes.subtitle}>Capital: </span>
                  {country.capital}
                </li>
              </div>
              <div className={classes.secondPart}>
                <li>
                  <span className={classes.subtitle}>Top Level Domain: </span>
                  {country.tld[0]}
                </li>
                <li>
                  <span className={classes.subtitle}>Currencies: </span>
                  {currencies.map((currency, index) => {
                    return <span key={index}>{currency} </span>;
                  })}
                </li>
                <li>
                  <span className={classes.subtitle}>Languages: </span>
                  {languages.map((language, index) => {
                    return <span key={index}>{language} </span>;
                  })}
                </li>
              </div>
            </ul>
            <p className={classes.detailTitle}>Border Countries</p>
            <ul className={classes.borderCountries}>
              {country.borders?.map((border, index) => {
                return (
                  <li key={index} style={isDarkMode ? darkStyle : null}>
                    {border}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default Country;
