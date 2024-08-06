// src/App.js
import { trace } from "@opentelemetry/api";
import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { Resource } from "@opentelemetry/resources";
import {
  BatchSpanProcessor,
  WebTracerProvider,
} from "@opentelemetry/sdk-trace-web";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { AuthProvider } from "./context/Auth";
import GoogleSignIn from "./GoogleSignin";

const exporter = new OTLPTraceExporter({
  url: "https://api.honeycomb.io/v1/traces",
  headers: {
    "x-honeycomb-team": "1vS8424tiEnmZfDEZiQgLH",
    "x-honeycomb-dataset": "test",
  },
});

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "my-service-name",
  }),
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager(),
});

registerInstrumentations({
  instrumentations: [
    getWebAutoInstrumentations({
      // Disable instrumentations you don't want
    }),
  ],
});

const tracer = trace.getTracer("my-react-app");

function App() {
  return (
    <GoogleOAuthProvider clientId="368747471698-m570pnvdpes6cncrupq9r2vvjp20951m.apps.googleusercontent.com">
      <AuthProvider>
        <div className="App">
          <h1>Google Sign-In Test</h1>
          <GoogleSignIn />
        </div>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
