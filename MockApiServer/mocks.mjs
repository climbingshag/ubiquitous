import casual from "casual";

export const mocks = {
  Int: () => casual.integer,
  Float: () => casual.float,
  String: () => casual.word,
  Timestamp: () => casual.unix_time,
  ID: () => casual.uuid
};
