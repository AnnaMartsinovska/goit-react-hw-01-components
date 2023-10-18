import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);
