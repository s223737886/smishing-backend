## Preprocessing Guidelines

### Steps Followed During Dataset Preparation:

1. **Initial Curation:** Combined multiple message sources into a unified format.
2. **Duplicate Removal:** Identified and removed exact duplicates based on core features (text, label, intent_type).
3. **Label Standardization:** Normalized all labels (`smishing`, `ham`, `non-smishing`) to lowercase.
4. **Metadata Enrichment:** Added and filled out `source`, `intent_type`, `threat_level`, and `linked_to`.
5. **Threat Attribution:** Used heuristics and rule-based mapping to assign `linked_to` values where applicable.
6. **Rewriting:** Generated new `rewritten_text` entries in batches of 50–100 with traceability.
7. **Final QA:** Reviewed all smishing messages to ensure they contain a corresponding rewritten version.
