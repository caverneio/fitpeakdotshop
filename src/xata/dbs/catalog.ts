// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "product",
    columns: [
      { name: "name", type: "string" },
      { name: "slug", type: "string", unique: true },
      { name: "long_description", type: "text" },
      { name: "short_description", type: "text" },
      { name: "price", type: "float" },
      { name: "price_with_discount", type: "float" },
      { name: "stock", type: "int", notNull: true, defaultValue: "0" },
      { name: "data_for_curious", type: "text" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Product = InferredTypes["product"];
export type ProductRecord = Product & XataRecord;

export type DatabaseSchema = {
  product: ProductRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://Fitpeak-Workspace-4hlshe.us-east-1.xata.sh/db/catalog",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
