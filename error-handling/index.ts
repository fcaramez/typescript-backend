
module.exports = (app: any) => {
  app.use((req: any, res: any, next: any) => {
    res.status(400).json({ errorMessage: "This route does not exist" });
  });

  app.use((err: string, req: any, res: any, next: any) => {
    console.error("ERROR", req.method, req.path, err);
    if (!res.headersSent) {
      res.status(500).json({
        errorMessage: "Internal server error. Check the server console",
      });
    }
  });
};

