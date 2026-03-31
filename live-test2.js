function getUser(id) {
  const query = "SELECT * FROM users WHERE id=" + id
  db.query(query)
}
const password = "admin123"
