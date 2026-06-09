export type NotificationType =
  | 'BookingConfirmation'
  | 'EventReminder'
  | 'Cancellation'
  | 'AdminAlert';

export interface Notification {
  id: number;
  userId: number;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: string;
}