import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "timesheets" */
  delete_timesheets?: Maybe<Timesheets_Mutation_Response>;
  /** delete single row from the table: "timesheets" */
  delete_timesheets_by_pk?: Maybe<Timesheets>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "timesheets" */
  insert_timesheets?: Maybe<Timesheets_Mutation_Response>;
  /** insert a single row into the table: "timesheets" */
  insert_timesheets_one?: Maybe<Timesheets>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "timesheets" */
  update_timesheets?: Maybe<Timesheets_Mutation_Response>;
  /** update single row of the table: "timesheets" */
  update_timesheets_by_pk?: Maybe<Timesheets>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_TimesheetsArgs = {
  where: Timesheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Timesheets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_TimesheetsArgs = {
  objects: Array<Timesheets_Insert_Input>;
  on_conflict?: Maybe<Timesheets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Timesheets_OneArgs = {
  object: Timesheets_Insert_Input;
  on_conflict?: Maybe<Timesheets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TimesheetsArgs = {
  _set?: Maybe<Timesheets_Set_Input>;
  where: Timesheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Timesheets_By_PkArgs = {
  _set?: Maybe<Timesheets_Set_Input>;
  pk_columns: Timesheets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "timesheets" */
  timesheets: Array<Timesheets>;
  /** fetch aggregated fields from the table: "timesheets" */
  timesheets_aggregate: Timesheets_Aggregate;
  /** fetch data from the table: "timesheets" using primary key columns */
  timesheets_by_pk?: Maybe<Timesheets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootTimesheetsArgs = {
  distinct_on?: Maybe<Array<Timesheets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timesheets_Order_By>>;
  where?: Maybe<Timesheets_Bool_Exp>;
};


/** query root */
export type Query_RootTimesheets_AggregateArgs = {
  distinct_on?: Maybe<Array<Timesheets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timesheets_Order_By>>;
  where?: Maybe<Timesheets_Bool_Exp>;
};


/** query root */
export type Query_RootTimesheets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "timesheets" */
  timesheets: Array<Timesheets>;
  /** fetch aggregated fields from the table: "timesheets" */
  timesheets_aggregate: Timesheets_Aggregate;
  /** fetch data from the table: "timesheets" using primary key columns */
  timesheets_by_pk?: Maybe<Timesheets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootTimesheetsArgs = {
  distinct_on?: Maybe<Array<Timesheets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timesheets_Order_By>>;
  where?: Maybe<Timesheets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTimesheets_AggregateArgs = {
  distinct_on?: Maybe<Array<Timesheets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timesheets_Order_By>>;
  where?: Maybe<Timesheets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTimesheets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "timesheets" */
export type Timesheets = {
   __typename?: 'timesheets';
  created_at: Scalars['timestamptz'];
  end?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  start?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  updated_by?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "timesheets" */
export type Timesheets_Aggregate = {
   __typename?: 'timesheets_aggregate';
  aggregate?: Maybe<Timesheets_Aggregate_Fields>;
  nodes: Array<Timesheets>;
};

/** aggregate fields of "timesheets" */
export type Timesheets_Aggregate_Fields = {
   __typename?: 'timesheets_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Timesheets_Max_Fields>;
  min?: Maybe<Timesheets_Min_Fields>;
};


/** aggregate fields of "timesheets" */
export type Timesheets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Timesheets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "timesheets" */
export type Timesheets_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Timesheets_Max_Order_By>;
  min?: Maybe<Timesheets_Min_Order_By>;
};

/** input type for inserting array relation for remote table "timesheets" */
export type Timesheets_Arr_Rel_Insert_Input = {
  data: Array<Timesheets_Insert_Input>;
  on_conflict?: Maybe<Timesheets_On_Conflict>;
};

/** Boolean expression to filter rows from the table "timesheets". All fields are combined with a logical 'AND'. */
export type Timesheets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Timesheets_Bool_Exp>>>;
  _not?: Maybe<Timesheets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Timesheets_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  end?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  start?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_by?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "timesheets" */
export enum Timesheets_Constraint {
  /** unique or primary key constraint */
  TimesheetsPkey = 'timesheets_pkey'
}

/** input type for inserting data into table "timesheets" */
export type Timesheets_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Timesheets_Max_Fields = {
   __typename?: 'timesheets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "timesheets" */
export type Timesheets_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Timesheets_Min_Fields = {
   __typename?: 'timesheets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "timesheets" */
export type Timesheets_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "timesheets" */
export type Timesheets_Mutation_Response = {
   __typename?: 'timesheets_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Timesheets>;
};

/** input type for inserting object relation for remote table "timesheets" */
export type Timesheets_Obj_Rel_Insert_Input = {
  data: Timesheets_Insert_Input;
  on_conflict?: Maybe<Timesheets_On_Conflict>;
};

/** on conflict condition type for table "timesheets" */
export type Timesheets_On_Conflict = {
  constraint: Timesheets_Constraint;
  update_columns: Array<Timesheets_Update_Column>;
  where?: Maybe<Timesheets_Bool_Exp>;
};

/** ordering options when selecting data from "timesheets" */
export type Timesheets_Order_By = {
  created_at?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_by?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: "timesheets" */
export type Timesheets_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "timesheets" */
export enum Timesheets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "timesheets" */
export type Timesheets_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "timesheets" */
export enum Timesheets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'userId'
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users';
  /** An object relationship */
  activeTimesheet?: Maybe<Timesheets>;
  activeTimesheetId?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  /** An array relationship */
  timesheets: Array<Timesheets>;
  /** An aggregated array relationship */
  timesheets_aggregate: Timesheets_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersTimesheetsArgs = {
  distinct_on?: Maybe<Array<Timesheets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timesheets_Order_By>>;
  where?: Maybe<Timesheets_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTimesheets_AggregateArgs = {
  distinct_on?: Maybe<Array<Timesheets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timesheets_Order_By>>;
  where?: Maybe<Timesheets_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  activeTimesheet?: Maybe<Timesheets_Bool_Exp>;
  activeTimesheetId?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  timesheets?: Maybe<Timesheets_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  activeTimesheet?: Maybe<Timesheets_Obj_Rel_Insert_Input>;
  activeTimesheetId?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  timesheets?: Maybe<Timesheets_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields';
  activeTimesheetId?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  activeTimesheetId?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  activeTimesheetId?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  activeTimesheetId?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  activeTimesheet?: Maybe<Timesheets_Order_By>;
  activeTimesheetId?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  timesheets_aggregate?: Maybe<Timesheets_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ActiveTimesheetId = 'activeTimesheetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  activeTimesheetId?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ActiveTimesheetId = 'activeTimesheetId',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type CreateUserMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'email' | 'created_at'>
    )> }
  )> }
);

export type UpdateUserMutationVariables = {
  id: Scalars['uuid'];
  activeTimesheetId?: Maybe<Scalars['uuid']>;
};


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'activeTimesheetId'>
  )> }
);

export type DeleteUserByIdMutationVariables = {
  id: Scalars['uuid'];
};


export type DeleteUserByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_users?: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<Users, 'email' | 'created_at' | 'updated_at' | 'id'>
    )> }
  )> }
);

