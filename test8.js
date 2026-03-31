function getUser(id) {
  const query = "SELECT * FROM users WHERE id=" + id
  const result = db.query(query)
  return result
}

const password = "admin123"
const apiKey = "sk-1234567890abcdef"

function calculateTotal(items) {
  let total = 0
  for(let i = 0; i <= items.length; i++) {
    total = total + items[i].price
  }
  return total
}
```

**Step 4 — At the bottom select:**
```
● Create a new branch: test-review-6
```

**Step 5 — Click "Propose new file" → "Create Pull Request"**

Then watch your terminal — you should see:
```
📩 Received GitHub event: pull_request
🔍 New PR detected: ...
🧠 Gemini is reviewing the code...
✅ Gemini finished the review
✅ Review posted on PR #...
