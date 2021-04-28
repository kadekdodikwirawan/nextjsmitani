import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  server?: Maybe<Server>;
  files?: Maybe<Array<Maybe<Directus_Files>>>;
  items?: Maybe<Items>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<Directus_Files_Filter>;
};

export type Server = {
  __typename?: 'server';
  ping?: Maybe<Scalars['String']>;
};

/** Metadata for all managed file assets */
export type Directus_Files = {
  __typename?: 'directus_files';
  folder?: Maybe<Scalars['String']>;
  modified_by?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  storage?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_on?: Maybe<Scalars['String']>;
  modified_on?: Maybe<Scalars['String']>;
  charset?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  metadata?: Maybe<Scalars['JSON']>;
  storage_divider?: Maybe<Scalars['String']>;
};


export type Directus_Files_Filter = {
  _and?: Maybe<Array<Maybe<Directus_Files_Filter>>>;
  _or?: Maybe<Array<Maybe<Directus_Files_Filter>>>;
  folder?: Maybe<Directus_Files_Folder_Filter_Operators>;
  modified_by?: Maybe<Directus_Files_Modified_By_Filter_Operators>;
  uploaded_by?: Maybe<Directus_Files_Uploaded_By_Filter_Operators>;
  id?: Maybe<Directus_Files_Id_Filter_Operators>;
  storage?: Maybe<Directus_Files_Storage_Filter_Operators>;
  filename_disk?: Maybe<Directus_Files_Filename_Disk_Filter_Operators>;
  filename_download?: Maybe<Directus_Files_Filename_Download_Filter_Operators>;
  title?: Maybe<Directus_Files_Title_Filter_Operators>;
  type?: Maybe<Directus_Files_Type_Filter_Operators>;
  uploaded_on?: Maybe<Directus_Files_Uploaded_On_Filter_Operators>;
  modified_on?: Maybe<Directus_Files_Modified_On_Filter_Operators>;
  charset?: Maybe<Directus_Files_Charset_Filter_Operators>;
  filesize?: Maybe<Directus_Files_Filesize_Filter_Operators>;
  width?: Maybe<Directus_Files_Width_Filter_Operators>;
  height?: Maybe<Directus_Files_Height_Filter_Operators>;
  duration?: Maybe<Directus_Files_Duration_Filter_Operators>;
  embed?: Maybe<Directus_Files_Embed_Filter_Operators>;
  description?: Maybe<Directus_Files_Description_Filter_Operators>;
  location?: Maybe<Directus_Files_Location_Filter_Operators>;
  tags?: Maybe<Directus_Files_Tags_Filter_Operators>;
  metadata?: Maybe<Directus_Files_Metadata_Filter_Operators>;
  storage_divider?: Maybe<Directus_Files_Storage_Divider_Filter_Operators>;
};

