## Dataset Schema Explanation

This section outlines the structure and description of all columns included in the final dataset:

- `id`: A unique identifier for each message row.
- `label`: Classification category – can be `smishing`, `ham`, or `non-smishing`.
- `text`: The original message content.
- `rewritten_text`: Rewritten message variant (applicable only to smishing messages).
- `url`: Any URLs present in the message.
- `email`: Any email addresses extracted from the message.
- `phone`: Any phone numbers found within the message.
- `source`: The entity being impersonated (e.g., bank, Netflix, ATO).
- `intent_type`: The intended type of scam (e.g., fraud, phishing, reward).
- `malicious`: `yes` or `no` indicating if the message contains malicious intent.
- `threat_level`: A qualitative risk assessment – `none`, `low`, `medium`, `high`, `critical`.
- `linked_to`: The type of threat it is associated with (e.g., `malware`, `phishing_site`, `adware`, or `no` if not applicable).