export type CreateTimesheetMutationVariables = {
  userId: Scalars['uuid'];
};


export type CreateTimesheetMutation = (
  { __typename?: 'mutation_root' }
  & { insert_timesheets?: Maybe<(
    { __typename?: 'timesheets_mutation_response' }
    & Pick<Timesheets_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'timesheets' }
      & Pick<Timesheets, 'start' | 'id'>
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'id' | 'email'>
      ) }
    )> }
  )> }
);

export type UpdateTimesheetMutationVariables = {
  id: Scalars['uuid'];
  end?: Maybe<Scalars['timestamptz']>;
  start?: Maybe<Scalars['timestamptz']>;
};


export type UpdateTimesheetMutation = (
  { __typename?: 'mutation_root' }
  & { update_timesheets_by_pk?: Maybe<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'start' | 'end' | 'id'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'email'>
    ) }
  )> }
);

export type DeleteTimesheetByIdMutationVariables = {
  id: Scalars['uuid'];
};


export type DeleteTimesheetByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_timesheets?: Maybe<(
    { __typename?: 'timesheets_mutation_response' }
    & Pick<Timesheets_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'timesheets' }
      & Pick<Timesheets, 'id' | 'created_at' | 'updated_at'>
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'id' | 'email'>
      ) }
    )> }
  )> }
);

export type UserQueryVariables = {
  userId: Scalars['uuid'];
};


export type UserQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'email' | 'id' | 'activeTimesheetId' | 'created_at' | 'updated_at'>
  )> }
);

export type UserByEmailQueryVariables = {
  email: Scalars['String'];
};


export type UserByEmailQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'created_at' | 'activeTimesheetId' | 'email' | 'password' | 'updated_at'>
  )> }
);

export type TimesheetQueryVariables = {
  timesheetId: Scalars['uuid'];
};


export type TimesheetQuery = (
  { __typename?: 'query_root' }
  & { timesheets_by_pk?: Maybe<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'created_at' | 'updated_at'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'email' | 'id'>
    ) }
  )> }
);

export type TimesheetsByUserIdQueryVariables = {
  userId: Scalars['uuid'];
};


