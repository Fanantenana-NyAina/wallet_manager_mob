import { useEffect, useState } from "react";
import { getApiKey } from "../services/auth.storage";
import { api } from "../services/api";

export const useAuth = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const key = await getApiKey();
      if (key) {
        api.defaults.headers.common["x-api-key"] = key;
        setApiKey(key);
      }
      setLoading(false);
    };

    init();
  }, []);

  return { apiKey, loading };
};
