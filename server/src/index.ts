import express from "express";
const app = express();

const cors = require("cors");
const path = require("path");
const http = require("http").createServer(app);
const expressSession = require("express-session");

const session = expressSession({
  secret: "Give me food",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
});

app.use(express.static("public"));
app.use(express.json());
app.use(session);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const groceryItemsRoutes = require("./api/groceryItems/groceryItems.routes");
const { connectSockets } = require("./services/socket.service");

// Routes
app.use("/api/groceryItems", groceryItemsRoutes);
connectSockets(http, session);

app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  // res.send("whzaaaappp");
});

const port = process.env.PORT || 3030;
http.listen(port, console.log(`running on ${port}`));