export type TimesheetsByUserIdQuery = (
  { __typename?: 'query_root' }
  & { timesheets: Array<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'id' | 'start' | 'end' | 'updated_at' | 'created_at'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'email' | 'id'>
    ) }
  )> }
);


export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!) {
  insert_users(objects: {email: $email, password: $password}) {
    affected_rows
    returning {
      id
      email
      created_at
    }
  }
}
    `;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: uuid!, $activeTimesheetId: uuid) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {activeTimesheetId: $activeTimesheetId}) {
    id
    activeTimesheetId
  }
}
    `;
export const DeleteUserByIdDocument = gql`
    mutation DeleteUserById($id: uuid!) {
  delete_users(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      email
      created_at
      updated_at
      id
    }
  }
}
    `;
export const CreateTimesheetDocument = gql`
    mutation CreateTimesheet($userId: uuid!) {
  insert_timesheets(objects: {userId: $userId}) {
    affected_rows
    returning {
      user {
        id
        email
      }
      start
      id
    }
  }
}
    `;
export const UpdateTimesheetDocument = gql`
    mutation UpdateTimesheet($id: uuid!, $end: timestamptz, $start: timestamptz) {
  update_timesheets_by_pk(pk_columns: {id: $id}, _set: {end: $end}) {
    user {
      id
      email
    }
    start
    end
    id
  }
}
    `;
export const DeleteTimesheetByIdDocument = gql`
    mutation DeleteTimesheetById($id: uuid!) {
  delete_timesheets(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      id
      created_at
      updated_at
      user {
        id
        email
      }
    }
  }
}
    `;
export const UserDocument = gql`
    query User($userId: uuid!) {
  users_by_pk(id: $userId) {
    email
    id
    activeTimesheetId
    created_at
    updated_at
  }
}
    `;
export const UserByEmailDocument = gql`
    query UserByEmail($email: String!) {
  users(distinct_on: email, limit: 1, where: {email: {_eq: $email}}) {
    id
    created_at
    activeTimesheetId
    email
    password
    updated_at
  }
}
    `;
export const TimesheetDocument = gql`
    query Timesheet($timesheetId: uuid!) {
  timesheets_by_pk(id: $timesheetId) {
    user {
      email
      id
    }
    created_at
    updated_at
  }
}
    `;
export const TimesheetsByUserIdDocument = gql`
    query TimesheetsByUserId($userId: uuid!) {
  timesheets(where: {userId: {_eq: $userId}}) {
    user {
      email
      id
    }
    id
    start
    end
    updated_at
    created_at
    updated_at
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateUser(variables: CreateUserMutationVariables): Promise<CreateUserMutation> {
      return withWrapper(() => client.request<CreateUserMutation>(print(CreateUserDocument), variables));
    },
    UpdateUser(variables: UpdateUserMutationVariables): Promise<UpdateUserMutation> {
      return withWrapper(() => client.request<UpdateUserMutation>(print(UpdateUserDocument), variables));
    },
    DeleteUserById(variables: DeleteUserByIdMutationVariables): Promise<DeleteUserByIdMutation> {
      return withWrapper(() => client.request<DeleteUserByIdMutation>(print(DeleteUserByIdDocument), variables));
    },
    CreateTimesheet(variables: CreateTimesheetMutationVariables): Promise<CreateTimesheetMutation> {
      return withWrapper(() => client.request<CreateTimesheetMutation>(print(CreateTimesheetDocument), variables));
    },
    UpdateTimesheet(variables: UpdateTimesheetMutationVariables): Promise<UpdateTimesheetMutation> {
      return withWrapper(() => client.request<UpdateTimesheetMutation>(print(UpdateTimesheetDocument), variables));
    },
    DeleteTimesheetById(variables: DeleteTimesheetByIdMutationVariables): Promise<DeleteTimesheetByIdMutation> {
      return withWrapper(() => client.request<DeleteTimesheetByIdMutation>(print(DeleteTimesheetByIdDocument), variables));
    },
    User(variables: UserQueryVariables): Promise<UserQuery> {
      return withWrapper(() => client.request<UserQuery>(print(UserDocument), variables));
    },
    UserByEmail(variables: UserByEmailQueryVariables): Promise<UserByEmailQuery> {
      return withWrapper(() => client.request<UserByEmailQuery>(print(UserByEmailDocument), variables));
    },
    Timesheet(variables: TimesheetQueryVariables): Promise<TimesheetQuery> {
      return withWrapper(() => client.request<TimesheetQuery>(print(TimesheetDocument), variables));
    },
    TimesheetsByUserId(variables: TimesheetsByUserIdQueryVariables): Promise<TimesheetsByUserIdQuery> {
      return withWrapper(() => client.request<TimesheetsByUserIdQuery>(print(TimesheetsByUserIdDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;