import { context, propagation, trace } from "@opentelemetry/api";
import axios from "axios";
import { useCallback, useState } from "react";

const useApi = (baseURL) => {
  const [error, setError] = useState(null);

  const apiCall = useCallback(
    async (method, endpoint, data = null, token = null, parentSpan = null) => {
      let headers = { Authorization: `Bearer ${token}` };

      if (parentSpan) {
        const ctx = trace.setSpan(context.active(), parentSpan);
        const carrier = {};
        propagation.inject(ctx, carrier);

        headers = {
          ...headers,
          ...carrier,
        };
      }

      try {
        const config = {
          method,
          url: `${baseURL}${endpoint}`,
          headers: headers,
          data: data,
        };

        const response = await axios(config);
        return response.data;
      } catch (err) {
        if (parentSpan) {
          parentSpan.recordException(err);
        }
        setError(err.message);
        throw err;
      }
    },
    [baseURL],
  );

  return { apiCall, error };
};

export default useApi;
