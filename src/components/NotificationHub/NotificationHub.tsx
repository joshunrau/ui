import { XMarkIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';

import { useNotificationStore } from '@/stores/notification-store';

import { Card } from '../Card';
import { NotificationIcon } from './NotificationIcon';

export type NotificationHubProps = {
  /** The number of milliseconds before the notification is automatically cleared */
  timeout?: number;
};

export const NotificationHub = ({ timeout = 5000 }: NotificationHubProps) => {
  const { dismissNotification, notifications } = useNotificationStore();
  return (
    <div className="fixed bottom-0 z-50 w-full">
      <AnimatePresence>
        {notifications.map((item) => (
          <motion.div
            animate={{ height: 'auto', opacity: 1 }}
            className="relative max-w-sm"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            key={item.id}
            transition={{ bounce: 0.1, type: 'spring' }}
          >
            <div className="w-full p-2">
              <Card className="w-full rounded-lg p-0">
                <div className="p-4">
                  <div className="mb-2 flex items-center">
                    <NotificationIcon type={item.type} />
                    <h5 className="ml-3 flex-grow font-medium text-slate-900 dark:text-slate-100">
                      {item.title ?? item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </h5>
                    <button
                      className="inline-flex rounded-md text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-600"
                      onClick={() => {
                        dismissNotification(item.id);
                      }}
                      type="button"
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="my-2 text-slate-600 dark:text-slate-300">{item.message}</p>
                </div>
                <motion.div
                  animate={{ width: '100%' }}
                  className="h-1 bg-slate-500"
                  initial={{ width: '0%' }}
                  onAnimationComplete={() => {
                    dismissNotification(item.id);
                  }}
                  transition={{ duration: timeout / 1000, ease: 'linear' }}
                />
              </Card>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

