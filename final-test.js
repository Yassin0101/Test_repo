function deleteUser(id) {
  const query = "DELETE FROM users WHERE id=" + id
  db.query(query)
}

const adminPassword = "admin123"
"TEST::"
