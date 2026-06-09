export type UserRole = 'Customer' | 'Admin';

export interface UserPreferences {
  emailNotifications: boolean;
  smsNotifications: boolean;
  eventReminders: boolean;
  promotionalUpdates: boolean;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  phoneNumber: string;
  role: UserRole;
  preferences: UserPreferences;
  createdAt: string;
}