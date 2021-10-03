import { useQuery } from "@apollo/client";
import shuffle from "lodash/shuffle";
import { ActorQuestion, Question, Survey } from "../utils/commonTypes";

import { GET_MOVIES_AND_PEOPLE } from "../utils/gql/graphql";
import {
  GetMoviesAndPeople,
  GetMoviesAndPeople_movies_popular_edges as Movie,
  GetMoviesAndPeople_people_popular_edges as People,
} from "../utils/gql/__generated__/getMoviesAndPeople";

const generateYesQuestion = (
  movies: (Movie | null)[],
  nb: number
): Question[] => {
  const result: Question[] = [];
  let cp = 0;
  while (cp < nb) {
    const index = Math.floor(Math.random() * 100);
    const movie = movies[index];
    if (
      movie &&
      movie.node?.title &&
      movie.node.poster &&
      movie.node.credits.cast[0].value.name &&
      movie.node.credits.cast[0].value.profilePicture &&
      !result.find((m) => m.movie.title === movie.node?.title)
    ) {
      result.push({
        movie: {
          title: movie.node.title!,
          image: movie.node.poster,
        },
        actor: {
          name: movie.node.credits.cast[0].value.name!,
          image: movie.node.credits.cast[0].value.profilePicture,
        },
        answer: "YES",
      });
      cp = cp + 1;
    }
  }
  return result;
};

const generateNoQuestion = (
  movies: (Movie | null)[],
  people: (People | null)[],
  nb: number
): Question[] => {
  const result: Question[] = [];
  let cp = 0;
  while (cp < nb) {
    const index = Math.floor(Math.random() * 100);
    const movie = movies[index];
    if (
      movie &&
      movie.node?.id &&
      movie.node.title &&
      movie.node.poster &&
      movie.node.credits.cast[0].value.name &&
      movie.node.credits.cast[0].value.profilePicture &&
      !result.find((m) => m.movie.title === movie.node?.title)
    ) {
      result.push({
        movie: {
          title: movie.node.title!,
          image: movie.node.poster,
        },
        actor: getActor(movie, people),
        answer: "NO",
      });
      cp = cp + 1;
    }
  }
  return result;
};

const getActor = (movie: Movie, people: (People | null)[]): ActorQuestion => {
  const movieActorIds = movie.node?.credits.cast.map((c) => c.value.id);
  const person = shuffle(people).find(
    (person) =>
      movieActorIds &&
      person?.node?.id &&
      !movieActorIds.includes(person.node.id)
  );
  return {
    name: person?.node?.name!,
    image: person?.node?.profilePicture,
  };
};

const getNoQuestions = (
  movies: (Movie | null)[] | null | undefined,
  people: (People | null)[] | null | undefined
): Question[] | undefined => {
  if (!movies || !people) return undefined;
  return generateNoQuestion(shuffle(movies), people, 5);
};

const getYesQuestions = (
  movies: (Movie | null)[] | null | undefined
): Question[] | undefined => {
  if (!movies) return undefined;
  return generateYesQuestion(shuffle(movies), 5);
};

export const useSurvey = (): Survey => {
  const { data, loading, error } = useQuery<GetMoviesAndPeople>(
    GET_MOVIES_AND_PEOPLE,
    { errorPolicy: "ignore" }
  );
  const yesQuestions = getYesQuestions(data?.movies.popular.edges);
  const noQuestions = getNoQuestions(
    data?.movies.popular.edges,
    data?.people.popular.edges
  );
  if (yesQuestions && noQuestions) {
    return { data: shuffle([...yesQuestions, ...noQuestions]), loading, error };
  }
  return { data: [], loading, error };
};
