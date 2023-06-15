import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { accountService } from "../services/account.service";
import { URL_API } from "../services/key";
import axios from "axios";
import { FetchError } from "../type/fetchError";
import { RecipeStep } from "./RecipeStep";
import { ArticleRecipe } from "./Article";

export type Recipe = {
    id?: number,
    title?: string,
    category_id?: number,
    cooking_time?: number,
    preparation_time?: number,
    difficulty?: number,
    image?: string,
    recipe_steps?: RecipeStep[],
    recipe_articles?: ArticleRecipe[],
    warning_user?: string[],
    pivot?: PivotMeal,
    family_id?: number,
    created_at?: Date,
    updated_at?: Date
}

export type PivotMeal = {
    menu_id?: number,
    recipe_custom_id?: number,
    recipe_id?: number,
}

export const useManyRecipeByFamily = () =>
    useQuery({
        queryFn: () =>
        axios.get(URL_API + "getAllRecipes", { params: { 
            token: accountService.getToken(),
            family_id: accountService.getFamily(),
        }}), 
        queryKey: ["manyRecipe"],
    })

export const usePostRecipe = () => {
    return useMutation({
        mutationFn: () => {
            return axios
                .post(URL_API + "createRecipe", {
                    token : accountService.getToken(),
                    family_id : accountService.getFamily()
                })
        },
        onError(err: FetchError) {
            return err
        },
    })
}

export const useOneRecipeById = (recipe_id : number) =>
    useQuery({
        queryFn: () =>
        axios.get(URL_API + "getRecipeById", { params: { 
            token: accountService.getToken(),
            recipe_id
        }}), 
        queryKey: ["oneRecipe", recipe_id],
    })
    
export const useDeleteRecipe = () => {
    return useMutation({
        mutationFn: (recipe_id : number) => {
            return axios.post(URL_API + "deleteRecipeById", { 
            token: accountService.getToken(),
            family_id: parseInt(accountService.getFamily()),
            recipe_id
        })}, 
        onError(err: FetchError) {
            return err
        },
    })
}

export const usePutRecipe = () => {
    return useMutation({
        mutationFn: (recipe : Recipe) => {
            return axios
                .post(URL_API + "putRecipe", {
                    token : accountService.getToken(),
                    family_id: accountService.getFamily(),
                    recipe_id : recipe.id,
                    title : recipe.title,
                    category_id : recipe.category_id,
                    cooking_time : recipe.cooking_time,
                    preparation_time : recipe.preparation_time,
                    difficulty : recipe.difficulty,
                    // image : ,
                    recipe_steps : recipe.recipe_steps,
                    recipe_articles : recipe.recipe_articles,
                })
        },
        onError(err: FetchError) {
            return err
        },
    })
}