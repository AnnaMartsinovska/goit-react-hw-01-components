import css from './Profile.module.css';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.info}>{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.boxLi}>
          <span className={css.info}>Followers</span>
          <span className={css.name}>{stats.followers}</span>
        </li>
        <li className={css.boxLi}>
          <span className={css.info}>Views</span>
          <span className={css.name}>{stats.views}</span>
        </li>
        <li className={css.boxLi}>
          <span className={css.info}>Likes</span>
          <span className={css.name}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
