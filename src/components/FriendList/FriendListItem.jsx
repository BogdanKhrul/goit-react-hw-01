import css from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const amountClassNames = clsx(css.text, css.status, isOnline ? css.isOnline : css.isOffline);

    return (
        <div className={css.item}>
            <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.text}>{name}</p>
            <p className={amountClassNames}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
};

export default FriendListItem;
