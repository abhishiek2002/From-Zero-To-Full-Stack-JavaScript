# 📘 Deep Dive into Error Objects and Error Handling in Node.js & Axios

## 🔰 What is an Error Object?

In JavaScript (and Node.js), an **Error object** is a built-in object that provides information about an error that occurs during program execution.

It contains:

* `name`: The name/type of the error (e.g., `TypeError`, `ReferenceError`, `AxiosError`)
* `message`: A description of the error
* `stack`: A string representing the point in the code at which the Error was instantiated

### 🧱 Example:

```js
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.name);    // "Error"
  console.log(err.message); // "Something went wrong"
  console.log(err.stack);   // Stack trace
}
```

---

## 🌐 Error Objects in Axios (API calls)

When you use **Axios** to make HTTP requests, if the request fails (e.g., server returns 4xx or 5xx), Axios will throw a custom error object.

### 🔍 Structure of `AxiosError`:

```js
{
  message: "Request failed with status code 400",
  name: "AxiosError",
  code: "ERR_BAD_REQUEST",
  config: { ... }, // axios config for the request
  response: {
    status: 400,
    statusText: "Bad Request",
    headers: { ... },
    data: { error: "Invalid input" },
  },
  request: XMLHttpRequest, // (if browser) or http.ClientRequest (Node.js)
}
```

---

## 🧠 When Do `error.response`, `error.message`, and `error.request` Appear?

### 🔴 `error.response` – The server responded with an error (status 4xx or 5xx)

This means the server responded but sent back an error status (like 400, 401, 500).

**Use Case:**

* Invalid login
* Unauthorized access
* Server error

**Example:**

```js
catch (error) {
  if (error.response) {
    console.log("Status:", error.response.status); // e.g., 400
    console.log("Data:", error.response.data);     // { error: "Invalid input" }
  }
}
```

---

### 🟡 `error.request` – Request was sent but no response was received

Axios sent the request, but never got a reply. This is usually a network error, timeout, CORS issue, or the server is down.

**Use Case:**

* Backend server is offline
* Internet disconnected
* CORS blocked response

**Example:**

```js
catch (error) {
  if (error.request) {
    console.log("No response received from server");
    console.log(error.request); // Contains request details
  }
}
```

---

### 🟢 `error.message` – Axios couldn’t even make the request or had setup issues

This means the problem occurred **before** the request was made (like malformed URL or config).

**Use Case:**

* Invalid Axios config
* Invalid URL
* Code bugs

**Example:**

```js
catch (error) {
  console.log("Error Message:", error.message);
}
```

---

## ✅ Handling it properly with async/await:

```js
import axios from "axios";

const loginUser = async (credentials) => {
  try {
    const response = await axios.post("/api/login", credentials);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Status:", error.response.status);
      console.error("Message:", error.response.data.error);
    } else if (error.request) {
      // Request made but no response
      console.error("No response received");
    } else {
      // Something went wrong in setting up the request
      console.error("Axios Error:", error.message);
    }
    throw error; // Re-throw for higher-level handler if needed
  }
};
```

---

## 🛠️ Best Practices for Error Handling

### ✅ Always Use try...catch with async/await:

```js
try {
  const result = await apiCall();
} catch (err) {
  console.error("Something went wrong:", err.message);
}
```

### ✅ Use Custom Error Messages from Backend:

Server:

```js
res.status(400).json({ error: "Invalid email or password" });
```

Frontend:

```js
catch (err) {
  alert(err.response.data.error);
}
```

### ✅ Re-throw errors in utility/API files

```js
export const fetchData = async () => {
  try {
    return await axios.get("/api/data");
  } catch (err) {
    throw err; // So the main UI/component can handle it
  }
};
```

---

## 📦 Native Node.js Error Object Use Case

If you want to throw a custom error manually:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(4, 0);
} catch (err) {
  console.error(err.message); // "Cannot divide by zero"
}
```

---

## 📚 Summary Table

| Property   | Description                                    |
| ---------- | ---------------------------------------------- |
| `name`     | Type of error (e.g., "Error", "AxiosError")    |
| `message`  | Human-readable error description               |
| `stack`    | Trace of where the error occurred              |
| `response` | Axios: server response (status, headers, data) |
| `request`  | Axios: the request object sent to the server   |
| `config`   | Axios: request config (URL, headers, etc.)     |

---

## 🧠 Final Tips

* Errors **should not be ignored** – always log or handle them
* Always validate user input on frontend & backend
* Customize backend error messages to help users
* Wrap all async code in `try...catch`

Let me know if you want a **flowchart** or **diagram** on error flow between backend ↔ frontend!
