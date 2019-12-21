import React, { useState, useEffect, useMemo } from 'react';

import { MdNotifications } from 'react-icons/md';
import { formatDistance, parseISO } from 'date-fns';
import { pt } from 'date-fns/esm/locale';
import {
  Container,
  Scroll,
  Badge,
  NotificationList,
  Notification,
} from './styles';
import api from '~/services/api';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));
      setNotifications(data);
    }

    loadNotifications();
  }, []);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  function handleToogleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsAdd(id) {
    // esse endpoint ja seta a notification como lida. A proxima vez que renderizar ele vai estar como lida
    await api.put(`notifications/${id}`);

    // aqui estamos setando como lida no estado sem precisar refazer a request
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={handleToogleVisible}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsAdd(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
