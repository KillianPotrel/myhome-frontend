import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../_utils/Error";
import Home from "./Home";
import Layout from "./Layout";
import FamilyChoice from "./Family/FamilyChoice";
import FamilyGuard from "../_utils/FamilyGuard";
import FamilyMember from "./FamilyMember";
import Member from "./Member";
import RecipeBook from "./RecipeBook";
import RecipeItem from "./RecipeItem";
import Meals from "./Meals";
import ShoppingLists from "./ShoppingLists";
import ShoppingItem from "./ShoppingItem";
import RecipeItemEdit from "./RecipeitemEdit";
import HouseworkList from "./HouseworkList";
import Planning from "./Planning";

const PublicRouter = () : JSX.Element => {
  return (
    <Routes>
      <Route path="/choice" element={<FamilyChoice />} />
      <Route element={<Layout />}>
          <Route index element={<FamilyGuard><Home /></FamilyGuard>} />
          <Route path="/dashboard" element={<FamilyGuard><Home /></FamilyGuard>} />
          <Route path="/members" element={<FamilyGuard><FamilyMember /></FamilyGuard>} />
          <Route path="/member/:id" element={<FamilyGuard><Member /></FamilyGuard>} />
          <Route path="/recipes" element={<FamilyGuard><RecipeBook /></FamilyGuard>} />
          <Route path="/recipe/:id" element={<FamilyGuard><RecipeItem /></FamilyGuard>} />
          <Route path="/recipe/edit/:id" element={<FamilyGuard><RecipeItemEdit/></FamilyGuard>} />
          <Route path="/meals" element={<FamilyGuard><Meals /></FamilyGuard>} />
          <Route path="/shoppings" element={<FamilyGuard><ShoppingLists /></FamilyGuard>} />
          <Route path="/shopping/:id" element={<FamilyGuard><ShoppingItem /></FamilyGuard>} />
          <Route path="/housework" element={<FamilyGuard><HouseworkList /></FamilyGuard>} />
          <Route path="/planning" element={<FamilyGuard><Planning /></FamilyGuard>} />
          <Route path="/*" element={<Error />} />
      </Route>
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default PublicRouter;
