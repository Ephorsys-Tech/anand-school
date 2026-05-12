export interface GalleryImage {
  _id: string;
  imageUrl: string;
  category: GalleryCategory;
  createdAt: string;
}

export type GalleryCategory = 'event' | 'activity' | 'achievement';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

export interface LoginResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user?: AuthUser;
  admin?: {
    id: string;
    email: string;
  };
}
