## Project Title: Smishing Message Rewriting & Enrichment for ML Readiness

### Objective

This capstone project was aimed at producing a high-quality dataset tailored for training machine learning models to detect smishing (SMS phishing) messages. The dataset includes both original and realistically rewritten smishing messages, enriched metadata fields, and documentation for reproducibility.

### Summary of Completed Work

- Thoroughly reviewed and analyzed the base `DatasetCombined.csv` file to identify and classify messages as smishing, non-smishing, or lightly smishing based on content and threat context.
- Created a well-structured metadata layer that includes detailed columns: `source` (e.g., bank, delivery), `intent_type` (fraud, phishing), `malicious`, `threat_level`, and `linked_to`.
- Implemented a rewriting strategy that transforms original smishing messages using controlled linguistic variations while preserving intent. Rewritten messages are traceable via the `rewritten_text` column.
- Ensured traceability and structure by aligning rewrites with the corresponding `id` and preserving all other metadata.
- Designed the dataset for maximum utility in ML pipelines by maintaining balanced representation, label consistency, and example variety.
- Produced detailed documentation files covering rewriting logic, taxonomy of smishing types, schema reference, and preprocessing guidelines.
- Performed iterative batch-based rewriting to ensure consistency and minimize human or automation errors.

### Output File

`final_dataset_800_rewrites_fully_completed.csv`

This file is ready for integration into machine learning workflows or further evaluation pipelines.
