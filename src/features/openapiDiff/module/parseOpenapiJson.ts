import { OpenapiTypes } from "@/features/openapiDiff/types/openapiTypes";

type ParseOpenapiJson = (json: string) => OpenapiTypes;

export const parseOpenapiJson: ParseOpenapiJson =  (json) => {
  return JSON.parse(json) as OpenapiTypes;
};