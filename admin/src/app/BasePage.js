import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { DashboardPage } from "./pages/DashboardPage";
import { CategoryPage } from "./pages/CategoryPage";
import { ManagePage } from "./pages/ManagePage";
import { InquiryPage } from "./pages/InquiryPage";
import { ArtistPage } from "./pages/ArtistPage";
import { ArtworkPage } from "./pages/ArtworkPage";
import { ReviewsPage } from "./pages/ReviewsPage";

export default function BasePage() {

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute exact path="/dashboard" component={DashboardPage} />
        <ContentRoute exact path="/category" component={CategoryPage} />
        <ContentRoute exact path="/manage" component={ManagePage} />
        <ContentRoute exact path="/inquiry" component={InquiryPage} />
        <ContentRoute exact path="/artist" component={ArtistPage} />
        <ContentRoute exact path="/artworks" component={ArtworkPage} />
        <ContentRoute exact path="/reviews" component={ReviewsPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
