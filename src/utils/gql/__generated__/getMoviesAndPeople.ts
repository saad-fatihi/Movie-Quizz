/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMoviesAndPeople
// ====================================================

export interface GetMoviesAndPeople_movies_popular_edges_node_credits_cast_value {
  __typename: "Person";
  /**
   * The id of the object
   */
  id: string;
  name: string;
  profilePicture: any | null;
}

export interface GetMoviesAndPeople_movies_popular_edges_node_credits_cast {
  __typename: "CastCreditWithPerson";
  value: GetMoviesAndPeople_movies_popular_edges_node_credits_cast_value;
}

export interface GetMoviesAndPeople_movies_popular_edges_node_credits {
  __typename: "CreditsWithPerson" | "EpisodeCreditsWithPerson";
  cast: GetMoviesAndPeople_movies_popular_edges_node_credits_cast[];
}

export interface GetMoviesAndPeople_movies_popular_edges_node {
  __typename: "Movie";
  /**
   * The id of the object
   */
  id: string;
  title: string;
  poster: any | null;
  credits: GetMoviesAndPeople_movies_popular_edges_node_credits;
}

export interface GetMoviesAndPeople_movies_popular_edges {
  __typename: "MovieEdge";
  node: GetMoviesAndPeople_movies_popular_edges_node | null;
}

export interface GetMoviesAndPeople_movies_popular {
  __typename: "MovieConnection";
  edges: (GetMoviesAndPeople_movies_popular_edges | null)[] | null;
}

export interface GetMoviesAndPeople_movies {
  __typename: "Movies";
  popular: GetMoviesAndPeople_movies_popular;
}

export interface GetMoviesAndPeople_people_popular_edges_node_credits_movies_cast_value {
  __typename: "Movie";
  /**
   * The id of the object
   */
  id: string;
  title: string;
  poster: any | null;
}

export interface GetMoviesAndPeople_people_popular_edges_node_credits_movies_cast {
  __typename: "CastCreditWithMovie";
  value: GetMoviesAndPeople_people_popular_edges_node_credits_movies_cast_value;
}

export interface GetMoviesAndPeople_people_popular_edges_node_credits_movies {
  __typename: "CreditsWithMovie";
  cast: GetMoviesAndPeople_people_popular_edges_node_credits_movies_cast[];
}

export interface GetMoviesAndPeople_people_popular_edges_node_credits {
  __typename: "PersonCredits";
  movies: GetMoviesAndPeople_people_popular_edges_node_credits_movies;
}

export interface GetMoviesAndPeople_people_popular_edges_node {
  __typename: "Person";
  /**
   * The id of the object
   */
  id: string;
  name: string;
  profilePicture: any | null;
  credits: GetMoviesAndPeople_people_popular_edges_node_credits;
}

export interface GetMoviesAndPeople_people_popular_edges {
  __typename: "PersonEdge";
  node: GetMoviesAndPeople_people_popular_edges_node | null;
}

export interface GetMoviesAndPeople_people_popular {
  __typename: "PersonConnection";
  edges: (GetMoviesAndPeople_people_popular_edges | null)[] | null;
}

export interface GetMoviesAndPeople_people {
  __typename: "People";
  popular: GetMoviesAndPeople_people_popular;
}

export interface GetMoviesAndPeople {
  movies: GetMoviesAndPeople_movies;
  people: GetMoviesAndPeople_people;
}
