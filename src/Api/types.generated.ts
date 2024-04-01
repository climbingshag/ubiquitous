export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type List = {
  __typename?: 'List';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tasks: Array<Task>;
  user: User;
};

export type ListsQueryParams = {
  usrId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  list?: Maybe<List>;
  lists: Array<List>;
  me?: Maybe<User>;
  task?: Maybe<Task>;
  user?: Maybe<User>;
};


export type QueryListArgs = {
  id: Scalars['ID']['input'];
};


export type QueryListsArgs = {
  params?: InputMaybe<ListsQueryParams>;
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Task = {
  __typename?: 'Task';
  completed: Scalars['Boolean']['output'];
  completedAt?: Maybe<Scalars['Timestamp']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  list: List;
  name: Scalars['String']['output'];
  user: User;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Timestamp']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lists: Array<List>;
  phone?: Maybe<Scalars['String']['output']>;
};
