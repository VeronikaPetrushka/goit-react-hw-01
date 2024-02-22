import clsx from 'clsx'
import cn from 'classnames'
import css from './socialProfile.module.css'

const Profile = ({ userName, image, tag, location, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.userInfo}>
                <img
                    src={image}
                    alt="User avatar"
                />
                <p className={css.userDesc}>{userName}</p>
                <p className={css.userDesc}>{tag}</p>
                <p className={css.userDesc}>{location}</p>
            </div>
            <ul className={css.userInfo}>
                <li className={css.userStatItem}>
                    <span className={css.userStatItemText}>Followers </span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.userStatItem}>
                    <span className={css.userStatItemText}>Views </span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.userStatItem}>
                    <span className={css.userStatItemText}>Likes </span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;