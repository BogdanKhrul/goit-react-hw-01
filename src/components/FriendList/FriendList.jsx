import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
      <ul className={css.friendsList}>
          {friends.map(friend => (
              <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          ))}
      </ul>
  );
};

export default FriendList;