// PART 1 SQL
CREATE TABLE User (
  user_id INT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Post (
  post_id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE COMMENT (
  comment_id INT PRIMARY KEY,
  text TEXT,
  user_id INT,
  post_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (post_id) REFERENCES Post(post_id)
);

//
//Quary
SELECT
  Post.post_id,
  Post.title,
  Post.content,
  Post.created_at AS post_created_at,
  User.user_id,
  User.username,
  User.email,
  User.created_at AS user_created_at
FROM
  Post
  JOIN User ON Post.user_id = User.user_id
WHERE
  User.user_id = 3;
