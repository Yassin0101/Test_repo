function login(username, password) {
  const query = "SELECT * FROM users WHERE username=" + username
  const result = db.query(query)
  if(result.password == password) {
    return true
  }
}

const secretKey = "abc123supersecret"
var x = 1
var y = 2
console.log(x + y)
```

**Step 3 — At the bottom select:**
```
● Create a new branch: test-review-4
