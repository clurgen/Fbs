import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Creation from "./components/views/Article/CreationArticle";
import Update from "./components/views/Article/UpdateArticle";
import Article from "./components/views/Article/Article";
import Articles from "./components/views/Article/LesArticles";
import CreationFatman from "./components/views/Fatman/CreationFatman";
import UpdateFatman from "./components/views/Fatman/UpdateFatman";
import Fatman from "./components/views/Fatman/Fatman";
import LesFatmen from "./components/views/Fatman/LesFatmen";
import Navbar from "./components/views/Navbar/Navbar";
import Deconnexion from "./components/views/User/Deconnexion";
import Home from "./components/views/Home/Home.js";
import "./components/views/Home/Home.css";
// import Inscription from "./components/views/User/Inscription";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyEmailPassword, {
  ThirdPartyEmailPasswordAuth,
  Google,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";
import gif from "./images/chibiLoader.gif";

SuperTokens.init({
  languageTranslations: {
    translations: {
      fr: {
        EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: "Connexion",
        EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK: "S'inscrire",
        EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START: "Pas encore inscrit ?",
        EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: "",
        THIRD_PARTY_PROVIDER_DEFAULT_BTN_START: "Connexion avec ",
        THIRD_PARTY_PROVIDER_DEFAULT_BTN_END: "",
        EMAIL_PASSWORD_EMAIL_LABEL: "Email",
        EMAIL_PASSWORD_EMAIL_PLACEHOLDER: "truc@email.fr",
        EMAIL_PASSWORD_PASSWORD_LABEL: "Mot de passe",
        EMAIL_PASSWORD_PASSWORD_PLACEHOLDER: "LeMotDePasse1324!",
        EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN: "Se connecter",
        EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK: "Mot de passe oublié ?",
        EMAIL_PASSWORD_SIGN_IN_WRONG_CREDENTIALS_ERROR:
          "Mauvais identifiant ou mot de passe",
        ERROR_EMAIL_INVALID: "Email invalide",
        ERROR_NON_OPTIONAL: "Champ obligatoire",

        EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START:
          "Vous avez déjà un compte ?",
        EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: "Se connecter",
        EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END: "",
        EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: "S'inscrire",
        THIRD_PARTY_EMAIL_PASSWORD_SIGN_IN_AND_UP_DIVIDER_OR: "ou",
        EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN: "S'inscrire",

        BRANDING_POWERED_BY_START: "Le monde du gros noir ",
        BRANDING_POWERED_BY_END: "",
      },
    },
    defaultLanguage: "fr",
  },
  supertokens: {
    connectionURI: process.env.connectionURI,
    apiKey: process.env.apiKey,
  },
  appInfo: {
    appName: "fbs",
    apiDomain: process.env.REACT_APP_HOST_API,
    websiteDomain: process.env.REACT_APP_HOST,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Google.init()],
      },
    }),
    Session.init(),
  ],
});

SuperTokens.loadTranslation({
  fr: {
    BRANDING_POWERED_BY_END: " :)",
  },
});
SuperTokens.changeLanguage("fr");

export const ThemeContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App text-white bg-dark" id={theme}>
        {loading ? (
          <div className="content wrapperHome">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <img className="loader loaderImg" src={gif} alt="loader" />
          </div>
        ) : (
          <div>
            {" "}
            <Navbar></Navbar>
            <SuperTokensWrapper>
              <Routes>
                <Route path="/" className="home" element={<Home />} />
                <Route path="/video/add" element={<Creation />} />
                <Route path="/video/:id/" element={<Article />} />
                <Route path="/video/edit/:id/" element={<Update />} />
                <Route path="/videos/fbs" element={<Articles />} />
                <Route path="/videos/opening" element={<Articles />} />
                <Route path="/videos/rewiew" element={<Articles />} />
                <Route path="/videos" element={<Articles />} />

                <Route path="/fatman/add" element={<CreationFatman />} />
                <Route path="/fatman/:id/" element={<Fatman />} />
                <Route path="/fatman/edit/:id/" element={<UpdateFatman />} />
                <Route path="/fatmen" element={<LesFatmen />} />
                {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
                <Route
                  path="/deconnexion"
                  element={
                    <ThirdPartyEmailPasswordAuth>
                      <Deconnexion />
                    </ThirdPartyEmailPasswordAuth>
                  }
                />
                {/* <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} /> */}
              </Routes>
            </SuperTokensWrapper>
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
