import '../styles/users.css';

const USERS = {
  'juice': {
    'email': "juice@thebestcats.com",
    'location': "Seattle, WA",
    'bio': "Juice Box, the kitten.",
    'avatar': "/img/juice.png",
  },
  'orange': {
    'email': "orange@thebestcats.com",
    'location': "Seattle, WA",
    'bio': "Orange Kitten, the menace",
    'avatar': "/img/orange.png",
  }
}

function UserProfile({ userName }) {
  const { email, location, bio, avatar } = USERS[userName];

  return (
    <div className="container">
      <img src={avatar} alt={`${userName}'s avatar`} className="avatar" />
      <div className="info">
        <h3 className="name">{userName}</h3>
        {email && <div className="meta">{email}</div>}
        {location && <div className="meta">Location: {location}</div>}
        {bio && <p className="bio">{bio}</p>}
      </div>
    </div>
  )
}

export default UserProfile;
