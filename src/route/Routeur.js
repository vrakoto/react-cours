import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import '../css/style.css'

import NotificationLoader from "../components/loader/loading";
import LayoutNav from "../layout/navbar/layoutNav";

import NotFound from "./NotFound";

const Home = lazy(() => import("../pages/home"));
const Contact = lazy(() => import("../pages/contact"));
const CV = lazy(() => import("../pages/cv"));
const Projet = lazy(() => import("../pages/projet"));

function Routeur() {
  return (
    <Suspense fallback={<NotificationLoader />}>
      <LayoutNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projet />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutNav>
    </Suspense>
  );
}

export default Routeur;
