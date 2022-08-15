import React, { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Creation from "./components/views/Article/CreationArticle";
import Update from "./components/views/Article/UpdateArticle";
import Article from "./components/views/Article/Article";
import Articles from "./components/views/Article/LesArticles";
import Navbar from "./components/views/Navbar/Navbar";
import Deconnexion from "./components/views/User/Deconnexion";
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
    connectionURI:
      "https://4e4a9ac11c1011ed8042dbc33e0dcfd5-us-east-1.aws.supertokens.io:3567",
    apiKey: "aFPvuC9htRJ=o7t8rvS2KSpMat3n13",
  },
  appInfo: {
    appName: "fbs",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
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
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App text-white bg-dark" id={theme}>
        <Navbar></Navbar>
        <SuperTokensWrapper>
          <Routes>
            <Route path="/article/add" element={<Creation />} />
            <Route path="/article/:id/" element={<Article />} />
            <Route path="/article/edit/:id/" element={<Update />} />
            <Route path="/articles/fbs" element={<Articles />} />
            <Route path="/articles/opening" element={<Articles />} />
            <Route path="/articles/rewiew" element={<Articles />} />
            <Route path="/articles" element={<Articles />} />
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
    </ThemeContext.Provider>
  );
}

export default App;
