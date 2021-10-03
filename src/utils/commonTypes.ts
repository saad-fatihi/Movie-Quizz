import { ApolloError } from "@apollo/client";

export type ActorQuestion = {
  name: string;
  image: string;
};

export type MovieQuestion = {
  title: string;
  image: string;
};

export type Question = {
  movie: MovieQuestion;
  actor: ActorQuestion;
  answer: "YES" | "NO";
};

export type Survey = {
  data: Question[];
  loading: boolean;
  error: ApolloError | undefined;
};
