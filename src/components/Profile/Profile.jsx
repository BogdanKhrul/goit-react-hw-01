import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.box}>
            <div>
                <img className={css.img} src={image} alt="User avatar" />
                <p className={css.name}>{name}</p>
                <p className={css.txt}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.container}>
                <li className={css.item}>
                    <span className={css.infoTxt}>Followers</span>
                    <span className={css.infoUser}>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.infoTxt}>Views</span>
                    <span className={css.infoUser}>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.infoTxt}>Likes</span>
                    <span className={css.infoUser}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
