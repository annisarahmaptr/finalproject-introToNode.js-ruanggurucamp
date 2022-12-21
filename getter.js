function mapUsers(users) {
  let amount =  users.length

  let result = {
    data : users,
    count : amount
  }
  return result; // TODO: replace this
}

function mapArticle(articles) {
  let amount = articles.length

  let result = {
    data : articles,
    count : amount
  }
  return result; // TODO: replace this
}

// TODO: answer here

const users = [
  {
    id: 1,
    username: "isrotrip",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "dmtrxw",
    password: "oYt2Thj9w",
    gender: "male",
  },
];

const articles = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
  {
    id: 3,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 4,
  },
];

export default mapUsers
export const mapArticles = mapArticle

// console.log(mapUsers(users))
// console.log(mapArticles(articles))