export type Directus_Files_Folder_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Modified_By_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Uploaded_By_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Id_Filter_Operators = {
  _eq?: Maybe<Scalars['ID']>;
  _neq?: Maybe<Scalars['ID']>;
  _contains?: Maybe<Scalars['ID']>;
  _ncontains?: Maybe<Scalars['ID']>;
  _in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
  _gt?: Maybe<Scalars['ID']>;
  _gte?: Maybe<Scalars['ID']>;
  _lt?: Maybe<Scalars['ID']>;
  _lte?: Maybe<Scalars['ID']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Storage_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Filename_Disk_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Filename_Download_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Title_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Type_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Uploaded_On_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Modified_On_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Charset_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Filesize_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Width_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Height_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Duration_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Embed_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Description_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Location_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Tags_Filter_Operators = {
  _eq?: Maybe<Scalars['JSON']>;
  _neq?: Maybe<Scalars['JSON']>;
  _contains?: Maybe<Scalars['JSON']>;
  _ncontains?: Maybe<Scalars['JSON']>;
  _in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  _gt?: Maybe<Scalars['JSON']>;
  _gte?: Maybe<Scalars['JSON']>;
  _lt?: Maybe<Scalars['JSON']>;
  _lte?: Maybe<Scalars['JSON']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Metadata_Filter_Operators = {
  _eq?: Maybe<Scalars['JSON']>;
  _neq?: Maybe<Scalars['JSON']>;
  _contains?: Maybe<Scalars['JSON']>;
  _ncontains?: Maybe<Scalars['JSON']>;
  _in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  _gt?: Maybe<Scalars['JSON']>;
  _gte?: Maybe<Scalars['JSON']>;
  _lt?: Maybe<Scalars['JSON']>;
  _lte?: Maybe<Scalars['JSON']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Directus_Files_Storage_Divider_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Items = {
  __typename?: 'items';
  user_proyek?: Maybe<Array<Maybe<User_Proyek>>>;
  proyek?: Maybe<Array<Maybe<Proyek>>>;
};


export type ItemsUser_ProyekArgs = {
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<User_Proyek_Filter>;
};


export type ItemsProyekArgs = {
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<Proyek_Filter>;
};

/** Mulai proyek anda disini */
export type User_Proyek = {
  __typename?: 'user_proyek';
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
  date_updated?: Maybe<Scalars['String']>;
  proyeks?: Maybe<Proyek>;
  jumlah?: Maybe<Scalars['Int']>;
  via_rekening?: Maybe<Scalars['String']>;
};

/** Kumpulan proyek yang ada */
export type Proyek = {
  __typename?: 'proyek';
  id?: Maybe<User_Proyek>;
  status?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['String']>;
  user_updated?: Maybe<Scalars['String']>;
  date_updated?: Maybe<Scalars['String']>;
  judul?: Maybe<Scalars['String']>;
  alamat?: Maybe<Scalars['String']>;
  deskripsi?: Maybe<Scalars['String']>;
  periode?: Maybe<Scalars['Int']>;
  persentase?: Maybe<Scalars['Int']>;
  harga_proyek?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['Int']>;
  dana_terkumpul?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  proposal?: Maybe<Scalars['String']>;
  user_proyek?: Maybe<Array<Maybe<User_Proyek>>>;
};


/** Kumpulan proyek yang ada */
export type ProyekUser_ProyekArgs = {
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  filter?: Maybe<User_Proyek_Filter>;
};

export type User_Proyek_Filter = {
  _and?: Maybe<Array<Maybe<User_Proyek_Filter>>>;
  _or?: Maybe<Array<Maybe<User_Proyek_Filter>>>;
  id?: Maybe<User_Proyek_Id_Filter_Operators>;
  status?: Maybe<User_Proyek_Status_Filter_Operators>;
  sort?: Maybe<User_Proyek_Sort_Filter_Operators>;
  user_created?: Maybe<User_Proyek_User_Created_Filter_Operators>;
  date_created?: Maybe<User_Proyek_Date_Created_Filter_Operators>;
  user_updated?: Maybe<User_Proyek_User_Updated_Filter_Operators>;
  date_updated?: Maybe<User_Proyek_Date_Updated_Filter_Operators>;
  proyeks?: Maybe<Proyek_Filter>;
  jumlah?: Maybe<User_Proyek_Jumlah_Filter_Operators>;
  via_rekening?: Maybe<User_Proyek_Via_Rekening_Filter_Operators>;
};

export type User_Proyek_Id_Filter_Operators = {
  _eq?: Maybe<Scalars['ID']>;
  _neq?: Maybe<Scalars['ID']>;
  _contains?: Maybe<Scalars['ID']>;
  _ncontains?: Maybe<Scalars['ID']>;
  _in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
  _gt?: Maybe<Scalars['ID']>;
  _gte?: Maybe<Scalars['ID']>;
  _lt?: Maybe<Scalars['ID']>;
  _lte?: Maybe<Scalars['ID']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_Status_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_Sort_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_User_Created_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_Date_Created_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_User_Updated_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_Date_Updated_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Filter = {
  _and?: Maybe<Array<Maybe<Proyek_Filter>>>;
  _or?: Maybe<Array<Maybe<Proyek_Filter>>>;
  id?: Maybe<User_Proyek_Filter>;
  status?: Maybe<Proyek_Status_Filter_Operators>;
  sort?: Maybe<Proyek_Sort_Filter_Operators>;
  user_created?: Maybe<Proyek_User_Created_Filter_Operators>;
  date_created?: Maybe<Proyek_Date_Created_Filter_Operators>;
  user_updated?: Maybe<Proyek_User_Updated_Filter_Operators>;
  date_updated?: Maybe<Proyek_Date_Updated_Filter_Operators>;
  judul?: Maybe<Proyek_Judul_Filter_Operators>;
  alamat?: Maybe<Proyek_Alamat_Filter_Operators>;
  deskripsi?: Maybe<Proyek_Deskripsi_Filter_Operators>;
  periode?: Maybe<Proyek_Periode_Filter_Operators>;
  persentase?: Maybe<Proyek_Persentase_Filter_Operators>;
  harga_proyek?: Maybe<Proyek_Harga_Proyek_Filter_Operators>;
  slot?: Maybe<Proyek_Slot_Filter_Operators>;
  dana_terkumpul?: Maybe<Proyek_Dana_Terkumpul_Filter_Operators>;
  uuid?: Maybe<Proyek_Uuid_Filter_Operators>;
  thumbnail?: Maybe<Proyek_Thumbnail_Filter_Operators>;
  proposal?: Maybe<Proyek_Proposal_Filter_Operators>;
  user_proyek?: Maybe<User_Proyek_Filter>;
};

export type Proyek_Status_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Sort_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_User_Created_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Date_Created_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_User_Updated_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Date_Updated_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Judul_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Alamat_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Deskripsi_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Periode_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Persentase_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Harga_Proyek_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Slot_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Dana_Terkumpul_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Uuid_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Thumbnail_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type Proyek_Proposal_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_Jumlah_Filter_Operators = {
  _eq?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _contains?: Maybe<Scalars['Int']>;
  _ncontains?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type User_Proyek_Via_Rekening_Filter_Operators = {
  _eq?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _contains?: Maybe<Scalars['String']>;
  _ncontains?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _null?: Maybe<Scalars['Boolean']>;
  _nnull?: Maybe<Scalars['Boolean']>;
  _empty?: Maybe<Scalars['Boolean']>;
  _nempty?: Maybe<Scalars['Boolean']>;
};

export type GetProyeksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProyeksQuery = (
  { __typename?: 'Query' }
  & { items?: Maybe<(
    { __typename?: 'items' }
    & { proyek?: Maybe<Array<Maybe<(
      { __typename?: 'proyek' }
      & Pick<Proyek, 'judul' | 'alamat' | 'thumbnail' | 'deskripsi' | 'periode' | 'persentase' | 'harga_proyek' | 'proposal' | 'dana_terkumpul' | 'slot' | 'status' | 'uuid'>
      & { user_proyek?: Maybe<Array<Maybe<(
        { __typename?: 'user_proyek' }
        & Pick<User_Proyek, 'id'>
      )>>> }
    )>>> }
  )> }
);

export type GetUserProyekQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProyekQuery = (
  { __typename?: 'Query' }
  & { items?: Maybe<(
    { __typename?: 'items' }
    & { user_proyek?: Maybe<Array<Maybe<(
      { __typename?: 'user_proyek' }
      & Pick<User_Proyek, 'status'>
      & { proyeks?: Maybe<(
        { __typename?: 'proyek' }
        & Pick<Proyek, 'judul' | 'alamat' | 'periode' | 'harga_proyek' | 'persentase' | 'slot' | 'dana_terkumpul'>
      )> }
    )>>> }
  )> }
);


export const GetProyeksDocument = gql`
    query getProyeks {
  items {
    proyek {
      judul
      alamat
      thumbnail
      deskripsi
      periode
      persentase
      harga_proyek
      proposal
      user_proyek(filter: {status: {_eq: "published"}}) {
        id
      }
      dana_terkumpul
      slot
      status
      uuid
    }
  }
}
    `;
export type GetProyeksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProyeksQuery, GetProyeksQueryVariables>, 'query'>;

    export const GetProyeksComponent = (props: GetProyeksComponentProps) => (
      <ApolloReactComponents.Query<GetProyeksQuery, GetProyeksQueryVariables> query={GetProyeksDocument} {...props} />
    );
    

/**
 * __useGetProyeksQuery__
 *
 * To run a query within a React component, call `useGetProyeksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProyeksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProyeksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProyeksQuery(baseOptions?: Apollo.QueryHookOptions<GetProyeksQuery, GetProyeksQueryVariables>) {
        return Apollo.useQuery<GetProyeksQuery, GetProyeksQueryVariables>(GetProyeksDocument, baseOptions);
      }
export function useGetProyeksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProyeksQuery, GetProyeksQueryVariables>) {
          return Apollo.useLazyQuery<GetProyeksQuery, GetProyeksQueryVariables>(GetProyeksDocument, baseOptions);
        }
export type GetProyeksQueryHookResult = ReturnType<typeof useGetProyeksQuery>;
export type GetProyeksLazyQueryHookResult = ReturnType<typeof useGetProyeksLazyQuery>;
export type GetProyeksQueryResult = Apollo.QueryResult<GetProyeksQuery, GetProyeksQueryVariables>;
export function refetchGetProyeksQuery(variables?: GetProyeksQueryVariables) {
      return { query: GetProyeksDocument, variables: variables }
    }
export const GetUserProyekDocument = gql`
    query getUserProyek {
  items {
    user_proyek {
      status
      proyeks {
        judul
        alamat
        periode
        harga_proyek
        persentase
        slot
        dana_terkumpul
      }
    }
  }
}
    `;
export type GetUserProyekComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserProyekQuery, GetUserProyekQueryVariables>, 'query'>;

    export const GetUserProyekComponent = (props: GetUserProyekComponentProps) => (
      <ApolloReactComponents.Query<GetUserProyekQuery, GetUserProyekQueryVariables> query={GetUserProyekDocument} {...props} />
    );
    

/**
 * __useGetUserProyekQuery__
 *
 * To run a query within a React component, call `useGetUserProyekQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProyekQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProyekQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserProyekQuery(baseOptions?: Apollo.QueryHookOptions<GetUserProyekQuery, GetUserProyekQueryVariables>) {
        return Apollo.useQuery<GetUserProyekQuery, GetUserProyekQueryVariables>(GetUserProyekDocument, baseOptions);
      }
export function useGetUserProyekLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProyekQuery, GetUserProyekQueryVariables>) {
          return Apollo.useLazyQuery<GetUserProyekQuery, GetUserProyekQueryVariables>(GetUserProyekDocument, baseOptions);
        }
export type GetUserProyekQueryHookResult = ReturnType<typeof useGetUserProyekQuery>;
export type GetUserProyekLazyQueryHookResult = ReturnType<typeof useGetUserProyekLazyQuery>;
export type GetUserProyekQueryResult = Apollo.QueryResult<GetUserProyekQuery, GetUserProyekQueryVariables>;
export function refetchGetUserProyekQuery(variables?: GetUserProyekQueryVariables) {
      return { query: GetUserProyekDocument, variables: variables }
    }