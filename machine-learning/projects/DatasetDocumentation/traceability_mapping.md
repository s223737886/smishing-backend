## Traceability Mapping

Every rewritten message in the dataset has been engineered with a direct link to its original source. This ensures data transparency and makes the dataset suitable for ML benchmarking.

### Mapping Details:

- `rewritten_text` is present only when `label = smishing`
- Rewritten messages share metadata (id, source, etc.) with their originals
- `linked_to` reflects threat association (e.g., malware, phishing_site)
- Messages with no `threat_level` remain unchanged in linkage (`linked_to = no`)
- No rewrites were performed on `ham` or `non-smishing` rows
