## Rewriting Strategy Guide

This document describes the methods used to transform original smishing messages into realistic variants that maintain the same malicious intent. These variants were designed to make models more robust to unseen text and mimic the evolution of real-world attacks.

### Techniques Used:

1. **Synonym Substitution:** Common terms were replaced with functional equivalents. For instance, 'click' became 'tap', and 'verify' became 'confirm'.
2. **Obfuscation:** Words were intentionally misspelled or partially encoded to simulate how attackers bypass spam filters (e.g., 'account' → 'acc0unt').
3. **Contextual Shift:** Changed the domain of the scam from banking to tax, insurance, delivery, etc., to create semantic diversity while retaining the threat.
4. **Tone Variation:** Adjusted the level of urgency in messages (e.g., 'Act now!' vs 'Please review your account when possible').
5. **URL Modification:** Replaced domains with shortened links or phishy-looking URLs to mirror real attack behavior.
6. **Brand Imitation:** Swapped brand references (e.g., Netflix instead of a bank) to simulate common impersonation strategies.
7. **Fake Code Injection:** Included fabricated OTPs, case IDs, or reference numbers to add authenticity.
8. **Visual Distortion:** Replaced characters with similar Unicode values or symbols (e.g., 'l' with '|', 'o' with '0').
9. **Sentence Restructuring:** Reworded and reordered sentences to maintain meaning but vary structure.
10. **Formality Shifting:** Varied the formality of messages, simulating both casual and official tones.

### Implementation Notes

- Rewrites were generated in batches of 50–100 to ensure quality and prevent duplication.
- Each rewritten message is traceable via the `linked_to` and `id` columns.
