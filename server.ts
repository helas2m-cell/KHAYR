import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // Define submissions file path
  const SUBMISSIONS_DIR = path.join(process.cwd(), "data");
  const SUBMISSIONS_FILE = path.join(SUBMISSIONS_DIR, "submissions.json");

  // Ensure data folder and file exists for persistent storage
  if (!fs.existsSync(SUBMISSIONS_DIR)) {
    fs.mkdirSync(SUBMISSIONS_DIR, { recursive: true });
  }
  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2), "utf-8");
  }

  // API Endpoints
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // POST endpoint to request a demo
  app.post("/api/demo-request", (req, res) => {
    const { firstName, lastName, email, phone, clinicSize, country } = req.body;

    if (!firstName || !firstName.trim()) {
      return res.status(400).json({ error: "First Name is required." });
    }
    if (!email || !email.trim() || !email.includes("@")) {
      return res.status(400).json({ error: "Please enter a valid work email." });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ error: "Phone number is required." });
    }

    try {
      const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
      const submissions = JSON.parse(data);

      const newSubmission = {
        id: "demo_" + Math.random().toString(36).substring(2, 9),
        firstName: firstName.trim(),
        lastName: (lastName || "").trim(),
        email: email.trim(),
        phone: phone.trim(),
        clinicSize: clinicSize || "1–2 Dokter Gigi",
        country: country || "Indonesia",
        createdAt: new Date().toISOString()
      };

      submissions.push(newSubmission);
      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");

      console.log(`[INFO] Demo request saved successfully: ${email}`);

      return res.status(201).json({
        success: true,
        message: "Demo request recorded successfully",
        data: newSubmission
      });
    } catch (e: any) {
      console.error("[ERROR] Failed to save demo request:", e);
      return res.status(500).json({ error: "Failed to process request due to a server error." });
    }
  });

  // POST endpoint to simulate secure login to KHAYR OS
  app.post("/api/login", (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !email.trim() || !email.includes("@")) {
      return res.status(400).json({ error: "Email kerja tidak valid." });
    }
    if (!password || password.trim().length < 4) {
      return res.status(400).json({ error: "Password minimal harus 4 karakter." });
    }
    if (!role) {
      return res.status(400).json({ error: "Peran pengguna (Role) wajib dipilih." });
    }

    // Return mock success with custom staff name based on email prefix
    const namePrefix = email.split("@")[0];
    const capitalizedName = namePrefix.charAt(0).toUpperCase() + namePrefix.slice(1);
    
    let roleLabel = "Staff";
    if (role === "admin") roleLabel = "Staf Administrasi";
    if (role === "doctor") roleLabel = "Dokter Gigi / Perawat";
    if (role === "owner") roleLabel = "Pemilik Klinik (Owner)";

    console.log(`[AUTH] User ${email} logged in successfully as ${roleLabel}`);

    return res.status(200).json({
      success: true,
      message: "Login sukses",
      user: {
        email,
        role,
        roleLabel,
        name: capitalizedName
      }
    });
  });

  // GET endpoint to retrieve previous demo requests (for diagnostic or admin purposes)
  app.get("/api/demo-requests", (req, res) => {
    try {
      const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
      const submissions = JSON.parse(data);
      res.json({ success: true, submissions });
    } catch (e: any) {
      console.error("[ERROR] Failed to read demo requests:", e);
      res.status(500).json({ error: "Failed to load demo requests from database." });
    }
  });

  // DELETE endpoint to delete a specific demo request submission
  app.delete("/api/demo-requests/:id", (req, res) => {
    const { id } = req.params;
    try {
      const data = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
      let submissions = JSON.parse(data);
      const filtered = submissions.filter((sub: any) => sub.id !== id);
      
      if (submissions.length === filtered.length) {
        return res.status(404).json({ error: "Data demo request tidak ditemukan." });
      }

      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
      console.log(`[INFO] Demo request with ID ${id} deleted successfully.`);
      res.json({ success: true, message: "Data berhasil dihapus." });
    } catch (e: any) {
      console.error("[ERROR] Failed to delete demo request:", e);
      res.status(500).json({ error: "Gagal menghapus data dari database." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
