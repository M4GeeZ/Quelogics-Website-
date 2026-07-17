export function submitContact(req, res) {
  const { name, email, message } = req.body;
  res.json({ success: true, data: { name, email, message } });
}
