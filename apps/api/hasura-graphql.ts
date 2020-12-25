import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  numeric: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
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

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  acquisition_date?: Maybe<Scalars['timestamptz']>;
  address?: Maybe<Scalars['jsonb']>;
  average_invoice?: Maybe<Scalars['numeric']>;
  call_list?: Maybe<Scalars['jsonb']>;
  commercial?: Maybe<Scalars['Boolean']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['numeric'];
  invoice_count?: Maybe<Scalars['numeric']>;
  last_estimate_created_date?: Maybe<Scalars['String']>;
  last_invoice_amount?: Maybe<Scalars['numeric']>;
  last_invoice_date?: Maybe<Scalars['timestamptz']>;
  last_job_amount?: Maybe<Scalars['numeric']>;
  last_job_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  orderssByAccountsId: Array<Orders>;
  /** An aggregated array relationship */
  orderssByAccountsId_aggregate: Orders_Aggregate;
  phone_list?: Maybe<Scalars['String']>;
  primary_phone?: Maybe<Scalars['String']>;
  search_address?: Maybe<Scalars['String']>;
  tax_exempt?: Maybe<Scalars['Boolean']>;
  tax_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};


/** columns and relationships of "accounts" */
export type AccountsAddressArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "accounts" */
export type AccountsCall_ListArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "accounts" */
export type AccountsOrderssByAccountsIdArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsOrderssByAccountsId_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: Maybe<Accounts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Accounts_Max_Order_By>;
  min?: Maybe<Accounts_Min_Order_By>;
  stddev?: Maybe<Accounts_Stddev_Order_By>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Order_By>;
  sum?: Maybe<Accounts_Sum_Order_By>;
  var_pop?: Maybe<Accounts_Var_Pop_Order_By>;
  var_samp?: Maybe<Accounts_Var_Samp_Order_By>;
  variance?: Maybe<Accounts_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Accounts_Append_Input = {
  address?: Maybe<Scalars['jsonb']>;
  call_list?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  average_invoice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  invoice_count?: Maybe<Scalars['Float']>;
  last_invoice_amount?: Maybe<Scalars['Float']>;
  last_job_amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  _not?: Maybe<Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Accounts_Bool_Exp>>>;
  account_id?: Maybe<String_Comparison_Exp>;
  account_name?: Maybe<String_Comparison_Exp>;
  acquisition_date?: Maybe<Timestamptz_Comparison_Exp>;
  address?: Maybe<Jsonb_Comparison_Exp>;
  average_invoice?: Maybe<Numeric_Comparison_Exp>;
  call_list?: Maybe<Jsonb_Comparison_Exp>;
  commercial?: Maybe<Boolean_Comparison_Exp>;
  company_name?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Numeric_Comparison_Exp>;
  invoice_count?: Maybe<Numeric_Comparison_Exp>;
  last_estimate_created_date?: Maybe<String_Comparison_Exp>;
  last_invoice_amount?: Maybe<Numeric_Comparison_Exp>;
  last_invoice_date?: Maybe<Timestamptz_Comparison_Exp>;
  last_job_amount?: Maybe<Numeric_Comparison_Exp>;
  last_job_date?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  orderssByAccountsId?: Maybe<Orders_Bool_Exp>;
  phone_list?: Maybe<String_Comparison_Exp>;
  primary_phone?: Maybe<String_Comparison_Exp>;
  search_address?: Maybe<String_Comparison_Exp>;
  tax_exempt?: Maybe<Boolean_Comparison_Exp>;
  tax_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Accounts_Delete_At_Path_Input = {
  address?: Maybe<Array<Maybe<Scalars['String']>>>;
  call_list?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Accounts_Delete_Elem_Input = {
  address?: Maybe<Scalars['Int']>;
  call_list?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Accounts_Delete_Key_Input = {
  address?: Maybe<Scalars['String']>;
  call_list?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "accounts" */
export type Accounts_Inc_Input = {
  average_invoice?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['numeric']>;
  invoice_count?: Maybe<Scalars['numeric']>;
  last_invoice_amount?: Maybe<Scalars['numeric']>;
  last_job_amount?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  acquisition_date?: Maybe<Scalars['timestamptz']>;
  address?: Maybe<Scalars['jsonb']>;
  average_invoice?: Maybe<Scalars['numeric']>;
  call_list?: Maybe<Scalars['jsonb']>;
  commercial?: Maybe<Scalars['Boolean']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  invoice_count?: Maybe<Scalars['numeric']>;
  last_estimate_created_date?: Maybe<Scalars['String']>;
  last_invoice_amount?: Maybe<Scalars['numeric']>;
  last_invoice_date?: Maybe<Scalars['timestamptz']>;
  last_job_amount?: Maybe<Scalars['numeric']>;
  last_job_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  orderssByAccountsId?: Maybe<Orders_Arr_Rel_Insert_Input>;
  phone_list?: Maybe<Scalars['String']>;
  primary_phone?: Maybe<Scalars['String']>;
  search_address?: Maybe<Scalars['String']>;
  tax_exempt?: Maybe<Scalars['Boolean']>;
  tax_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  acquisition_date?: Maybe<Scalars['timestamptz']>;
  average_invoice?: Maybe<Scalars['numeric']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  invoice_count?: Maybe<Scalars['numeric']>;
  last_estimate_created_date?: Maybe<Scalars['String']>;
  last_invoice_amount?: Maybe<Scalars['numeric']>;
  last_invoice_date?: Maybe<Scalars['timestamptz']>;
  last_job_amount?: Maybe<Scalars['numeric']>;
  last_job_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_list?: Maybe<Scalars['String']>;
  primary_phone?: Maybe<Scalars['String']>;
  search_address?: Maybe<Scalars['String']>;
  tax_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  account_name?: Maybe<Order_By>;
  acquisition_date?: Maybe<Order_By>;
  average_invoice?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_estimate_created_date?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_invoice_date?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
  last_job_date?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  phone_list?: Maybe<Order_By>;
  primary_phone?: Maybe<Order_By>;
  search_address?: Maybe<Order_By>;
  tax_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  acquisition_date?: Maybe<Scalars['timestamptz']>;
  average_invoice?: Maybe<Scalars['numeric']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  invoice_count?: Maybe<Scalars['numeric']>;
  last_estimate_created_date?: Maybe<Scalars['String']>;
  last_invoice_amount?: Maybe<Scalars['numeric']>;
  last_invoice_date?: Maybe<Scalars['timestamptz']>;
  last_job_amount?: Maybe<Scalars['numeric']>;
  last_job_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_list?: Maybe<Scalars['String']>;
  primary_phone?: Maybe<Scalars['String']>;
  search_address?: Maybe<Scalars['String']>;
  tax_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  account_name?: Maybe<Order_By>;
  acquisition_date?: Maybe<Order_By>;
  average_invoice?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_estimate_created_date?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_invoice_date?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
  last_job_date?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  phone_list?: Maybe<Order_By>;
  primary_phone?: Maybe<Order_By>;
  search_address?: Maybe<Order_By>;
  tax_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};

/** on conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns: Array<Accounts_Update_Column>;
  where?: Maybe<Accounts_Bool_Exp>;
};

/** ordering options when selecting data from "accounts" */
export type Accounts_Order_By = {
  account_id?: Maybe<Order_By>;
  account_name?: Maybe<Order_By>;
  acquisition_date?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  average_invoice?: Maybe<Order_By>;
  call_list?: Maybe<Order_By>;
  commercial?: Maybe<Order_By>;
  company_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_estimate_created_date?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_invoice_date?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
  last_job_date?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  orderssByAccountsId_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  phone_list?: Maybe<Order_By>;
  primary_phone?: Maybe<Order_By>;
  search_address?: Maybe<Order_By>;
  tax_exempt?: Maybe<Order_By>;
  tax_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "accounts" */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['numeric'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Accounts_Prepend_Input = {
  address?: Maybe<Scalars['jsonb']>;
  call_list?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AccountName = 'account_name',
  /** column name */
  AcquisitionDate = 'acquisition_date',
  /** column name */
  Address = 'address',
  /** column name */
  AverageInvoice = 'average_invoice',
  /** column name */
  CallList = 'call_list',
  /** column name */
  Commercial = 'commercial',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceCount = 'invoice_count',
  /** column name */
  LastEstimateCreatedDate = 'last_estimate_created_date',
  /** column name */
  LastInvoiceAmount = 'last_invoice_amount',
  /** column name */
  LastInvoiceDate = 'last_invoice_date',
  /** column name */
  LastJobAmount = 'last_job_amount',
  /** column name */
  LastJobDate = 'last_job_date',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PhoneList = 'phone_list',
  /** column name */
  PrimaryPhone = 'primary_phone',
  /** column name */
  SearchAddress = 'search_address',
  /** column name */
  TaxExempt = 'tax_exempt',
  /** column name */
  TaxId = 'tax_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  acquisition_date?: Maybe<Scalars['timestamptz']>;
  address?: Maybe<Scalars['jsonb']>;
  average_invoice?: Maybe<Scalars['numeric']>;
  call_list?: Maybe<Scalars['jsonb']>;
  commercial?: Maybe<Scalars['Boolean']>;
  company_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  invoice_count?: Maybe<Scalars['numeric']>;
  last_estimate_created_date?: Maybe<Scalars['String']>;
  last_invoice_amount?: Maybe<Scalars['numeric']>;
  last_invoice_date?: Maybe<Scalars['timestamptz']>;
  last_job_amount?: Maybe<Scalars['numeric']>;
  last_job_date?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_list?: Maybe<Scalars['String']>;
  primary_phone?: Maybe<Scalars['String']>;
  search_address?: Maybe<Scalars['String']>;
  tax_exempt?: Maybe<Scalars['Boolean']>;
  tax_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  average_invoice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  invoice_count?: Maybe<Scalars['Float']>;
  last_invoice_amount?: Maybe<Scalars['Float']>;
  last_job_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  average_invoice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  invoice_count?: Maybe<Scalars['Float']>;
  last_invoice_amount?: Maybe<Scalars['Float']>;
  last_job_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  average_invoice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  invoice_count?: Maybe<Scalars['Float']>;
  last_invoice_amount?: Maybe<Scalars['Float']>;
  last_job_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  average_invoice?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['numeric']>;
  invoice_count?: Maybe<Scalars['numeric']>;
  last_invoice_amount?: Maybe<Scalars['numeric']>;
  last_job_amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AccountName = 'account_name',
  /** column name */
  AcquisitionDate = 'acquisition_date',
  /** column name */
  Address = 'address',
  /** column name */
  AverageInvoice = 'average_invoice',
  /** column name */
  CallList = 'call_list',
  /** column name */
  Commercial = 'commercial',
  /** column name */
  CompanyName = 'company_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  InvoiceCount = 'invoice_count',
  /** column name */
  LastEstimateCreatedDate = 'last_estimate_created_date',
  /** column name */
  LastInvoiceAmount = 'last_invoice_amount',
  /** column name */
  LastInvoiceDate = 'last_invoice_date',
  /** column name */
  LastJobAmount = 'last_job_amount',
  /** column name */
  LastJobDate = 'last_job_date',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PhoneList = 'phone_list',
  /** column name */
  PrimaryPhone = 'primary_phone',
  /** column name */
  SearchAddress = 'search_address',
  /** column name */
  TaxExempt = 'tax_exempt',
  /** column name */
  TaxId = 'tax_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  average_invoice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  invoice_count?: Maybe<Scalars['Float']>;
  last_invoice_amount?: Maybe<Scalars['Float']>;
  last_job_amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  average_invoice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  invoice_count?: Maybe<Scalars['Float']>;
  last_invoice_amount?: Maybe<Scalars['Float']>;
  last_job_amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  average_invoice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  invoice_count?: Maybe<Scalars['Float']>;
  last_invoice_amount?: Maybe<Scalars['Float']>;
  last_job_amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  average_invoice?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  invoice_count?: Maybe<Order_By>;
  last_invoice_amount?: Maybe<Order_By>;
  last_job_amount?: Maybe<Order_By>;
};

/** columns and relationships of "calls" */
export type Calls = {
  __typename?: 'calls';
  call_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  disposition?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['numeric']>;
  employee?: Maybe<Scalars['String']>;
  /** An object relationship */
  employeesByEmployeesId?: Maybe<Employees>;
  employees_id?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id: Scalars['numeric'];
  is_employee?: Maybe<Scalars['Boolean']>;
  needs_lookup?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<Scalars['String']>;
  partner_number?: Maybe<Scalars['String']>;
  sm_account_id?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** aggregated selection of "calls" */
export type Calls_Aggregate = {
  __typename?: 'calls_aggregate';
  aggregate?: Maybe<Calls_Aggregate_Fields>;
  nodes: Array<Calls>;
};

/** aggregate fields of "calls" */
export type Calls_Aggregate_Fields = {
  __typename?: 'calls_aggregate_fields';
  avg?: Maybe<Calls_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Calls_Max_Fields>;
  min?: Maybe<Calls_Min_Fields>;
  stddev?: Maybe<Calls_Stddev_Fields>;
  stddev_pop?: Maybe<Calls_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Calls_Stddev_Samp_Fields>;
  sum?: Maybe<Calls_Sum_Fields>;
  var_pop?: Maybe<Calls_Var_Pop_Fields>;
  var_samp?: Maybe<Calls_Var_Samp_Fields>;
  variance?: Maybe<Calls_Variance_Fields>;
};


/** aggregate fields of "calls" */
export type Calls_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Calls_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "calls" */
export type Calls_Aggregate_Order_By = {
  avg?: Maybe<Calls_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Calls_Max_Order_By>;
  min?: Maybe<Calls_Min_Order_By>;
  stddev?: Maybe<Calls_Stddev_Order_By>;
  stddev_pop?: Maybe<Calls_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Calls_Stddev_Samp_Order_By>;
  sum?: Maybe<Calls_Sum_Order_By>;
  var_pop?: Maybe<Calls_Var_Pop_Order_By>;
  var_samp?: Maybe<Calls_Var_Samp_Order_By>;
  variance?: Maybe<Calls_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "calls" */
export type Calls_Arr_Rel_Insert_Input = {
  data: Array<Calls_Insert_Input>;
  on_conflict?: Maybe<Calls_On_Conflict>;
};

/** aggregate avg on columns */
export type Calls_Avg_Fields = {
  __typename?: 'calls_avg_fields';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "calls" */
export type Calls_Avg_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "calls". All fields are combined with a logical 'AND'. */
export type Calls_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Calls_Bool_Exp>>>;
  _not?: Maybe<Calls_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Calls_Bool_Exp>>>;
  call_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<String_Comparison_Exp>;
  direction?: Maybe<String_Comparison_Exp>;
  disposition?: Maybe<String_Comparison_Exp>;
  duration?: Maybe<Numeric_Comparison_Exp>;
  employee?: Maybe<String_Comparison_Exp>;
  employeesByEmployeesId?: Maybe<Employees_Bool_Exp>;
  employees_id?: Maybe<String_Comparison_Exp>;
  end_time?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Numeric_Comparison_Exp>;
  is_employee?: Maybe<Boolean_Comparison_Exp>;
  needs_lookup?: Maybe<Boolean_Comparison_Exp>;
  partner?: Maybe<String_Comparison_Exp>;
  partner_number?: Maybe<String_Comparison_Exp>;
  sm_account_id?: Maybe<String_Comparison_Exp>;
  start_time?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "calls" */
export enum Calls_Constraint {
  /** unique or primary key constraint */
  CallsPkey = 'calls_pkey'
}

/** input type for incrementing integer column in table "calls" */
export type Calls_Inc_Input = {
  duration?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "calls" */
export type Calls_Insert_Input = {
  call_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  disposition?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['numeric']>;
  employee?: Maybe<Scalars['String']>;
  employeesByEmployeesId?: Maybe<Employees_Obj_Rel_Insert_Input>;
  employees_id?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['numeric']>;
  is_employee?: Maybe<Scalars['Boolean']>;
  needs_lookup?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<Scalars['String']>;
  partner_number?: Maybe<Scalars['String']>;
  sm_account_id?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Calls_Max_Fields = {
  __typename?: 'calls_max_fields';
  call_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  disposition?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['numeric']>;
  employee?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['numeric']>;
  partner?: Maybe<Scalars['String']>;
  partner_number?: Maybe<Scalars['String']>;
  sm_account_id?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "calls" */
export type Calls_Max_Order_By = {
  call_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  direction?: Maybe<Order_By>;
  disposition?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  employee?: Maybe<Order_By>;
  employees_id?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  partner?: Maybe<Order_By>;
  partner_number?: Maybe<Order_By>;
  sm_account_id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Calls_Min_Fields = {
  __typename?: 'calls_min_fields';
  call_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  disposition?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['numeric']>;
  employee?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['numeric']>;
  partner?: Maybe<Scalars['String']>;
  partner_number?: Maybe<Scalars['String']>;
  sm_account_id?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "calls" */
export type Calls_Min_Order_By = {
  call_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  direction?: Maybe<Order_By>;
  disposition?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  employee?: Maybe<Order_By>;
  employees_id?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  partner?: Maybe<Order_By>;
  partner_number?: Maybe<Order_By>;
  sm_account_id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "calls" */
export type Calls_Mutation_Response = {
  __typename?: 'calls_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Calls>;
};

/** input type for inserting object relation for remote table "calls" */
export type Calls_Obj_Rel_Insert_Input = {
  data: Calls_Insert_Input;
  on_conflict?: Maybe<Calls_On_Conflict>;
};

/** on conflict condition type for table "calls" */
export type Calls_On_Conflict = {
  constraint: Calls_Constraint;
  update_columns: Array<Calls_Update_Column>;
  where?: Maybe<Calls_Bool_Exp>;
};

/** ordering options when selecting data from "calls" */
export type Calls_Order_By = {
  call_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  direction?: Maybe<Order_By>;
  disposition?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  employee?: Maybe<Order_By>;
  employeesByEmployeesId?: Maybe<Employees_Order_By>;
  employees_id?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_employee?: Maybe<Order_By>;
  needs_lookup?: Maybe<Order_By>;
  partner?: Maybe<Order_By>;
  partner_number?: Maybe<Order_By>;
  sm_account_id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "calls" */
export type Calls_Pk_Columns_Input = {
  id: Scalars['numeric'];
};

/** select columns of table "calls" */
export enum Calls_Select_Column {
  /** column name */
  CallId = 'call_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Direction = 'direction',
  /** column name */
  Disposition = 'disposition',
  /** column name */
  Duration = 'duration',
  /** column name */
  Employee = 'employee',
  /** column name */
  EmployeesId = 'employees_id',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  IsEmployee = 'is_employee',
  /** column name */
  NeedsLookup = 'needs_lookup',
  /** column name */
  Partner = 'partner',
  /** column name */
  PartnerNumber = 'partner_number',
  /** column name */
  SmAccountId = 'sm_account_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "calls" */
export type Calls_Set_Input = {
  call_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  direction?: Maybe<Scalars['String']>;
  disposition?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['numeric']>;
  employee?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['numeric']>;
  is_employee?: Maybe<Scalars['Boolean']>;
  needs_lookup?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<Scalars['String']>;
  partner_number?: Maybe<Scalars['String']>;
  sm_account_id?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Calls_Stddev_Fields = {
  __typename?: 'calls_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "calls" */
export type Calls_Stddev_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Calls_Stddev_Pop_Fields = {
  __typename?: 'calls_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "calls" */
export type Calls_Stddev_Pop_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Calls_Stddev_Samp_Fields = {
  __typename?: 'calls_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "calls" */
export type Calls_Stddev_Samp_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Calls_Sum_Fields = {
  __typename?: 'calls_sum_fields';
  duration?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "calls" */
export type Calls_Sum_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "calls" */
export enum Calls_Update_Column {
  /** column name */
  CallId = 'call_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Direction = 'direction',
  /** column name */
  Disposition = 'disposition',
  /** column name */
  Duration = 'duration',
  /** column name */
  Employee = 'employee',
  /** column name */
  EmployeesId = 'employees_id',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  IsEmployee = 'is_employee',
  /** column name */
  NeedsLookup = 'needs_lookup',
  /** column name */
  Partner = 'partner',
  /** column name */
  PartnerNumber = 'partner_number',
  /** column name */
  SmAccountId = 'sm_account_id',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Calls_Var_Pop_Fields = {
  __typename?: 'calls_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "calls" */
export type Calls_Var_Pop_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Calls_Var_Samp_Fields = {
  __typename?: 'calls_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "calls" */
export type Calls_Var_Samp_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Calls_Variance_Fields = {
  __typename?: 'calls_variance_fields';
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "calls" */
export type Calls_Variance_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "employees" */
export type Employees = {
  __typename?: 'employees';
  active?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  assigned_route_ids?: Maybe<Scalars['String']>;
  /** An array relationship */
  callssByEmployeesId: Array<Calls>;
  /** An aggregated array relationship */
  callssByEmployeesId_aggregate: Calls_Aggregate;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  current_device?: Maybe<Scalars['String']>;
  date_of_hire?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_corporate?: Maybe<Scalars['String']>;
  is_sales_rep?: Maybe<Scalars['String']>;
  is_technician?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  personal_phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** An array relationship */
  userssByEmployeesId: Array<Users>;
  /** An aggregated array relationship */
  userssByEmployeesId_aggregate: Users_Aggregate;
  zip?: Maybe<Scalars['String']>;
};


/** columns and relationships of "employees" */
export type EmployeesCallssByEmployeesIdArgs = {
  distinct_on?: Maybe<Array<Calls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calls_Order_By>>;
  where?: Maybe<Calls_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesCallssByEmployeesId_AggregateArgs = {
  distinct_on?: Maybe<Array<Calls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calls_Order_By>>;
  where?: Maybe<Calls_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesUserssByEmployeesIdArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "employees" */
export type EmployeesUserssByEmployeesId_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "employees" */
export type Employees_Aggregate = {
  __typename?: 'employees_aggregate';
  aggregate?: Maybe<Employees_Aggregate_Fields>;
  nodes: Array<Employees>;
};

/** aggregate fields of "employees" */
export type Employees_Aggregate_Fields = {
  __typename?: 'employees_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Employees_Max_Fields>;
  min?: Maybe<Employees_Min_Fields>;
};


/** aggregate fields of "employees" */
export type Employees_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Employees_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "employees" */
export type Employees_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Employees_Max_Order_By>;
  min?: Maybe<Employees_Min_Order_By>;
};

/** input type for inserting array relation for remote table "employees" */
export type Employees_Arr_Rel_Insert_Input = {
  data: Array<Employees_Insert_Input>;
  on_conflict?: Maybe<Employees_On_Conflict>;
};

/** Boolean expression to filter rows from the table "employees". All fields are combined with a logical 'AND'. */
export type Employees_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Employees_Bool_Exp>>>;
  _not?: Maybe<Employees_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Employees_Bool_Exp>>>;
  active?: Maybe<String_Comparison_Exp>;
  address1?: Maybe<String_Comparison_Exp>;
  address2?: Maybe<String_Comparison_Exp>;
  assigned_route_ids?: Maybe<String_Comparison_Exp>;
  callssByEmployeesId?: Maybe<Calls_Bool_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  current_device?: Maybe<String_Comparison_Exp>;
  date_of_hire?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  employee_id?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  hidden?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  is_corporate?: Maybe<String_Comparison_Exp>;
  is_sales_rep?: Maybe<String_Comparison_Exp>;
  is_technician?: Maybe<String_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  personal_phone?: Maybe<String_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  userssByEmployeesId?: Maybe<Users_Bool_Exp>;
  zip?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "employees" */
export enum Employees_Constraint {
  /** unique or primary key constraint */
  EmployeesPkey = 'employees_pkey'
}

/** input type for inserting data into table "employees" */
export type Employees_Insert_Input = {
  active?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  assigned_route_ids?: Maybe<Scalars['String']>;
  callssByEmployeesId?: Maybe<Calls_Arr_Rel_Insert_Input>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  current_device?: Maybe<Scalars['String']>;
  date_of_hire?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_corporate?: Maybe<Scalars['String']>;
  is_sales_rep?: Maybe<Scalars['String']>;
  is_technician?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  personal_phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userssByEmployeesId?: Maybe<Users_Arr_Rel_Insert_Input>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Employees_Max_Fields = {
  __typename?: 'employees_max_fields';
  active?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  assigned_route_ids?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  current_device?: Maybe<Scalars['String']>;
  date_of_hire?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_corporate?: Maybe<Scalars['String']>;
  is_sales_rep?: Maybe<Scalars['String']>;
  is_technician?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  personal_phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "employees" */
export type Employees_Max_Order_By = {
  active?: Maybe<Order_By>;
  address1?: Maybe<Order_By>;
  address2?: Maybe<Order_By>;
  assigned_route_ids?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  current_device?: Maybe<Order_By>;
  date_of_hire?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  employee_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_corporate?: Maybe<Order_By>;
  is_sales_rep?: Maybe<Order_By>;
  is_technician?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  personal_phone?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Employees_Min_Fields = {
  __typename?: 'employees_min_fields';
  active?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  assigned_route_ids?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  current_device?: Maybe<Scalars['String']>;
  date_of_hire?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_corporate?: Maybe<Scalars['String']>;
  is_sales_rep?: Maybe<Scalars['String']>;
  is_technician?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  personal_phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "employees" */
export type Employees_Min_Order_By = {
  active?: Maybe<Order_By>;
  address1?: Maybe<Order_By>;
  address2?: Maybe<Order_By>;
  assigned_route_ids?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  current_device?: Maybe<Order_By>;
  date_of_hire?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  employee_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_corporate?: Maybe<Order_By>;
  is_sales_rep?: Maybe<Order_By>;
  is_technician?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  personal_phone?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** response of any mutation on the table "employees" */
export type Employees_Mutation_Response = {
  __typename?: 'employees_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Employees>;
};

/** input type for inserting object relation for remote table "employees" */
export type Employees_Obj_Rel_Insert_Input = {
  data: Employees_Insert_Input;
  on_conflict?: Maybe<Employees_On_Conflict>;
};

/** on conflict condition type for table "employees" */
export type Employees_On_Conflict = {
  constraint: Employees_Constraint;
  update_columns: Array<Employees_Update_Column>;
  where?: Maybe<Employees_Bool_Exp>;
};

/** ordering options when selecting data from "employees" */
export type Employees_Order_By = {
  active?: Maybe<Order_By>;
  address1?: Maybe<Order_By>;
  address2?: Maybe<Order_By>;
  assigned_route_ids?: Maybe<Order_By>;
  callssByEmployeesId_aggregate?: Maybe<Calls_Aggregate_Order_By>;
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  current_device?: Maybe<Order_By>;
  date_of_hire?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  employee_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_corporate?: Maybe<Order_By>;
  is_sales_rep?: Maybe<Order_By>;
  is_technician?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  personal_phone?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  userssByEmployeesId_aggregate?: Maybe<Users_Aggregate_Order_By>;
  zip?: Maybe<Order_By>;
};

/** primary key columns input for table: "employees" */
export type Employees_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "employees" */
export enum Employees_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  AssignedRouteIds = 'assigned_route_ids',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CurrentDevice = 'current_device',
  /** column name */
  DateOfHire = 'date_of_hire',
  /** column name */
  Email = 'email',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  IsCorporate = 'is_corporate',
  /** column name */
  IsSalesRep = 'is_sales_rep',
  /** column name */
  IsTechnician = 'is_technician',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PersonalPhone = 'personal_phone',
  /** column name */
  State = 'state',
  /** column name */
  Title = 'title',
  /** column name */
  Zip = 'zip'
}

/** input type for updating data in table "employees" */
export type Employees_Set_Input = {
  active?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  assigned_route_ids?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  current_device?: Maybe<Scalars['String']>;
  date_of_hire?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employee_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_corporate?: Maybe<Scalars['String']>;
  is_sales_rep?: Maybe<Scalars['String']>;
  is_technician?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  personal_phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** update columns of table "employees" */
export enum Employees_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  AssignedRouteIds = 'assigned_route_ids',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CurrentDevice = 'current_device',
  /** column name */
  DateOfHire = 'date_of_hire',
  /** column name */
  Email = 'email',
  /** column name */
  EmployeeId = 'employee_id',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  IsCorporate = 'is_corporate',
  /** column name */
  IsSalesRep = 'is_sales_rep',
  /** column name */
  IsTechnician = 'is_technician',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PersonalPhone = 'personal_phone',
  /** column name */
  State = 'state',
  /** column name */
  Title = 'title',
  /** column name */
  Zip = 'zip'
}


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "calls" */
  delete_calls?: Maybe<Calls_Mutation_Response>;
  /** delete single row from the table: "calls" */
  delete_calls_by_pk?: Maybe<Calls>;
  /** delete data from the table: "employees" */
  delete_employees?: Maybe<Employees_Mutation_Response>;
  /** delete single row from the table: "employees" */
  delete_employees_by_pk?: Maybe<Employees>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "timesheets" */
  delete_timesheets?: Maybe<Timesheets_Mutation_Response>;
  /** delete single row from the table: "timesheets" */
  delete_timesheets_by_pk?: Maybe<Timesheets>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "calls" */
  insert_calls?: Maybe<Calls_Mutation_Response>;
  /** insert a single row into the table: "calls" */
  insert_calls_one?: Maybe<Calls>;
  /** insert data into the table: "employees" */
  insert_employees?: Maybe<Employees_Mutation_Response>;
  /** insert a single row into the table: "employees" */
  insert_employees_one?: Maybe<Employees>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "timesheets" */
  insert_timesheets?: Maybe<Timesheets_Mutation_Response>;
  /** insert a single row into the table: "timesheets" */
  insert_timesheets_one?: Maybe<Timesheets>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "calls" */
  update_calls?: Maybe<Calls_Mutation_Response>;
  /** update single row of the table: "calls" */
  update_calls_by_pk?: Maybe<Calls>;
  /** update data of the table: "employees" */
  update_employees?: Maybe<Employees_Mutation_Response>;
  /** update single row of the table: "employees" */
  update_employees_by_pk?: Maybe<Employees>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
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
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['numeric'];
};


/** mutation root */
export type Mutation_RootDelete_CallsArgs = {
  where: Calls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Calls_By_PkArgs = {
  id: Scalars['numeric'];
};


/** mutation root */
export type Mutation_RootDelete_EmployeesArgs = {
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Employees_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['numeric'];
};


/** mutation root */
export type Mutation_RootDelete_TimesheetsArgs = {
  where: Timesheets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Timesheets_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: Maybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CallsArgs = {
  objects: Array<Calls_Insert_Input>;
  on_conflict?: Maybe<Calls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Calls_OneArgs = {
  object: Calls_Insert_Input;
  on_conflict?: Maybe<Calls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EmployeesArgs = {
  objects: Array<Employees_Insert_Input>;
  on_conflict?: Maybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Employees_OneArgs = {
  object: Employees_Insert_Input;
  on_conflict?: Maybe<Employees_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
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
export type Mutation_RootUpdate_AccountsArgs = {
  _append?: Maybe<Accounts_Append_Input>;
  _delete_at_path?: Maybe<Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Accounts_Delete_Key_Input>;
  _inc?: Maybe<Accounts_Inc_Input>;
  _prepend?: Maybe<Accounts_Prepend_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _append?: Maybe<Accounts_Append_Input>;
  _delete_at_path?: Maybe<Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Accounts_Delete_Key_Input>;
  _inc?: Maybe<Accounts_Inc_Input>;
  _prepend?: Maybe<Accounts_Prepend_Input>;
  _set?: Maybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CallsArgs = {
  _inc?: Maybe<Calls_Inc_Input>;
  _set?: Maybe<Calls_Set_Input>;
  where: Calls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Calls_By_PkArgs = {
  _inc?: Maybe<Calls_Inc_Input>;
  _set?: Maybe<Calls_Set_Input>;
  pk_columns: Calls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EmployeesArgs = {
  _set?: Maybe<Employees_Set_Input>;
  where: Employees_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Employees_By_PkArgs = {
  _set?: Maybe<Employees_Set_Input>;
  pk_columns: Employees_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
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


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
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

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  /** An object relationship */
  accountsByAccountsId?: Maybe<Accounts>;
  accounts_id?: Maybe<Scalars['numeric']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  balance_due?: Maybe<Scalars['numeric']>;
  city?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['String']>;
  corporate_fees_total?: Maybe<Scalars['numeric']>;
  corporate_payable_total?: Maybe<Scalars['numeric']>;
  correction?: Maybe<Scalars['numeric']>;
  created_by?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['String']>;
  date_completed?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  date_posted?: Maybe<Scalars['String']>;
  discount_percent?: Maybe<Scalars['numeric']>;
  due_date?: Maybe<Scalars['String']>;
  external_ref_id?: Maybe<Scalars['String']>;
  flag_for_review?: Maybe<Scalars['Boolean']>;
  grand_total?: Maybe<Scalars['numeric']>;
  group?: Maybe<Scalars['String']>;
  id: Scalars['numeric'];
  merchant_fees_total?: Maybe<Scalars['numeric']>;
  note?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['String']>;
  order_number?: Maybe<Scalars['numeric']>;
  order_type?: Maybe<Scalars['String']>;
  original_type?: Maybe<Scalars['String']>;
  post_to_accounting?: Maybe<Scalars['Boolean']>;
  postedtocorporate?: Maybe<Scalars['Boolean']>;
  print_style_id?: Maybe<Scalars['String']>;
  ref_number?: Maybe<Scalars['String']>;
  sales_rep_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_group?: Maybe<Scalars['String']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_id?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  time_stamp?: Maybe<Scalars['String']>;
  tip_collected?: Maybe<Scalars['numeric']>;
  user_name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  accounts_id?: Maybe<Scalars['Float']>;
  balance_due?: Maybe<Scalars['Float']>;
  corporate_fees_total?: Maybe<Scalars['Float']>;
  corporate_payable_total?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  discount_percent?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  merchant_fees_total?: Maybe<Scalars['Float']>;
  order_number?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  tip_collected?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  account_id?: Maybe<String_Comparison_Exp>;
  account_name?: Maybe<String_Comparison_Exp>;
  accountsByAccountsId?: Maybe<Accounts_Bool_Exp>;
  accounts_id?: Maybe<Numeric_Comparison_Exp>;
  address1?: Maybe<String_Comparison_Exp>;
  address2?: Maybe<String_Comparison_Exp>;
  balance_due?: Maybe<Numeric_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  company_id?: Maybe<String_Comparison_Exp>;
  corporate_fees_total?: Maybe<Numeric_Comparison_Exp>;
  corporate_payable_total?: Maybe<Numeric_Comparison_Exp>;
  correction?: Maybe<Numeric_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  created_on?: Maybe<String_Comparison_Exp>;
  date_completed?: Maybe<String_Comparison_Exp>;
  date_created?: Maybe<String_Comparison_Exp>;
  date_posted?: Maybe<String_Comparison_Exp>;
  discount_percent?: Maybe<Numeric_Comparison_Exp>;
  due_date?: Maybe<String_Comparison_Exp>;
  external_ref_id?: Maybe<String_Comparison_Exp>;
  flag_for_review?: Maybe<Boolean_Comparison_Exp>;
  grand_total?: Maybe<Numeric_Comparison_Exp>;
  group?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Numeric_Comparison_Exp>;
  merchant_fees_total?: Maybe<Numeric_Comparison_Exp>;
  note?: Maybe<String_Comparison_Exp>;
  order_id?: Maybe<String_Comparison_Exp>;
  order_number?: Maybe<Numeric_Comparison_Exp>;
  order_type?: Maybe<String_Comparison_Exp>;
  original_type?: Maybe<String_Comparison_Exp>;
  post_to_accounting?: Maybe<Boolean_Comparison_Exp>;
  postedtocorporate?: Maybe<Boolean_Comparison_Exp>;
  print_style_id?: Maybe<String_Comparison_Exp>;
  ref_number?: Maybe<String_Comparison_Exp>;
  sales_rep_id?: Maybe<String_Comparison_Exp>;
  site_id?: Maybe<String_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  sub_group?: Maybe<String_Comparison_Exp>;
  sub_total?: Maybe<Numeric_Comparison_Exp>;
  tax_id?: Maybe<String_Comparison_Exp>;
  tax_rate?: Maybe<Numeric_Comparison_Exp>;
  tax_total?: Maybe<Numeric_Comparison_Exp>;
  time_stamp?: Maybe<String_Comparison_Exp>;
  tip_collected?: Maybe<Numeric_Comparison_Exp>;
  user_name?: Maybe<String_Comparison_Exp>;
  zip?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing integer column in table "orders" */
export type Orders_Inc_Input = {
  accounts_id?: Maybe<Scalars['numeric']>;
  balance_due?: Maybe<Scalars['numeric']>;
  corporate_fees_total?: Maybe<Scalars['numeric']>;
  corporate_payable_total?: Maybe<Scalars['numeric']>;
  correction?: Maybe<Scalars['numeric']>;
  discount_percent?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['numeric']>;
  merchant_fees_total?: Maybe<Scalars['numeric']>;
  order_number?: Maybe<Scalars['numeric']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_rate?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  tip_collected?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  accountsByAccountsId?: Maybe<Accounts_Obj_Rel_Insert_Input>;
  accounts_id?: Maybe<Scalars['numeric']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  balance_due?: Maybe<Scalars['numeric']>;
  city?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['String']>;
  corporate_fees_total?: Maybe<Scalars['numeric']>;
  corporate_payable_total?: Maybe<Scalars['numeric']>;
  correction?: Maybe<Scalars['numeric']>;
  created_by?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['String']>;
  date_completed?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  date_posted?: Maybe<Scalars['String']>;
  discount_percent?: Maybe<Scalars['numeric']>;
  due_date?: Maybe<Scalars['String']>;
  external_ref_id?: Maybe<Scalars['String']>;
  flag_for_review?: Maybe<Scalars['Boolean']>;
  grand_total?: Maybe<Scalars['numeric']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  merchant_fees_total?: Maybe<Scalars['numeric']>;
  note?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['String']>;
  order_number?: Maybe<Scalars['numeric']>;
  order_type?: Maybe<Scalars['String']>;
  original_type?: Maybe<Scalars['String']>;
  post_to_accounting?: Maybe<Scalars['Boolean']>;
  postedtocorporate?: Maybe<Scalars['Boolean']>;
  print_style_id?: Maybe<Scalars['String']>;
  ref_number?: Maybe<Scalars['String']>;
  sales_rep_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_group?: Maybe<Scalars['String']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_id?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  time_stamp?: Maybe<Scalars['String']>;
  tip_collected?: Maybe<Scalars['numeric']>;
  user_name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  accounts_id?: Maybe<Scalars['numeric']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  balance_due?: Maybe<Scalars['numeric']>;
  city?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['String']>;
  corporate_fees_total?: Maybe<Scalars['numeric']>;
  corporate_payable_total?: Maybe<Scalars['numeric']>;
  correction?: Maybe<Scalars['numeric']>;
  created_by?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['String']>;
  date_completed?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  date_posted?: Maybe<Scalars['String']>;
  discount_percent?: Maybe<Scalars['numeric']>;
  due_date?: Maybe<Scalars['String']>;
  external_ref_id?: Maybe<Scalars['String']>;
  grand_total?: Maybe<Scalars['numeric']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  merchant_fees_total?: Maybe<Scalars['numeric']>;
  note?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['String']>;
  order_number?: Maybe<Scalars['numeric']>;
  order_type?: Maybe<Scalars['String']>;
  original_type?: Maybe<Scalars['String']>;
  print_style_id?: Maybe<Scalars['String']>;
  ref_number?: Maybe<Scalars['String']>;
  sales_rep_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_group?: Maybe<Scalars['String']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_id?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  time_stamp?: Maybe<Scalars['String']>;
  tip_collected?: Maybe<Scalars['numeric']>;
  user_name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  account_name?: Maybe<Order_By>;
  accounts_id?: Maybe<Order_By>;
  address1?: Maybe<Order_By>;
  address2?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  date_completed?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  date_posted?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  external_ref_id?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  order_type?: Maybe<Order_By>;
  original_type?: Maybe<Order_By>;
  print_style_id?: Maybe<Order_By>;
  ref_number?: Maybe<Order_By>;
  sales_rep_id?: Maybe<Order_By>;
  site_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  sub_group?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_id?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  time_stamp?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
  user_name?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  accounts_id?: Maybe<Scalars['numeric']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  balance_due?: Maybe<Scalars['numeric']>;
  city?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['String']>;
  corporate_fees_total?: Maybe<Scalars['numeric']>;
  corporate_payable_total?: Maybe<Scalars['numeric']>;
  correction?: Maybe<Scalars['numeric']>;
  created_by?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['String']>;
  date_completed?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  date_posted?: Maybe<Scalars['String']>;
  discount_percent?: Maybe<Scalars['numeric']>;
  due_date?: Maybe<Scalars['String']>;
  external_ref_id?: Maybe<Scalars['String']>;
  grand_total?: Maybe<Scalars['numeric']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  merchant_fees_total?: Maybe<Scalars['numeric']>;
  note?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['String']>;
  order_number?: Maybe<Scalars['numeric']>;
  order_type?: Maybe<Scalars['String']>;
  original_type?: Maybe<Scalars['String']>;
  print_style_id?: Maybe<Scalars['String']>;
  ref_number?: Maybe<Scalars['String']>;
  sales_rep_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_group?: Maybe<Scalars['String']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_id?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  time_stamp?: Maybe<Scalars['String']>;
  tip_collected?: Maybe<Scalars['numeric']>;
  user_name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  account_name?: Maybe<Order_By>;
  accounts_id?: Maybe<Order_By>;
  address1?: Maybe<Order_By>;
  address2?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  date_completed?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  date_posted?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  external_ref_id?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  order_type?: Maybe<Order_By>;
  original_type?: Maybe<Order_By>;
  print_style_id?: Maybe<Order_By>;
  ref_number?: Maybe<Order_By>;
  sales_rep_id?: Maybe<Order_By>;
  site_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  sub_group?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_id?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  time_stamp?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
  user_name?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** ordering options when selecting data from "orders" */
export type Orders_Order_By = {
  account_id?: Maybe<Order_By>;
  account_name?: Maybe<Order_By>;
  accountsByAccountsId?: Maybe<Accounts_Order_By>;
  accounts_id?: Maybe<Order_By>;
  address1?: Maybe<Order_By>;
  address2?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  company_id?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  created_on?: Maybe<Order_By>;
  date_completed?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  date_posted?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  due_date?: Maybe<Order_By>;
  external_ref_id?: Maybe<Order_By>;
  flag_for_review?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  group?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  note?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  order_type?: Maybe<Order_By>;
  original_type?: Maybe<Order_By>;
  post_to_accounting?: Maybe<Order_By>;
  postedtocorporate?: Maybe<Order_By>;
  print_style_id?: Maybe<Order_By>;
  ref_number?: Maybe<Order_By>;
  sales_rep_id?: Maybe<Order_By>;
  site_id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  sub_group?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_id?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  time_stamp?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
  user_name?: Maybe<Order_By>;
  zip?: Maybe<Order_By>;
};

/** primary key columns input for table: "orders" */
export type Orders_Pk_Columns_Input = {
  id: Scalars['numeric'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AccountName = 'account_name',
  /** column name */
  AccountsId = 'accounts_id',
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  BalanceDue = 'balance_due',
  /** column name */
  City = 'city',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CorporateFeesTotal = 'corporate_fees_total',
  /** column name */
  CorporatePayableTotal = 'corporate_payable_total',
  /** column name */
  Correction = 'correction',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  DateCompleted = 'date_completed',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DatePosted = 'date_posted',
  /** column name */
  DiscountPercent = 'discount_percent',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  ExternalRefId = 'external_ref_id',
  /** column name */
  FlagForReview = 'flag_for_review',
  /** column name */
  GrandTotal = 'grand_total',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  MerchantFeesTotal = 'merchant_fees_total',
  /** column name */
  Note = 'note',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  OrderType = 'order_type',
  /** column name */
  OriginalType = 'original_type',
  /** column name */
  PostToAccounting = 'post_to_accounting',
  /** column name */
  Postedtocorporate = 'postedtocorporate',
  /** column name */
  PrintStyleId = 'print_style_id',
  /** column name */
  RefNumber = 'ref_number',
  /** column name */
  SalesRepId = 'sales_rep_id',
  /** column name */
  SiteId = 'site_id',
  /** column name */
  State = 'state',
  /** column name */
  SubGroup = 'sub_group',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxId = 'tax_id',
  /** column name */
  TaxRate = 'tax_rate',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  TimeStamp = 'time_stamp',
  /** column name */
  TipCollected = 'tip_collected',
  /** column name */
  UserName = 'user_name',
  /** column name */
  Zip = 'zip'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  account_id?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  accounts_id?: Maybe<Scalars['numeric']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  balance_due?: Maybe<Scalars['numeric']>;
  city?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['String']>;
  corporate_fees_total?: Maybe<Scalars['numeric']>;
  corporate_payable_total?: Maybe<Scalars['numeric']>;
  correction?: Maybe<Scalars['numeric']>;
  created_by?: Maybe<Scalars['String']>;
  created_on?: Maybe<Scalars['String']>;
  date_completed?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  date_posted?: Maybe<Scalars['String']>;
  discount_percent?: Maybe<Scalars['numeric']>;
  due_date?: Maybe<Scalars['String']>;
  external_ref_id?: Maybe<Scalars['String']>;
  flag_for_review?: Maybe<Scalars['Boolean']>;
  grand_total?: Maybe<Scalars['numeric']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['numeric']>;
  merchant_fees_total?: Maybe<Scalars['numeric']>;
  note?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['String']>;
  order_number?: Maybe<Scalars['numeric']>;
  order_type?: Maybe<Scalars['String']>;
  original_type?: Maybe<Scalars['String']>;
  post_to_accounting?: Maybe<Scalars['Boolean']>;
  postedtocorporate?: Maybe<Scalars['Boolean']>;
  print_style_id?: Maybe<Scalars['String']>;
  ref_number?: Maybe<Scalars['String']>;
  sales_rep_id?: Maybe<Scalars['String']>;
  site_id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  sub_group?: Maybe<Scalars['String']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_id?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  time_stamp?: Maybe<Scalars['String']>;
  tip_collected?: Maybe<Scalars['numeric']>;
  user_name?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  accounts_id?: Maybe<Scalars['Float']>;
  balance_due?: Maybe<Scalars['Float']>;
  corporate_fees_total?: Maybe<Scalars['Float']>;
  corporate_payable_total?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  discount_percent?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  merchant_fees_total?: Maybe<Scalars['Float']>;
  order_number?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  tip_collected?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  accounts_id?: Maybe<Scalars['Float']>;
  balance_due?: Maybe<Scalars['Float']>;
  corporate_fees_total?: Maybe<Scalars['Float']>;
  corporate_payable_total?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  discount_percent?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  merchant_fees_total?: Maybe<Scalars['Float']>;
  order_number?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  tip_collected?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  accounts_id?: Maybe<Scalars['Float']>;
  balance_due?: Maybe<Scalars['Float']>;
  corporate_fees_total?: Maybe<Scalars['Float']>;
  corporate_payable_total?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  discount_percent?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  merchant_fees_total?: Maybe<Scalars['Float']>;
  order_number?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  tip_collected?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  accounts_id?: Maybe<Scalars['numeric']>;
  balance_due?: Maybe<Scalars['numeric']>;
  corporate_fees_total?: Maybe<Scalars['numeric']>;
  corporate_payable_total?: Maybe<Scalars['numeric']>;
  correction?: Maybe<Scalars['numeric']>;
  discount_percent?: Maybe<Scalars['numeric']>;
  grand_total?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['numeric']>;
  merchant_fees_total?: Maybe<Scalars['numeric']>;
  order_number?: Maybe<Scalars['numeric']>;
  sub_total?: Maybe<Scalars['numeric']>;
  tax_rate?: Maybe<Scalars['numeric']>;
  tax_total?: Maybe<Scalars['numeric']>;
  tip_collected?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AccountName = 'account_name',
  /** column name */
  AccountsId = 'accounts_id',
  /** column name */
  Address1 = 'address1',
  /** column name */
  Address2 = 'address2',
  /** column name */
  BalanceDue = 'balance_due',
  /** column name */
  City = 'city',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CorporateFeesTotal = 'corporate_fees_total',
  /** column name */
  CorporatePayableTotal = 'corporate_payable_total',
  /** column name */
  Correction = 'correction',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CreatedOn = 'created_on',
  /** column name */
  DateCompleted = 'date_completed',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DatePosted = 'date_posted',
  /** column name */
  DiscountPercent = 'discount_percent',
  /** column name */
  DueDate = 'due_date',
  /** column name */
  ExternalRefId = 'external_ref_id',
  /** column name */
  FlagForReview = 'flag_for_review',
  /** column name */
  GrandTotal = 'grand_total',
  /** column name */
  Group = 'group',
  /** column name */
  Id = 'id',
  /** column name */
  MerchantFeesTotal = 'merchant_fees_total',
  /** column name */
  Note = 'note',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  OrderType = 'order_type',
  /** column name */
  OriginalType = 'original_type',
  /** column name */
  PostToAccounting = 'post_to_accounting',
  /** column name */
  Postedtocorporate = 'postedtocorporate',
  /** column name */
  PrintStyleId = 'print_style_id',
  /** column name */
  RefNumber = 'ref_number',
  /** column name */
  SalesRepId = 'sales_rep_id',
  /** column name */
  SiteId = 'site_id',
  /** column name */
  State = 'state',
  /** column name */
  SubGroup = 'sub_group',
  /** column name */
  SubTotal = 'sub_total',
  /** column name */
  TaxId = 'tax_id',
  /** column name */
  TaxRate = 'tax_rate',
  /** column name */
  TaxTotal = 'tax_total',
  /** column name */
  TimeStamp = 'time_stamp',
  /** column name */
  TipCollected = 'tip_collected',
  /** column name */
  UserName = 'user_name',
  /** column name */
  Zip = 'zip'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  accounts_id?: Maybe<Scalars['Float']>;
  balance_due?: Maybe<Scalars['Float']>;
  corporate_fees_total?: Maybe<Scalars['Float']>;
  corporate_payable_total?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  discount_percent?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  merchant_fees_total?: Maybe<Scalars['Float']>;
  order_number?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  tip_collected?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  accounts_id?: Maybe<Scalars['Float']>;
  balance_due?: Maybe<Scalars['Float']>;
  corporate_fees_total?: Maybe<Scalars['Float']>;
  corporate_payable_total?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  discount_percent?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  merchant_fees_total?: Maybe<Scalars['Float']>;
  order_number?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  tip_collected?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  accounts_id?: Maybe<Scalars['Float']>;
  balance_due?: Maybe<Scalars['Float']>;
  corporate_fees_total?: Maybe<Scalars['Float']>;
  corporate_payable_total?: Maybe<Scalars['Float']>;
  correction?: Maybe<Scalars['Float']>;
  discount_percent?: Maybe<Scalars['Float']>;
  grand_total?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  merchant_fees_total?: Maybe<Scalars['Float']>;
  order_number?: Maybe<Scalars['Float']>;
  sub_total?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  tax_total?: Maybe<Scalars['Float']>;
  tip_collected?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  accounts_id?: Maybe<Order_By>;
  balance_due?: Maybe<Order_By>;
  corporate_fees_total?: Maybe<Order_By>;
  corporate_payable_total?: Maybe<Order_By>;
  correction?: Maybe<Order_By>;
  discount_percent?: Maybe<Order_By>;
  grand_total?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  merchant_fees_total?: Maybe<Order_By>;
  order_number?: Maybe<Order_By>;
  sub_total?: Maybe<Order_By>;
  tax_rate?: Maybe<Order_By>;
  tax_total?: Maybe<Order_By>;
  tip_collected?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "calls" */
  calls: Array<Calls>;
  /** fetch aggregated fields from the table: "calls" */
  calls_aggregate: Calls_Aggregate;
  /** fetch data from the table: "calls" using primary key columns */
  calls_by_pk?: Maybe<Calls>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
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
export type Query_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** query root */
export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['numeric'];
};


/** query root */
export type Query_RootCallsArgs = {
  distinct_on?: Maybe<Array<Calls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calls_Order_By>>;
  where?: Maybe<Calls_Bool_Exp>;
};


/** query root */
export type Query_RootCalls_AggregateArgs = {
  distinct_on?: Maybe<Array<Calls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calls_Order_By>>;
  where?: Maybe<Calls_Bool_Exp>;
};


/** query root */
export type Query_RootCalls_By_PkArgs = {
  id: Scalars['numeric'];
};


/** query root */
export type Query_RootEmployeesArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


/** query root */
export type Query_RootEmployees_AggregateArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


/** query root */
export type Query_RootEmployees_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_By_PkArgs = {
  id: Scalars['numeric'];
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
  id: Scalars['String'];
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
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "calls" */
  calls: Array<Calls>;
  /** fetch aggregated fields from the table: "calls" */
  calls_aggregate: Calls_Aggregate;
  /** fetch data from the table: "calls" using primary key columns */
  calls_by_pk?: Maybe<Calls>;
  /** fetch data from the table: "employees" */
  employees: Array<Employees>;
  /** fetch aggregated fields from the table: "employees" */
  employees_aggregate: Employees_Aggregate;
  /** fetch data from the table: "employees" using primary key columns */
  employees_by_pk?: Maybe<Employees>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
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
export type Subscription_RootAccountsArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Accounts_Order_By>>;
  where?: Maybe<Accounts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['numeric'];
};


/** subscription root */
export type Subscription_RootCallsArgs = {
  distinct_on?: Maybe<Array<Calls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calls_Order_By>>;
  where?: Maybe<Calls_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCalls_AggregateArgs = {
  distinct_on?: Maybe<Array<Calls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Calls_Order_By>>;
  where?: Maybe<Calls_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCalls_By_PkArgs = {
  id: Scalars['numeric'];
};


/** subscription root */
export type Subscription_RootEmployeesArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEmployees_AggregateArgs = {
  distinct_on?: Maybe<Array<Employees_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Employees_Order_By>>;
  where?: Maybe<Employees_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEmployees_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['numeric'];
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
  id: Scalars['String'];
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
  id: Scalars['String'];
};

/** columns and relationships of "timesheets" */
export type Timesheets = {
  __typename?: 'timesheets';
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id: Scalars['String'];
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  usersByUsersId?: Maybe<Users>;
  users_id?: Maybe<Scalars['String']>;
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
  id?: Maybe<String_Comparison_Exp>;
  start?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  usersByUsersId?: Maybe<Users_Bool_Exp>;
  users_id?: Maybe<String_Comparison_Exp>;
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
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  usersByUsersId?: Maybe<Users_Obj_Rel_Insert_Input>;
  users_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Timesheets_Max_Fields = {
  __typename?: 'timesheets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "timesheets" */
export type Timesheets_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Timesheets_Min_Fields = {
  __typename?: 'timesheets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "timesheets" */
export type Timesheets_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_id?: Maybe<Order_By>;
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
  usersByUsersId?: Maybe<Users_Order_By>;
  users_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "timesheets" */
export type Timesheets_Pk_Columns_Input = {
  id: Scalars['String'];
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
  UsersId = 'users_id'
}

/** input type for updating data in table "timesheets" */
export type Timesheets_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  end?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users_id?: Maybe<Scalars['String']>;
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
  UsersId = 'users_id'
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
  active_timesheet_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  /** An object relationship */
  employeesByEmployeesId?: Maybe<Employees>;
  employees_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isLogged_in?: Maybe<Scalars['Boolean']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  /** An array relationship */
  timesheetssByUsersId: Array<Timesheets>;
  /** An aggregated array relationship */
  timesheetssByUsersId_aggregate: Timesheets_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "users" */
export type UsersTimesheetssByUsersIdArgs = {
  distinct_on?: Maybe<Array<Timesheets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Timesheets_Order_By>>;
  where?: Maybe<Timesheets_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTimesheetssByUsersId_AggregateArgs = {
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
  active_timesheet_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  employeesByEmployeesId?: Maybe<Employees_Bool_Exp>;
  employees_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  isLogged_in?: Maybe<Boolean_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  timesheetssByUsersId?: Maybe<Timesheets_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  active_timesheet_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  employeesByEmployeesId?: Maybe<Employees_Obj_Rel_Insert_Input>;
  employees_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isLogged_in?: Maybe<Scalars['Boolean']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  timesheetssByUsersId?: Maybe<Timesheets_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  active_timesheet_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  active_timesheet_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  employees_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  active_timesheet_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  active_timesheet_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  employees_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
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
  active_timesheet_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  employeesByEmployeesId?: Maybe<Employees_Order_By>;
  employees_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isLogged_in?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  timesheetssByUsersId_aggregate?: Maybe<Timesheets_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ActiveTimesheetId = 'active_timesheet_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmployeesId = 'employees_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsLoggedIn = 'isLogged_in',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  active_timesheet_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  employees_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isLogged_in?: Maybe<Scalars['Boolean']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ActiveTimesheetId = 'active_timesheet_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmployeesId = 'employees_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsLoggedIn = 'isLogged_in',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


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

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  active_timesheet_id?: Maybe<Scalars['String']>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'active_timesheet_id'>
  )> }
);

export type SetLastSeenMutationVariables = Exact<{
  id: Scalars['String'];
  time?: Maybe<Scalars['timestamptz']>;
}>;


export type SetLastSeenMutation = (
  { __typename?: 'mutation_root' }
  & { update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'active_timesheet_id'>
  )> }
);

export type DeleteUserByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;


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

export type CreateTimesheetMutationVariables = Exact<{
  users_id: Scalars['String'];
}>;


export type CreateTimesheetMutation = (
  { __typename?: 'mutation_root' }
  & { insert_timesheets?: Maybe<(
    { __typename?: 'timesheets_mutation_response' }
    & Pick<Timesheets_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'timesheets' }
      & Pick<Timesheets, 'start' | 'id'>
    )> }
  )> }
);

export type UpdateTimesheetMutationVariables = Exact<{
  id: Scalars['String'];
  end?: Maybe<Scalars['timestamptz']>;
  start?: Maybe<Scalars['timestamptz']>;
}>;


export type UpdateTimesheetMutation = (
  { __typename?: 'mutation_root' }
  & { update_timesheets_by_pk?: Maybe<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'start' | 'end' | 'id'>
  )> }
);

export type DeleteTimesheetByIdMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTimesheetByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_timesheets?: Maybe<(
    { __typename?: 'timesheets_mutation_response' }
    & Pick<Timesheets_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'timesheets' }
      & Pick<Timesheets, 'id' | 'created_at' | 'updated_at'>
    )> }
  )> }
);

export type CreateAccountMutationVariables = Exact<{
  account_name: Scalars['String'];
}>;


export type CreateAccountMutation = (
  { __typename?: 'mutation_root' }
  & { insert_accounts?: Maybe<(
    { __typename?: 'accounts_mutation_response' }
    & Pick<Accounts_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'accounts' }
      & Pick<Accounts, 'id' | 'account_name' | 'created_at'>
    )> }
  )> }
);

export type UpdateAccountMutationVariables = Exact<{
  id: Scalars['numeric'];
  account_name?: Maybe<Scalars['String']>;
}>;


export type UpdateAccountMutation = (
  { __typename?: 'mutation_root' }
  & { update_accounts_by_pk?: Maybe<(
    { __typename?: 'accounts' }
    & Pick<Accounts, 'id' | 'account_name'>
  )> }
);

export type DeleteAccountByIdMutationVariables = Exact<{
  id: Scalars['numeric'];
}>;


export type DeleteAccountByIdMutation = (
  { __typename?: 'mutation_root' }
  & { delete_accounts?: Maybe<(
    { __typename?: 'accounts_mutation_response' }
    & Pick<Accounts_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'accounts' }
      & Pick<Accounts, 'account_name' | 'created_at' | 'updated_at' | 'id'>
    )> }
  )> }
);

export type UserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'email' | 'id' | 'active_timesheet_id' | 'created_at' | 'updated_at'>
  )> }
);

export type AccountQueryVariables = Exact<{
  accountId: Scalars['numeric'];
}>;


export type AccountQuery = (
  { __typename?: 'query_root' }
  & { accounts_by_pk?: Maybe<(
    { __typename?: 'accounts' }
    & Pick<Accounts, 'account_name' | 'search_address' | 'email' | 'phone_list'>
  )> }
);

export type AllAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAccountsQuery = (
  { __typename?: 'query_root' }
  & { accounts: Array<(
    { __typename?: 'accounts' }
    & Pick<Accounts, 'account_name' | 'search_address' | 'email' | 'phone_list'>
  )> }
);

export type UserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserByEmailQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'created_at' | 'active_timesheet_id' | 'email' | 'password' | 'updated_at'>
  )> }
);

export type TimesheetQueryVariables = Exact<{
  timesheetId: Scalars['String'];
}>;


export type TimesheetQuery = (
  { __typename?: 'query_root' }
  & { timesheets_by_pk?: Maybe<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'created_at' | 'updated_at'>
  )> }
);

export type TimesheetsByUserIdQueryVariables = Exact<{
  users_id: Scalars['String'];
}>;


export type TimesheetsByUserIdQuery = (
  { __typename?: 'query_root' }
  & { timesheets: Array<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'id' | 'start' | 'end' | 'updated_at' | 'created_at'>
  )> }
);

export type UserSubscribeSubscriptionVariables = Exact<{
  users_id: Scalars['String'];
}>;


export type UserSubscribeSubscription = (
  { __typename?: 'subscription_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'email' | 'id' | 'active_timesheet_id' | 'created_at' | 'updated_at'>
  )> }
);

export type UserLoggedInSubscriptionVariables = Exact<{
  users_id: Scalars['String'];
}>;


export type UserLoggedInSubscription = (
  { __typename?: 'subscription_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'email' | 'id' | 'active_timesheet_id' | 'created_at' | 'updated_at'>
  )> }
);

export type UserByEmailSubscribeSubscriptionVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserByEmailSubscribeSubscription = (
  { __typename?: 'subscription_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'created_at' | 'active_timesheet_id' | 'email' | 'password' | 'updated_at'>
  )> }
);

export type UsersSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type UsersSubscribeSubscription = (
  { __typename?: 'subscription_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'created_at' | 'active_timesheet_id' | 'email' | 'password' | 'updated_at'>
  )> }
);

export type TimesheetSubscribeSubscriptionVariables = Exact<{
  timesheetId: Scalars['String'];
}>;


export type TimesheetSubscribeSubscription = (
  { __typename?: 'subscription_root' }
  & { timesheets_by_pk?: Maybe<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'created_at' | 'updated_at'>
  )> }
);

export type TimesheetsByusers_IdSubscribeSubscriptionVariables = Exact<{
  users_id: Scalars['String'];
}>;


export type TimesheetsByusers_IdSubscribeSubscription = (
  { __typename?: 'subscription_root' }
  & { timesheets: Array<(
    { __typename?: 'timesheets' }
    & Pick<Timesheets, 'id' | 'start' | 'end' | 'updated_at' | 'created_at'>
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
    mutation UpdateUser($id: String!, $active_timesheet_id: String) {
  update_users_by_pk(
    pk_columns: {id: $id}
    _set: {active_timesheet_id: $active_timesheet_id}
  ) {
    id
    active_timesheet_id
  }
}
    `;
export const SetLastSeenDocument = gql`
    mutation SetLastSeen($id: String!, $time: timestamptz) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {last_seen: $time}) {
    id
    active_timesheet_id
  }
}
    `;
export const DeleteUserByIdDocument = gql`
    mutation DeleteUserById($id: String!) {
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
    mutation CreateTimesheet($users_id: String!) {
  insert_timesheets(objects: {users_id: $users_id}) {
    affected_rows
    returning {
      start
      id
    }
  }
}
    `;
export const UpdateTimesheetDocument = gql`
    mutation UpdateTimesheet($id: String!, $end: timestamptz, $start: timestamptz) {
  update_timesheets_by_pk(pk_columns: {id: $id}, _set: {end: $end}) {
    start
    end
    id
  }
}
    `;
export const DeleteTimesheetByIdDocument = gql`
    mutation DeleteTimesheetById($id: String!) {
  delete_timesheets(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      id
      created_at
      updated_at
    }
  }
}
    `;
export const CreateAccountDocument = gql`
    mutation CreateAccount($account_name: String!) {
  insert_accounts(objects: {account_name: $account_name}) {
    affected_rows
    returning {
      id
      account_name
      created_at
    }
  }
}
    `;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($id: numeric!, $account_name: String) {
  update_accounts_by_pk(
    pk_columns: {id: $id}
    _set: {account_name: $account_name}
  ) {
    id
    account_name
  }
}
    `;
export const DeleteAccountByIdDocument = gql`
    mutation DeleteAccountById($id: numeric!) {
  delete_accounts(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      account_name
      created_at
      updated_at
      id
    }
  }
}
    `;
export const UserDocument = gql`
    query User($userId: String!) {
  users_by_pk(id: $userId) {
    email
    id
    active_timesheet_id
    created_at
    updated_at
  }
}
    `;
export const AccountDocument = gql`
    query Account($accountId: numeric!) {
  accounts_by_pk(id: $accountId) {
    account_name
    search_address
    email
    phone_list
  }
}
    `;
export const AllAccountsDocument = gql`
    query AllAccounts {
  accounts {
    account_name
    search_address
    email
    phone_list
  }
}
    `;
export const UserByEmailDocument = gql`
    query UserByEmail($email: String!) {
  users(distinct_on: email, limit: 1, where: {email: {_eq: $email}}) {
    id
    created_at
    active_timesheet_id
    email
    password
    updated_at
  }
}
    `;
export const TimesheetDocument = gql`
    query Timesheet($timesheetId: String!) {
  timesheets_by_pk(id: $timesheetId) {
    created_at
    updated_at
  }
}
    `;
export const TimesheetsByUserIdDocument = gql`
    query TimesheetsByUserId($users_id: String!) {
  timesheets(where: {users_id: {_eq: $users_id}}) {
    id
    start
    end
    updated_at
    created_at
    updated_at
  }
}
    `;
export const UserSubscribeDocument = gql`
    subscription UserSubscribe($users_id: String!) {
  users_by_pk(id: $users_id) {
    email
    id
    active_timesheet_id
    created_at
    updated_at
  }
}
    `;
export const UserLoggedInDocument = gql`
    subscription userLoggedIn($users_id: String!) {
  users_by_pk(id: $users_id) {
    email
    id
    active_timesheet_id
    created_at
    updated_at
  }
}
    `;
export const UserByEmailSubscribeDocument = gql`
    subscription UserByEmailSubscribe($email: String!) {
  users(distinct_on: email, limit: 1, where: {email: {_eq: $email}}) {
    id
    created_at
    active_timesheet_id
    email
    password
    updated_at
  }
}
    `;
export const UsersSubscribeDocument = gql`
    subscription UsersSubscribe {
  users {
    id
    created_at
    active_timesheet_id
    email
    password
    updated_at
  }
}
    `;
export const TimesheetSubscribeDocument = gql`
    subscription TimesheetSubscribe($timesheetId: String!) {
  timesheets_by_pk(id: $timesheetId) {
    created_at
    updated_at
  }
}
    `;
export const TimesheetsByusers_IdSubscribeDocument = gql`
    subscription TimesheetsByusers_idSubscribe($users_id: String!) {
  timesheets(where: {users_id: {_eq: $users_id}}) {
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
    SetLastSeen(variables: SetLastSeenMutationVariables): Promise<SetLastSeenMutation> {
      return withWrapper(() => client.request<SetLastSeenMutation>(print(SetLastSeenDocument), variables));
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
    CreateAccount(variables: CreateAccountMutationVariables): Promise<CreateAccountMutation> {
      return withWrapper(() => client.request<CreateAccountMutation>(print(CreateAccountDocument), variables));
    },
    UpdateAccount(variables: UpdateAccountMutationVariables): Promise<UpdateAccountMutation> {
      return withWrapper(() => client.request<UpdateAccountMutation>(print(UpdateAccountDocument), variables));
    },
    DeleteAccountById(variables: DeleteAccountByIdMutationVariables): Promise<DeleteAccountByIdMutation> {
      return withWrapper(() => client.request<DeleteAccountByIdMutation>(print(DeleteAccountByIdDocument), variables));
    },
    User(variables: UserQueryVariables): Promise<UserQuery> {
      return withWrapper(() => client.request<UserQuery>(print(UserDocument), variables));
    },
    Account(variables: AccountQueryVariables): Promise<AccountQuery> {
      return withWrapper(() => client.request<AccountQuery>(print(AccountDocument), variables));
    },
    AllAccounts(variables?: AllAccountsQueryVariables): Promise<AllAccountsQuery> {
      return withWrapper(() => client.request<AllAccountsQuery>(print(AllAccountsDocument), variables));
    },
    UserByEmail(variables: UserByEmailQueryVariables): Promise<UserByEmailQuery> {
      return withWrapper(() => client.request<UserByEmailQuery>(print(UserByEmailDocument), variables));
    },
    Timesheet(variables: TimesheetQueryVariables): Promise<TimesheetQuery> {
      return withWrapper(() => client.request<TimesheetQuery>(print(TimesheetDocument), variables));
    },
    TimesheetsByUserId(variables: TimesheetsByUserIdQueryVariables): Promise<TimesheetsByUserIdQuery> {
      return withWrapper(() => client.request<TimesheetsByUserIdQuery>(print(TimesheetsByUserIdDocument), variables));
    },
    UserSubscribe(variables: UserSubscribeSubscriptionVariables): Promise<UserSubscribeSubscription> {
      return withWrapper(() => client.request<UserSubscribeSubscription>(print(UserSubscribeDocument), variables));
    },
    userLoggedIn(variables: UserLoggedInSubscriptionVariables): Promise<UserLoggedInSubscription> {
      return withWrapper(() => client.request<UserLoggedInSubscription>(print(UserLoggedInDocument), variables));
    },
    UserByEmailSubscribe(variables: UserByEmailSubscribeSubscriptionVariables): Promise<UserByEmailSubscribeSubscription> {
      return withWrapper(() => client.request<UserByEmailSubscribeSubscription>(print(UserByEmailSubscribeDocument), variables));
    },
    UsersSubscribe(variables?: UsersSubscribeSubscriptionVariables): Promise<UsersSubscribeSubscription> {
      return withWrapper(() => client.request<UsersSubscribeSubscription>(print(UsersSubscribeDocument), variables));
    },
    TimesheetSubscribe(variables: TimesheetSubscribeSubscriptionVariables): Promise<TimesheetSubscribeSubscription> {
      return withWrapper(() => client.request<TimesheetSubscribeSubscription>(print(TimesheetSubscribeDocument), variables));
    },
    TimesheetsByusers_idSubscribe(variables: TimesheetsByusers_IdSubscribeSubscriptionVariables): Promise<TimesheetsByusers_IdSubscribeSubscription> {
      return withWrapper(() => client.request<TimesheetsByusers_IdSubscribeSubscription>(print(TimesheetsByusers_IdSubscribeDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;