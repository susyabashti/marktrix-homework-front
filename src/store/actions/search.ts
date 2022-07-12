import axios from "axios";
import { capitalize } from "lodash";
import { SearchResult } from "src/types/search";
import { AppDispatch } from "src/types/store";
import { searchActions } from "../slices/search";

export const fetchNameResults =
  (name: string) => async (dispatch: AppDispatch) => {
    dispatch(searchActions.setLoading(true));
    try {
      const { data } = await axios.get<SearchResult>(
        `http://localhost:3001/name/${name}`
      );

      const capitalizedData: SearchResult = {
        gender: capitalize(data.gender),
        nationality: data.nationality,
      };

      dispatch(searchActions.setCurrentResult(capitalizedData));
      dispatch(
        searchActions.addSearch({ name: capitalize(name), ...capitalizedData })
      );
    } catch (error) {
      console.log("Couldn't fetch api.");
    } finally {
      dispatch(searchActions.setLoading(false));
    }
  };
