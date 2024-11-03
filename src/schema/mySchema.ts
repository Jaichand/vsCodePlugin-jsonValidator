const Schema = {
  type: "object",
  properties: {
    Port0: {
      type: "object",
      properties: {
        baseAddress: {
          type: "integer",
          description: "Enable or disable the feature"
        },
        protocol: {
          type: "string",
          description: "Enable or disable the feature"
        },
        sizeBytes: {
          type: "integer",
          description: "Enable or disable the feature"
        },
        widthBits: {
          type: "integer",
          description: "Enable or disable the feature"
        }
      },
    },
    Port1: {
      type: "object",
      properties: {
        baseAddress: {
          type: "integer",
          description: "Enable or disable the feature"
        },
        protocol: {
          type: "string",
          description: "Enable or disable the feature"
        },
        sizeBytes: {
          type: "integer",
          description: "Enable or disable the feature"
        },
        widthBits: {
          type: "integer",
          description: "Enable or disable the feature"
        }
      },
    },
    Port2: {
      type: "object",
      properties: {
        baseAddress: {
          type: "integer",
          description: "Enable or disable the feature"
        },
        protocol: {
          type: "string",
          description: "Enable or disable the feature"
        },
        sizeBytes: {
          type: "integer",
          description: "Enable or disable the feature"
        },
        widthBits: {
          type: "integer",
          description: "Enable or disable the feature"
        }
      },
    },
  },
  required: ["Port0", "Port1", "Port2"],
  additionalProperties: false,
};

export default Schema;


export interface PortInterface {
  baseAddress: number;
  protocol: string;
  sizeBytes: number;
  widthBits: number
}

export type PortDetails = Record<"Port0" | "Port1" | "Port2", PortInterface>