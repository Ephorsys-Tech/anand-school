import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

// Same Next.js application ke API routes ke liye
// localhost ya production domain hard-code nahi karna hai.
const baseURL = '';

export const tokenStorage = {
  getTokens: () => {
    if (typeof window === 'undefined') return null;

    try {
      const tokens = localStorage.getItem('auth_tokens');

      return tokens ? JSON.parse(tokens) : null;
    } catch (error) {
      console.error('Failed to read auth tokens:', error);
      return null;
    }
  },

  setTokens: (tokens: {
    accessToken: string;
    refreshToken: string;
  }) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'auth_tokens',
        JSON.stringify(tokens)
      );
    }
  },

  clearTokens: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_tokens');
    }
  },
};

/* =========================================================
   PUBLIC API INSTANCE
   ========================================================= */

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* =========================================================
   AUTH API INSTANCE
   ========================================================= */

export const apiAuth: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* =========================================================
   TOKEN REFRESH QUEUE
   ========================================================= */

let isRefreshing = false;

let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}> = [];

/* =========================================================
   PROCESS QUEUED REQUESTS
   ========================================================= */

const processQueue = (
  error: unknown,
  token: string | null = null
) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else if (token) {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

/* =========================================================
   AUTH REQUEST INTERCEPTOR
   ========================================================= */

apiAuth.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const tokens = tokenStorage.getTokens();

    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* =========================================================
   AUTH RESPONSE INTERCEPTOR
   ========================================================= */

apiAuth.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    // Agar request config hi nahi hai
    if (!originalRequest) {
      return Promise.reject(error);
    }

    // Sirf 401 par refresh token try karega
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      /* -----------------------------------------------------
         Agar already refresh chal raha hai
         ----------------------------------------------------- */

      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({
            resolve,
            reject,
          });
        })
          .then((token) => {
            originalRequest.headers.Authorization =
              `Bearer ${token}`;

            return apiAuth(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const tokens = tokenStorage.getTokens();

        if (!tokens?.refreshToken) {
          throw new Error('No refresh token found');
        }

        /* ---------------------------------------------------
           Refresh API
           Same Next.js application:
           /api/auth/refresh
           --------------------------------------------------- */

        const { data } = await api.post(
          '/api/auth/refresh',
          {
            refreshToken: tokens.refreshToken,
          }
        );

        if (
          !data?.accessToken ||
          !data?.refreshToken
        ) {
          throw new Error(
            'Invalid refresh token response'
          );
        }

        /* ---------------------------------------------------
           Save new tokens
           --------------------------------------------------- */

        tokenStorage.setTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });

        /* ---------------------------------------------------
           Retry queued requests
           --------------------------------------------------- */

        processQueue(null, data.accessToken);

        /* ---------------------------------------------------
           Retry original request
           --------------------------------------------------- */

        originalRequest.headers.Authorization =
          `Bearer ${data.accessToken}`;

        return apiAuth(originalRequest);
      } catch (refreshError) {
        /* ---------------------------------------------------
           Refresh failed
           --------------------------------------------------- */

        processQueue(refreshError, null);

        tokenStorage.clearTokens();

        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;