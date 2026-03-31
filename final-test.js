function deleteUser(id) {
  const query = "DELETE FROM users WHERE id=" + id
  db.query(query)
  console.log("HEHE");
}

const adminPassword = "admin123"
"TEST::"
